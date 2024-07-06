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
          <h3 className='h2'>Approval Status</h3>
          <StatsList/>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
