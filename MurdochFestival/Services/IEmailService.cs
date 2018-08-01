using MurdochFestival.Models.EF;

namespace MurdochFestival.Services
{
    public interface IEmailService
    {
      bool SendContactUsSystemEmail(ContactUsEntry entry);
    }
}
