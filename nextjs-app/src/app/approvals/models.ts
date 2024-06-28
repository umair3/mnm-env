import { List } from "postcss/lib/list";
import { District } from "../district/props";
import { FieldOffice } from "../field-office/props";
import { CaseInterface } from "./interfaces";
import { CaseType } from "./types";
import { PrismaClient } from "@prisma/client";

class CaseModel extends PrismaClient implements CaseInterface
{
    id: number | undefined;
    date: Date;
    field_office: string;
    district: string;
    tehsil: string;
    location: string;
    police_station: string;
    mineral: string;
    assessment_amount?: number | undefined;
    recovered_amount?: number | undefined;
    date_of_showcause?: Date | undefined;
    status: string | null;
    illegal_activity_stopped?: boolean | undefined;
    machinery_seized?: boolean | undefined;
    machinery_seized_remarks?: string | undefined;
    remarks?: string | undefined;
    actions_taken?: string | undefined;
    decision?: string | undefined;
    personal_hearing_proceedings?: string | undefined;
    
    constructor(mycase: CaseType) {
        super()
        this.id = mycase.id
        this.date = mycase.date
        this.field_office = mycase.field_office
        this.district = mycase.district
        this.tehsil = mycase.tehsil
        this.location = mycase.location
        this.police_station = mycase.police_station
        this.mineral = mycase.mineral
        this.assessment_amount = mycase.assessment_amount
        this.recovered_amount = mycase.recovered_amount
        this.date_of_showcause = mycase.date_of_showcause
        this.status = mycase.status
        this.illegal_activity_stopped = mycase.illegal_activity_stopped
        this.machinery_seized = mycase.machinery_seized
        this.machinery_seized_remarks = mycase.machinery_seized_remarks
        this.remarks = mycase.remarks
        this.actions_taken = mycase.actions_taken
        this.decision = mycase.decision
        this.personal_hearing_proceedings = mycase.personal_hearing_proceedings
    }
    async create(): Promise<CaseType> 
    {
        const my_case = await this.case.findMany()
        my_case as CaseType 
        // throw new Error("Method not implemented.");
    }
    read(): CaseType {
        async () => {
            const cases = await this.case.findMany()
        }
        throw new Error("Method not implemented.");
    }
    update(): CaseType {
        throw new Error("Method not implemented.");
    }
    delete(): CaseType {
        throw new Error("Method not implemented.");
    }
    async list(): [CaseType] {
        const cases:[CaseType] = undefined
        return await this.case.findMany()
    }
}