import Image from 'next/image'
import { metadata } from './layout'
import Stat from './stat'
import DistrictDropdown from './district-dropdown'
import MineralDropdown from './mineral-dropdown'
import { FieldOfficeProps } from './field-office-dropdown'
import { PrismaClient } from '@prisma/client'
import DateField from './date-field'
import DateRangeField from './date-range-field'
import CategoryDropdown from './category-dropdown'
import TypeDropdown from './type-dropdown'

const prisma = new PrismaClient()

export default async function StatsList() {
    const handleSelectChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        "use server";
        console.log("CaseForm.handleSelectChange("+e.target.value+")")
        const { name, value } = e.target;
    }
    const total_cases = await prisma.approval.aggregate({
        _count: {
            id: true,
        },
    })
    const total_approved = await prisma.approval.aggregate({
        _count: {
            id: true,
        },
        where: {
            status: {
              equals: 'APPROVED',
            },
        },
    })
    const total_deferred = await prisma.approval.aggregate({
        _count: {
            id: true,
        },
        where: {
            status: {
              equals: 'DEFERRED',
            },
        },
    })
    const total_pending = await prisma.approval.aggregate({
        _count: {
            id: true,
        },
        where: {
            status: {
              equals: 'PENDING',
            },
        },
    })
    const total_fresh = await prisma.approval.aggregate({
        _count: {
            id: true,
        },
        where: {
            status: {
              equals: 'FRESH',
            },
        },
    })
    const total_renewal = await prisma.approval.aggregate({
        _count: {
            id: true,
        },
        where: {
            status: {
              equals: 'RENEWAL',
            },
        },
    })

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time to the start of the day

    const total_expired = await prisma.approval.aggregate({
    _count: {
        id: true,
    },
    where: {
        date_of_expiry: {
        lt: today,
        },
    },
    });

    console.log(total_expired);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="flex">
                    <Stat status='' title='Total Cases' value={total_cases._count.id?.toString()} />
                    <Stat status='VALID_APPROVALS' title='Valid Approvals' value={total_approved._count.id?.toString()} />
                    <Stat status='EXPIRED' title='Expired Cases' value={total_expired._count.id?.toString()} /> 
                    <Stat status='PENDING' title='Pending Cases' value={total_pending._count.id?.toString()} />
                    {/* <Stat status='FRESH' title='Fresh Cases' value={total_fresh._count.id?.toString()} />
                    <Stat status='RENEWAL' title='Renewal Cases' value={total_renewal._count.id?.toString()} /> */}
                    <Stat status='DEFERRED' title='Deferred Cases' value={total_deferred._count.id?.toString()} /> 
                    <Stat status='REFUSED' title='Refused Cases' value={total_deferred._count.id?.toString()} /> 
                    {/* <Stat status='' title='Unknown' value={unknown._count.id?.toString()} />
                    {/* {stats.map((item,index)=>{
                        return <Stat title={item.title} value={item.value} />
                    })} */}
                </div>
                <h3 className='h2'>Search</h3>
                <div className="flex">
                    <CategoryDropdown handleSelectChange={handleSelectChange} />
                    <TypeDropdown handleSelectChange={handleSelectChange} />
                    <DistrictDropdown handleSelectChange={handleSelectChange} />
                    <MineralDropdown handleSelectChange={handleSelectChange} />
                    <DateRangeField />
                </div>
                <h3 className='h2'>Enter New Record</h3>
            </div>
        </div>
    )
}
