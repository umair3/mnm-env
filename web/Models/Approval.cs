using System.ComponentModel.DataAnnotations;

public class Approval
{
    public int Id { get; set; }
    public string? District { get; set; }
    public string? Mineral { get; set; }
    public string? TitleOfLease { get; set; }
    public int ReservePrice { get; set; }
    public int BidMoney { get; set; }
    public int FinancialImpact { get; set; }
    public string? NatureOfCase { get; set; }
    [DataType(DataType.Date)]
    public DateTime DateOfApprovalRenewal { get; set; }
    [DataType(DataType.Date)]
    public DateTime DateOfExpiry { get; set; }
    public string? CSRS { get; set; }
    public string? Status { get; set; }
    public string? SIRConducted { get; set; } // Site Inspection Report
    public string? ComplianceStatus { get; set; } // CSR - Compliance Status Report/COMPLETE/INCOMPLETE
    [DataType(DataType.Date)]
    public DateTime? DateOfFiling { get; set; }
    public string? Remarks { get; set; }

}