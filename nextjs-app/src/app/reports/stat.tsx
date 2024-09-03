import Image from 'next/image'
import { metadata } from './layout'
import { list } from 'postcss'
import { List } from 'postcss/lib/list'

export interface FieldOfficeProps {
  // handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>): void
}
export default function Stat(stat: {title: string, value: string | undefined, status: string}) {
  return (
    <div className="flex items-center btn m-2 col-lg-3 col-sm-6 wow fadeInUp rounded-full w-48 h-48" data-wow-delay="0.1s">
        <a className="cat-item d-block bg-light text-center rounded-full p-3" href={`approvals?status=${stat.status}`}>
            <div className="rounded p-4">
                {/* <div className="icon mb-3">
                    <img class="img-fluid" src="img/icon-apartment.png" alt="Icon">
                    <Image src="/img/icon-apartment.png" alt="Icon" width={100} height={100}/>
                </div> */}
                <h3 className="font-black text-xl">{stat.title}</h3>
                <span className="text-xl">{stat.value}</span>
            </div>
        </a>
    </div>
  )
}
