import { FieldOffice } from "../field-office/props";
import { District } from "../district/props";
import { CaseProps } from "./props";
import { List } from "postcss/lib/list";

class CaseService implements CaseProps
{
    date?: Date | undefined;
    field_office: FieldOffice | undefined;
    district: District | null;
    tehsil: string;
    location: string;
    police_station?: string | undefined;
    mineral: string;
    assessment_amount: number | null;
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
    
    private getPropsFromDb()
    {
        
    }

}