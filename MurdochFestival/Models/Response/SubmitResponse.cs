
namespace MurdochFestival.Models.Response
{
    public class SubmitResponse
    {
        public SubmitResponse(string message)
        {
          Message = message;
        }

        public string Message { get; set; }
    }
}
