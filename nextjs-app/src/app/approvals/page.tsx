import { PrismaClient } from "@prisma/client"
import Footer from '../footer'
import Navbar from '../navbar'


interface ApprovalSearchProps {
  searchParams: {
    status?: string;
    mineral?: string;
    district?: string;
  };
}

const prisma = new PrismaClient()

export default async function ApprovalsPage({searchParams}: ApprovalSearchProps) {
  const { status, mineral, district } = searchParams;
    const approvals = await prisma.approval.findMany({
        where: status ? { status } : {},
        orderBy: {
            id: "asc",
        }
    })
  return (
    <main className="h-screen container-xxl bg-white p-0">
      <Navbar/>
      <div className="flex flex-row flex-wrap m-10">
        <h3 className='h2'>Approvals Listing Page</h3>
        {/* <div className="flex">
            <DistrictDropdown handleSelectChange={handleSelectChange} />
            <MineralDropdown handleSelectChange={handleSelectChange} />
            <DateRangeField />
            Search by title
        </div> */}
        {}
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Id</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">District</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Division/Category</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Mineral</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title of Lease</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Acreage</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Reserve Price</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Bid Money</th>
              {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Financial Impact</th> */}
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nature of Case</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date of IEE/EIA Approval/Renewal</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date of IEE/EIA Expiry</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">CSRS</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">SIR Conducted</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Compliance Status</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date of IEE/EIA Filing (FRESH/RENEWAL CASES)</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Remarks</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            {approvals.map((item, index)=> {
                return <tr>
                <td>{item.id}</td>
                <td>{item.district}</td>
                <td>Minor Minerals</td>
                <td>{item.mineral}</td>
                <td>{item.title_of_lease}</td>
                <td>--</td>
                <td>{item.reserve_price}</td>
                <td>{item.bid_money}</td>
                {/* <td></td> */}
                <td>{item.nature_of_case}</td>
                <td>{item.date_of_approval_renewal?.toDateString()}</td>
                <td>{item.date_of_expiry?.toDateString()}</td>
                <td>{item.csrs}</td>
                <td>{item.status}</td>
                <td>{item.sir_conducted}</td>
                <td>{item.compliance_status}</td>
                <td>{item.date_of_filing?.toDateString()}</td>
                <td>{item.remarks}</td>
                <td><a href="#">Edit | View NOC</a></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
      <Footer/>
    </main>
  )
}
