using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace web.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Approval",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    District = table.Column<string>(type: "TEXT", nullable: true),
                    Mineral = table.Column<string>(type: "TEXT", nullable: true),
                    TitleOfLease = table.Column<string>(type: "TEXT", nullable: true),
                    ReservePrice = table.Column<int>(type: "INTEGER", nullable: false),
                    BidMoney = table.Column<int>(type: "INTEGER", nullable: false),
                    FinancialImpact = table.Column<int>(type: "INTEGER", nullable: false),
                    NatureOfCase = table.Column<string>(type: "TEXT", nullable: true),
                    DateOfApprovalRenewal = table.Column<DateTime>(type: "TEXT", nullable: false),
                    DateOfExpiry = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CSRS = table.Column<string>(type: "TEXT", nullable: true),
                    Status = table.Column<string>(type: "TEXT", nullable: true),
                    Remarks = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Approval", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Approval");
        }
    }
}
