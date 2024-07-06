"use client"
import { useEffect, useState } from 'react';
import Navbar from '@/app/navbar'
import Footer from '@/app/footer'
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';
import CaseForm, { NewCaseProps } from '@/app/add-case/case-form';
import CaseEditForm, { CaseProps } from './edit/[id]/case-edit-form';
import InspectionForm from '@/app/inspections/inspection-form';
import LocationForm from '../locations/location-form';
import CasefileForm from '../casefile/casefile-form';
import CurrentStatusEditForm from './edit/[id]/current-status-edit-form';

interface CaseStepperProps{
  case: CaseProps
}

export default function CaseStepper(props:CaseStepperProps) {
  console.log(`Stepper(${props})`)
  const [currentStep, setCurrentStep] = useState(1)
  
  const nextStep = () => {
    console.log(`nextStep(${currentStep})`)
    setCurrentStep(currentStep+1)
    console.log(`nextStep(${currentStep})`)
  }

  const prevStep = () => {
    setCurrentStep(currentStep-1)
  }

  useEffect(()=>{
    console.log(`useEffect(${currentStep})`)
  }, [currentStep])

  let one = (currentStep === 1)?"flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse":"flex items-center text-gray-600 dark:text-gray-500 space-x-2.5 rtl:space-x-reverse"
  let two = (currentStep === 2)?"flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse":"flex items-center text-gray-600 dark:text-gray-500 space-x-2.5 rtl:space-x-reverse"
  let three = (currentStep === 3)?"flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse":"flex items-center text-gray-600 dark:text-gray-500 space-x-2.5 rtl:space-x-reverse"
  let four = (currentStep === 4)?"flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse":"flex items-center text-gray-600 dark:text-gray-500 space-x-2.5 rtl:space-x-reverse"
  let five = (currentStep === 5)?"flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse":"flex items-center text-gray-600 dark:text-gray-500 space-x-2.5 rtl:space-x-reverse"

  let one_h3 = (currentStep === 1)?"font-medium leading-tight text-blue-600 dark:text-blue-500":"font-medium leading-tight text-gray-600 dark:text-gray-500"
  let two_h3 = (currentStep === 2)?"font-medium leading-tight text-blue-600 dark:text-blue-500":"font-medium leading-tight text-gray-600 dark:text-gray-500"
  let three_h3 = (currentStep === 3)?"font-medium leading-tight text-blue-600 dark:text-blue-500":"font-medium leading-tight text-gray-600 dark:text-gray-500"
  let four_h3 = (currentStep === 4)?"font-medium leading-tight text-blue-600 dark:text-blue-500":"font-medium leading-tight text-gray-600 dark:text-gray-500"
  let five_h3 = (currentStep === 5)?"font-medium leading-tight text-blue-600 dark:text-blue-500":"font-medium leading-tight text-gray-600 dark:text-gray-500"

  
  return (
    <div>
        <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
          <li className={one}>
            <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
            </span>
            <span>
                <a href='#' onClick={()=>setCurrentStep(1)}><h3 className={one_h3}>Case Info</h3></a>
                <p className="text-sm">Basic details</p>
            </span>
            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
            </svg>
          </li>
          <li className={two}>
            <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            2
            </span>
            <span>
                <a href='#' onClick={()=>setCurrentStep(2)}><h3 className={two_h3}>Inspections</h3></a>
                <p className="text-sm">Details of Visits</p>
            </span>
            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
            </svg>
          </li>
          <li className={three}>
            <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            3
            </span>
            <span>
                <a href='#' onClick={()=>setCurrentStep(3)}><h3 className={three_h3}>Location</h3></a>
                <p className="text-sm">Map / Coordinates</p>
            </span>
            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
            </svg>
          </li>
          <li className={four}>
            <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            4
            </span>
            <span>
                <a href='#' onClick={()=>setCurrentStep(4)}><h3 className={four_h3}>Casefile</h3></a>
                <p className="text-sm">FIR / Complaint / Evidence</p>
            </span>
            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
            </svg>
          </li>
          <li className={five}>
            <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            5
            </span>
            <span>
                <a href='#' onClick={()=>setCurrentStep(5)}><h3 className={five_h3}>Current Status</h3></a>
                <p className="text-sm">Decisions and Actions</p>
            </span>
          </li>
        </ol>
        {/* Render different components based on the current step */}
        {currentStep === 1 && <CaseEditForm next_step={nextStep} case={props.case} />}
        {currentStep === 2 && <InspectionForm prev_step={prevStep} next_step={nextStep} case={props.case} />}
        {currentStep === 3 && <LocationForm prev_step={prevStep} next_step={nextStep} case={props.case} />}
        {currentStep === 4 && <CasefileForm prev_step={prevStep} case={props.case} />}
        {currentStep === 5 && <CurrentStatusEditForm prev_step={prevStep} case={props.case} />}
    </div>
  )
}
