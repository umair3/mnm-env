import Navbar from '@/app/navbar'
import Footer from '@/app/footer'
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';
import CaseForm from '@/app/add-case/case-form';
import CaseEditForm, { CaseProps } from './case-edit-form';
import CaseStepper from '../../stepper';


export default async function Case(request: NextRequest) {
  console.log(`Case(${JSON.stringify(request)})`)
  const prisma = new PrismaClient()
  const case_obj = await prisma.case.findUnique({where: {id: parseInt(request.params.id)}})
  console.log(`${case_obj?.date}`)
  
  return (
    <main className="container-xxl bg-white p-0">
      <Navbar/>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"maxWidth": "600px;"}}>
            <h1 className="mb-3">Update Case</h1>
          </div>
          <CaseStepper case={case_obj as CaseProps}/>
        </div>
      </div>
      <Footer/>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </main>
  )
}
