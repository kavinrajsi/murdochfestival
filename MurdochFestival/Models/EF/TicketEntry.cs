using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MurdochFestival.Models.EF
{
    public class TicketEntry
    {
      public TicketEntry()
      {
        Created = DateTime.Now;
      }

      [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
      public int Id { get; set; }

      [Display(Name = "Contact Name")]
      [Required]
      [StringLength(150)]
      public string ContactName { get; set; }

      [Required]
      [Display(Name = "Email Address")]
      [StringLength(50)]
      public string Email { get; set; }

      public DateTime Created { get; set; }
    }
}
