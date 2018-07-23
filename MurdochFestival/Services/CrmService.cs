using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using MurdochFestival.Logging;
using MurdochFestival.Models.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace MurdochFestival.Services
{
    public class CrmService : ICrmService
    {
        private readonly ILogger _logger;
        private const string ClientId = "tzr5l9rlaoewwugd5p7028z9";
        private const string ClientSecret = "2MNmIF4uXO3sCOHM81Cb83Yq";
        private const string AuthHostName = "https://auth.exacttargetapis.com";
        private const string ServiceHostName = "https://www.exacttargetapis.com";

        public CrmService(ILogger<CrmService> logService)
        {
            _logger = logService;
        }

        private static async Task<string> GetAccessToken()
        {
            using (var client = new HttpClient())
            {
                var values = new Dictionary<string, string>
                {
                    { "clientId", ClientId },
                    { "clientSecret", ClientSecret }
                };

                var content = new FormUrlEncodedContent(values);
                var response = await client.PostAsync(new Uri(AuthHostName + "/v1/requestToken"), content);
                var responseString = await response.Content.ReadAsStringAsync();
                dynamic responseObject = JObject.Parse(responseString);

                return (string) responseObject.accessToken;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="apiPath">Path to specific api e.g. /contacts/v1/contacts</param>
        /// <param name="parameters">api parameters as json string</param>
        /// <returns></returns>
        public static dynamic CrmClient(string apiPath, string parameters)
        {
            var tokenTask = GetAccessToken();
            tokenTask.Wait();
            var token = tokenTask.Result;

            if (string.IsNullOrEmpty(token))
            {
                throw new Exception("No Salesforce token returned.");
            }

            using (var client = new HttpClient())
            {
                var content =new StringContent(parameters, Encoding.UTF8, "application/json");
                client.DefaultRequestHeaders.Add("Authorization", "Bearer " + token);

                var responseTask = client.PostAsync(new Uri(ServiceHostName + apiPath), content);
                responseTask.Wait();

                var stringTask = responseTask.Result.Content.ReadAsStringAsync();
                stringTask.Wait();

                var response = JObject.Parse(stringTask.Result);

                if (stringTask.Result == "<h1>596 Service Not Found</h1>" || ParseResponseValue(response , "operationStatus") == "FAIL" || ParseResponseValue(response, "message") == "Internal Server Error")
                {
                    throw new Exception(stringTask.Result);
                }

                return response;
            }
        }

        #region Helper methods for parsing to and from Json
        private static string ParseResponseValue(JObject yourJArray, string key)
        {
            foreach (var keyValuePair in yourJArray)
            {
                if (key == keyValuePair.Key)
                {
                    return keyValuePair.Value.ToString();
                }
            }
            return string.Empty;
        }

        private static object[] AttributeKeyValuePair(Dictionary<string, object> values)
        {
            var result = new object[values.Count];
            var vEnumerator = values.GetEnumerator();
            vEnumerator.MoveNext();

            using (vEnumerator)
            {
                for (var i = 0; i < values.Count; i++)
                {
                    result[i] = new
                    {                    
                        name = vEnumerator.Current.Key,
                        value = vEnumerator.Current.Value
                    };
                   
                    vEnumerator.MoveNext();
                }
            }            
            return result;
        }

        private static object AttributeParam(string attributeName, Dictionary<string, object> values)
        {
            var valuesObject = new
            {
                values = AttributeKeyValuePair(values) 
            };
            
            var attributeObject = new
            {
                name = attributeName,
                items = new[]
                {
                    valuesObject
                }
            };

            return attributeObject;
        }
        #endregion

        /// <summary>
        /// Create a new Contact in Salesforce. Updates an existing record if this email already exists.
        /// https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/createContacts.htm
        /// </summary>
        /// <param name="contact"></param>
        /// <returns></returns>
        public bool CreateContact(CrmContact contact)
        {
            try
            {
                #region Json Parameters

                var emailAttributeValues = new Dictionary<string, object>
                {
                    {"Email Address", contact.EmailAddress},
                    {"HTML Enabled", true}
                };
                var emailAddressesAttribute = AttributeParam("Email Addresses", emailAttributeValues);

                var emailDemographicsAttributeValues = new Dictionary<string, object>
                {
                    {"Last_Name", contact.LastName},
                    {"First_Name", contact.FirstName},
                };

                if (contact.SoundOnFestivalSubscribe > 0)
                {
                  emailDemographicsAttributeValues.Add("SoundOnFestivalSubscribe", contact.SoundOnFestivalSubscribe);
                }
                if (contact.SoundOnFestivalTicket > 0)
                {
                  emailDemographicsAttributeValues.Add("SoundOnFestivalTicket", contact.SoundOnFestivalTicket);
                }

                var emailDemographicsAddressesAttribute = AttributeParam("Email Demographics", emailDemographicsAttributeValues);

                var parameters = JsonConvert.SerializeObject(new
                {
                    contactKey = contact.EmailAddress,
                    attributeSets = new []
                    {
                        emailAddressesAttribute,
                        emailDemographicsAddressesAttribute
                    }
                });
                #endregion

                var result = CrmClient("/contacts/v1/contacts", parameters);

                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(LoggingEvents.CrmCreateContact, ex, "Error testing CRM connection.");
                return false;
            }
        }
    }
}
