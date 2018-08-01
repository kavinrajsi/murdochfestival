
namespace MurdochFestival.Settings
{
    public class NetworkConfig
    {
      public NetworkConfig()
      {
        //set the defaults
        Host = "localhost";
        EnableSsl = false;
        Port = 25;
      }

      public string Host
      {
        get; set;
      }

      public string UserName
      {
        get; set;
      }

      public string Password
      {
        get; set;
      }

      public bool EnableSsl
      {
        get; set;
      }

      public int Port
      {
        get; set;
      }
    }
}
