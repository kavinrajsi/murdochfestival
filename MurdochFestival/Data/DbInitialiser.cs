namespace MurdochFestival.Data
{
    public class DbInitialiser
    {
      public static void Initialise(FormContext context)
      {
        context.Database.EnsureCreated();
      }
    }
}
