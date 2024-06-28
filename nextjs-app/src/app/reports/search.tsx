import Image from 'next/image'
import { metadata } from './layout'

export default function Search() {
  return (
    <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{"padding":'35px'}}>
        <div className="container">
            <div className="row g-2">
                <div className="col-md-10">
                    <div className="row g-2">
                        <div className="col-md-10">
                          <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}
