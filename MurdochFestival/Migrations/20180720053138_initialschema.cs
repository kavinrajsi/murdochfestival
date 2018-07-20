using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MurdochFestival.Migrations
{
    public partial class initialschema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ContactUsEntries",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ContactName = table.Column<string>(maxLength: 150, nullable: false),
                    Email = table.Column<string>(maxLength: 50, nullable: false),
                    ContactMessage = table.Column<string>(maxLength: 4000, nullable: false),
                    Created = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactUsEntries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SubscribeEntries",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ContactName = table.Column<string>(maxLength: 150, nullable: false),
                    Email = table.Column<string>(maxLength: 50, nullable: false),
                    Created = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubscribeEntries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TicketEntries",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ContactName = table.Column<string>(maxLength: 150, nullable: false),
                    Email = table.Column<string>(maxLength: 50, nullable: false),
                    Created = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TicketEntries", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ContactUsEntries");

            migrationBuilder.DropTable(
                name: "EventLog");

            migrationBuilder.DropTable(
                name: "SubscribeEntries");

            migrationBuilder.DropTable(
                name: "TicketEntries");
        }
    }
}
