"use client"
import React, { useState, useEffect } from 'react'
import FieldOfficeDropdown, { FieldOfficeProps } from '../../field-office-dropdown'
import { FieldOffice } from '../../../field-office/props'
import DistrictDropdown from '../../district-dropdown'
import { District } from '../../../district/props'
import MineralDropdown, { Mineral } from '../../mineral-dropdown'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import DateField from '../../date-field'
import TehsilField from '../..//tehsil-field'
import LocationField from '../../location-field'
import PoliceStationField from '../../police-station-field'
import AssessmentAmountField from '../../assessment-amount-field'
import ArrearsField from '../../arrears-field'
import ShowCauseDateField from '../../showcause-date-field'
import CaseStatusField from '../../case-status-field'
import IllegalActivityStoppedField from '../../illegal-activity-stopped-field'
import MachinerySeizedField from '../../machinery-seized-field'
import MachinerySeizedRemarksField from '../../machinery-seized-remarks-field'
import CaseRemarksField from '../../case-remarks-field'
import CaseActionsTakenField from '../../case-actions-taken-field'
import PersonalHearingProceedingsField from '../../personal-hearing-proceedings-field'
import CaseDecisionField from '../../case-decision-field'
import RecoveredAmountField from '../../recovered-amount-field'
import { CaseType } from '../../types'
import { Prisma } from '@prisma/client'
import Link from 'next/link'
import { NewCaseProps } from '@/app/add-case/case-form'

interface Accused {
    name: string
    holds_lease: boolean
}

interface Attachment {
    tags: [string]
}

type CoordinatePair = {
    easting: number
    northing: number
}

interface Inspector {
    name: string
    designation: string
}

interface Inspection {
    date: Date
    inspectors: [Inspector]
    reports: [Attachment]
}

interface FIR {
    date: Date
    number: string
    complaint: File
    fir_copy: File
}

export interface CaseProps extends NewCaseProps {
    id: number
}

interface CaseEditFormProps{
    case: CaseProps
    next_step?: any 
}

export default function CaseEditForm(props: CaseEditFormProps) {
    console.log(`CaseEditForm(${props})`)
    const [caseFormData, setCaseFormData] = useState<CaseProps>({...props.case})
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const { push } = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("CaseForm.handleInputChange("+e.target.value+")")
        const { name, value } = e.target;
        setCaseFormData({
            ...caseFormData,
            [name]: value,
            // [e.target.id]: e.target.value,
        });
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("CaseForm.handleNumberChange("+e.target.value+")")
        const { name, value } = e.target;
        setCaseFormData({
            ...caseFormData,
            [name]: parseInt(value),
            // [event.target.id]: event.target.value,
        });
    };

    const handleBooleanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("CaseForm.handleBooleanChange("+e.target.value+")")
        const { name, value } = e.target;
        let v: boolean = value === "1"
        setCaseFormData({
            ...caseFormData,
            [name]: v,
            // [event.target.id]: event.target.value,
        });
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("CaseForm.handleDateChange("+e.target.value+")")
        const { name, value } = e.target;
        setCaseFormData({
            ...caseFormData,
            [name]: new Date(value).toISOString(),
            // [event.target.id]: event.target.value,
        });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
        console.log("CaseForm.handleSelectChange("+e.target.value+")")
        const { name, value } = e.target;
        setCaseFormData({
            ...caseFormData,
            [name]: value,
            // [event.target.id]: event.target.value,
        });
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        console.log(caseFormData);
        if (!validateCaseFormData(caseFormData)) {
            console.log(`validation failed.`)
            setError('Please fill in all required fields.');
            return;
        }
        try {
            const response = await fetch('/api/cases/' + props.case.id, {method:"PUT", headers:{"Content-type":"application/json"}, body:JSON.stringify(caseFormData)});
            console.log(`response: ${response.status} ${response.statusText}`)
            if(response.ok){
                console.log('Form data submitted successfully')
                // show updated message here.
                setSuccess(`Case (id: ${props.case.id}) updated successfully`)
                // push('/?message=success'); // redirect to home page
                // push(`/cases/edit/${props.case.id}/?message=success`);
                props.next_step()
            }else{
                setError('An error occurred while submitting the form.')
            }
        } catch (error) {
            setError('An error occurred while submitting the form. Network errors or other exceptions.')
        }
    }

    const validateCaseFormData = (formData: CaseProps): boolean => {
        // Implement your form validation logic here
        // Return true if validation passes, false otherwise
        // You can check required fields, field formats, etc.
        if (formData.field_office && formData.date && formData.district && formData.mineral && formData.location) {
            return true
        }
        return false
    };

    return (
        <div className="row g-4">
                    <div className="col-md-12">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={onSubmit}>
                                <div className="row g-3">
                                    <ShowCauseDateField value={props.case.date_of_showcause} onChange={handleDateChange} />
                                    <p>Show cause notice (+) [coming soon]</p>
                                    <CaseStatusField value={props.case.status} onChange={handleSelectChange} />
                                    <IllegalActivityStoppedField value={props.case.illegal_activity_stopped} onChange={handleBooleanChange} />
                                    <MachinerySeizedField value={props.case.machinery_seized} onChange={handleBooleanChange} />
                                    <MachinerySeizedRemarksField value={props.case.machinery_seized_remarks} onChange={handleInputChange} />
                                    <CaseRemarksField value={props.case.remarks} onChange={handleInputChange} />
                                    <CaseActionsTakenField value={props.case.actions_taken}  onChange={handleInputChange} />
                                    <PersonalHearingProceedingsField value={props.case.personal_hearing_proceedings} onChange={handleInputChange} />
                                    <CaseDecisionField value={props.case.decision} onChange={handleInputChange} />
                                    <RecoveredAmountField value={props.case.recovered_amount} onChange={handleNumberChange} />
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Finish</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
    )
}
