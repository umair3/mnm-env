import Footer from '../footer'
import Navbar from '../navbar'


interface ApprovalSearchProps {
  searchParams: {
    status?: string;
    mineral?: string;
    office?: string;
    district?: string;
  };
}


export default function ApprovalsPage({searchParams}: ApprovalSearchProps) {
  const { status, mineral, office, district } = searchParams;
  return (
    <main className="h-screen container-xxl bg-white p-0">
      <Navbar/>
      <div className="flex flex-row flex-wrap m-10">
        <h3 className='h2'>Approvals Listing Page</h3>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Id</th>
              <th>District</th>
              <th>Mineral</th>
              <th>Title of Lease</th>
              <th>Reserve Price</th>
              <th>Bid Money</th>
              <th>Financial Impact</th>
              <th>Nature of Case</th>
              <th>Date of Approval/Renewal</th>
              <th>Date of Expiry</th>
              <th>CSRS</th>
              <th>Status</th>
              <th>SIR Conducted</th>
              <th>Compliance Status</th>
              <th>Date of Filing</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Lahore</td>
              <td>Ordinary Sand</td>
              <td>No.Ml/DDM&M. LHR. Ordinary Sand.Manga Mandi Zone</td>
              <td>10,01,01,000</td>
              <td></td>
              <td></td>
              <td></td>
              <td>14.04.2023</td>
              <td>13.04.2026</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lahore</td>
              <td>Ordinary Sand</td>
              <td>No.Ml/DDM&M. LHR. Ordinary Sand. Saggian.</td>
              <td>10,59,50,000</td>
              <td></td>
              <td></td>
              <td></td>
              <td>16.11.2022</td>
              <td>15.11.2025</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Lahore</td>
              <td>Ordinary Sand</td>
              <td>No.Ml/DDM&M. LHR. Ordinary Sand. Bhadru/Chamrupur Zone</td>
              <td>12,20,02,000</td>
              <td></td>
              <td></td>
              <td></td>
              <td>14.04.2023</td>
              <td>13.04.2026</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Lahore</td>
              <td>Ordinary Sand</td>
              <td>No.Ml/DDM&M. LHR. Ordinary Sand. Khud Pur Zone.</td>
              <td>5,45,00,000</td>
              <td></td>
              <td></td>
              <td></td>
              <td>06.01.2022</td>
              <td>05.01.2025</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Lahore</td>
              <td>Ordinary Sand</td>
              <td>No.Ml/DDM&M. LHR. Ordinary Sand. Muridwal/Niaz Beg Zone</td>
              <td>19,10,00,000</td>
              <td></td>
              <td></td>
              <td></td>
              <td>14.04.2023</td>
              <td>13.04.2026</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </main>
  )
}
