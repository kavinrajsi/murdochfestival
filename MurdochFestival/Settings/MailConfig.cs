
namespace MurdochFestival.Settings
{
    public class MailConfig
    {
      public MailConfig()
      {
        DeliveryMethod = MethodType.Directory;
      }

      public MethodType DeliveryMethod { get; set; }

      public string DefaultFrom { get; set; }

      public DirectoryConfig Directory { get; set; }

      public NetworkConfig Network { get; set; }

      public enum MethodType
      {
        Network,
        Directory
      }

      public string SystemEmailAddress { get; set; }
    }
}
