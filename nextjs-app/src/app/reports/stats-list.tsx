import Image from 'next/image'
import { metadata } from './layout'
import Stat from './stat'
import DistrictDropdown from './district-dropdown'
import MineralDropdown from './mineral-dropdown'
import { FieldOfficeProps } from './field-office-dropdown'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function StatsList() {
    const handleSelectChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        "use server";
        console.log("CaseForm.handleSelectChange("+e.target.value+")")
        const { name, value } = e.target;
    }
    // const total_assessed_amount = await prisma.approval.aggregate({
    //     _sum: {
    //         assessment_amount: true,
    //     },
    // })
    // const total_recovered_amount = await prisma.case.aggregate({
    //     _sum: {
    //         recovered_amount: true,
    //     },
    // })
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
    const pending_dg_office = await prisma.approval.aggregate({
        _count: {
            id: true,
        },
        where: {
            status: {
              equals: 'DGMM',
            },
        },
    })
    const pending_dg_office_la_division = await prisma.approval.aggregate({
        _count: {
            id: true,
        },
        where: {
            status: {
              equals: 'LA_DIVISION',
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
    const unknown = await prisma.approval.aggregate({
        _count: {
            id: true,
        },
        where: {
            OR : [
                    {status: {equals: ''}},
                    {status: {equals: null}},
                    {status: {equals: undefined}}
            ]
        }
    })

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="flex">
                    <DistrictDropdown handleSelectChange={handleSelectChange} />
                    <MineralDropdown handleSelectChange={handleSelectChange} />
                    {/* Datewise/Districtwise */}
                </div>
                <div className="flex">
                    <Stat status='' title='Total Cases' value={total_cases._count.id?.toString()} />
                    <Stat status='APPROVED' title='Total Approved Cases' value={total_approved._count.id?.toString()} />
                    <Stat status='PENDING' title='Total Pending Cases' value={total_pending._count.id?.toString()} />
                    <Stat status='FRESH' title='Fresh Cases' value={total_fresh._count.id?.toString()} />
                    <Stat status='RENEWAL' title='Remaining Renewal Cases' value={total_renewal._count.id?.toString()} />
                    <Stat status='DEFERRED' title='Deferred Cases' value={total_deferred._count.id?.toString()} /> 
                    <Stat status='REFUSED' title='Refused Cases' value={total_deferred._count.id?.toString()} /> 
                    {/* <Stat status='' title='Unknown' value={unknown._count.id?.toString()} />
                    {/* {stats.map((item,index)=>{
                        return <Stat title={item.title} value={item.value} />
                    })} */}
                </div>
            </div>
        </div>
    )
}
