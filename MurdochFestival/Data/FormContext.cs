using Microsoft.EntityFrameworkCore;
using MurdochFestival.Models.EF;

namespace MurdochFestival.Data
{
    public class FormContext : DbContext
    {
      public FormContext(DbContextOptions<FormContext> options) : base(options)
      {
      }

      public DbSet<TicketEntry> TicketEntries { get; set; }
      public DbSet<SubscribeEntry> SubscribeEntries { get; set; }
      public DbSet<ContactUsEntry> ContactUsEntries { get; set; }

      protected override void OnModelCreating(ModelBuilder modelBuilder)
      {
        modelBuilder.Entity<TicketEntry>().ToTable("TicketEntries");
        modelBuilder.Entity<SubscribeEntry>().ToTable("SubscribeEntries");
        modelBuilder.Entity<ContactUsEntry>().ToTable("ContactUsEntries");
        base.OnModelCreating(modelBuilder);
      }
    }
}
