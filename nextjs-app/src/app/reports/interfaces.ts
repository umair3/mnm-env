import { List } from "postcss/lib/list"
import { District } from "../district/props"
import { FieldOffice } from "../field-office/props"
import { CaseType } from "./types"

export interface CaseInterface extends CaseType 
{
    create():Promise<CaseType>
    read():Promise<CaseType>
    update():Promise<CaseType>
    delete():Promise<CaseType>
    list():Promise<CaseType[]>
}