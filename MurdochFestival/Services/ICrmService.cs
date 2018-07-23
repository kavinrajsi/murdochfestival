using MurdochFestival.Models.Services;

namespace MurdochFestival.Services
{
    public interface ICrmService
    {
      bool CreateContact(CrmContact contact);
    }
}
