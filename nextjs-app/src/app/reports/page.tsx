import Footer from '../footer'
import Navbar from '../navbar'
import StatsList from './stats-list';


interface ApprovalSearchProps {
  searchParams: {
    status?: string;
    mineral?: string;
    office?: string;
    district?: string;
  };
}


export default function ReportsPage({searchParams}: ApprovalSearchProps) {
  const { status, mineral, office, district } = searchParams;
  return (
    <main className="h-screen container-xxl bg-white p-0">
      <Navbar/>
      <div className="flex flex-row flex-wrap m-10">
        <div>
          <h3 className='h2'>IEE Approval Cases Summary</h3>
          <StatsList/>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Approved</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Pending</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Deffered</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Refused</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Minor Mineral</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
            <tr>
              <td>Small Scale Mining</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
            <tr>
              <td>   -- Limestone</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
            <tr>
              <td>   -- Other than Limestone</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </main>
  )
}
