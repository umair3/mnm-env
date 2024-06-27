using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace web.Migrations
{
    /// <inheritdoc />
    public partial class MoreFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ComplianceStatus",
                table: "Approval",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfFiling",
                table: "Approval",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SIRConducted",
                table: "Approval",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ComplianceStatus",
                table: "Approval");

            migrationBuilder.DropColumn(
                name: "DateOfFiling",
                table: "Approval");

            migrationBuilder.DropColumn(
                name: "SIRConducted",
                table: "Approval");
        }
    }
}
