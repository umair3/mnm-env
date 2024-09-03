"use client"

import { ChangeEvent, ChangeEventHandler } from "react";
import { District } from "../district/props";
import { FieldOffice } from "../field-office/props";
import { Case } from "@prisma/client";

class HumanResource {
    SALUTATION: string;
    NAME: string;
    DESIGNATION: string;
    OFFICE: string;
    OFFICE_ADDRESS: string;
    OFFICE_NUMBER: string;
    CELL_NUMBER: string;
  
    constructor(SALUTATION: string, NAME: string, DESIGNATION: string, OFFICE: string, OFFICE_ADDRESS: string, OFFICE_NUMBER: string, CELL_NUMBER: string) {
      this.SALUTATION = SALUTATION;
      this.NAME = NAME;
      this.DESIGNATION = DESIGNATION;
      this.OFFICE = OFFICE;
      this.OFFICE_ADDRESS = OFFICE_ADDRESS;
      this.OFFICE_NUMBER = OFFICE_NUMBER;
      this.CELL_NUMBER = CELL_NUMBER;
    }
}

class Office {
    name: string
    address: string
    district: District
    phone?: string
    human_resource?: HumanResource[]

    constructor(name: string, address: string, district: District, phone?: string) {
      this.name = name
      this.address = address
      this.district = district
      this.phone = phone;
    }

    private add_hr(hr:HumanResource) {
        this.human_resource?.push(hr)
    }
}

const field_offices_list: any = {
    "ATTOCK": new Office("Assistant Director", "", District.ATTOCK),
    "BAHAWALNAGAR": new Office("Assistant Director", "", District.BAHAWALPUR),
    "BAHAWALPUR": new Office("Assistant Director", "", District.BAHAWALPUR),
    "CHAKWAL": new Office("Assistant Director", "", District.CHAKWAL),
    "CHINIOT": new Office("Assistant Director", "", District.CHINIOT),
    "DGKHAN": new Office("Assistant Director", "", District.DGKHAN),
    "GUJRANWALA": new Office("Assistant Director", "", District.GUJRANWALA),
    "JHELUM": new Office("Assistant Director", "", District.JHELUM),
    "KHUSHAB": new Office("Assistant Director", "", District.KHUSHAB),
    "LAHORE": new Office("Assistant Director", "", District.LAHORE),
    "MIANWALI": new Office("Assistant Director", "", District.MIANWALI),
    "MULTAN": new Office("Assistant Director", "", District.MULTAN),
    "RAWALPINDI": new Office("Assistant Director", "", District.RAWALPINDI),
    "SAHIWAL": new Office("Assistant Director", "", District.SAHIWAL),
    "SARGODHA": new Office("Assistant Director", "", District.SARGODHA),
    "SIALKOT": new Office("Assistant Director", "", District.SIALKOT),
}



const field_office_dict: any = {
    "ATTOCK" :[
        new HumanResource("Mr.", "Furqan Ahmed", "Assistant Director", "Attock" ,"Near Chungi No.6, Fateh Jang Road.", "0543-660019", "0332-4571554"),
        {
            "SALUTATION": "Mr.",
            "NAME": "Fahad Akbar",
            "DESIGNATION": "Assistant Director",
            "OFFICE": "Attock",
            "OFFICE_ADDRESS": "Near Chungi No.6, Fateh Jang Road.",
            "OFFICE_NUMBER": "",
            "CELL_NUMBER": "0310-4532349",
        },
    ],
    "CHAKWAL" :[
        {
            "SALUTATION": "Mr.",
            "NAME": "Umar Farooq",
            "DESIGNATION": "Deputy Director",
            "OFFICE": "Chakwal",
            "OFFICE_ADDRESS": "District Complex, Gaziabad, Chakwal.",
            "OFFICE_NUMBER": "0543-660019",
            "CELL_NUMBER": "0332-4571554",
        },
        {
            "SALUTATION": "Mr.",
            "NAME": "Fahad Akbar",
            "DESIGNATION": "Assistant Director",
            "OFFICE": "Chakwal",
            "OFFICE_ADDRESS": "District Complex, Gaziabad, Chakwal.",
            "OFFICE_NUMBER": "0543-660019",
            "CELL_NUMBER": "0332-4571554",
        },
    ],
    "DGKHAN" :[
        {
            "SALUTATION": "Mr.",
            "NAME": "Ali Raza Gohar",
            "DESIGNATION": "Deputy Director",
            "OFFICE": "D.G.Khan",
            "OFFICE_ADDRESS": "Divisional Complex, Plot#9 Railway Road, Dera Ghazi Khan.",
            "OFFICE_NUMBER": "064-9260262",
            "CELL_NUMBER": "0333-4173941",
        },
        {
            "SALUTATION": "Mr.",
            "NAME": "Mohsin Maqsood",
            "DESIGNATION": "Assistant Director",
            "OFFICE": "D.G.Khan",
            "OFFICE_ADDRESS": "Divisional Complex, Plot#9 Railway Road, Dera Ghazi Khan.",
            "OFFICE_NUMBER": "",
            "CELL_NUMBER": "0321-7321973",
        },
    ],
    "GUJRANWALA" :[
        {
            "SALUTATION": "Mr.",
            "NAME": "Numan Sarfaraz",
            "DESIGNATION": "Deputy Director",
            "OFFICE": "Gujranwala",
            "OFFICE_ADDRESS": "7-B Model Town, near General Bus Stand, Gujranwala.",
            "OFFICE_NUMBER": "055-9330582",
            "CELL_NUMBER": "0301-6251348",
        }
    ],
    "JHELUM" :[
        {
            "SALUTATION": "Mr.",
            "NAME": "Usman Manzoor",
            "DESIGNATION": "Assistant Director",
            "OFFICE": "Jhelum",
            "OFFICE_ADDRESS": "Sahil Colony HA-1, near Moon 1st Marriage Hall Polra Ghaib Jhelum.",
            "OFFICE_NUMBER": "0544-276489",
            "CELL_NUMBER": "0321-6832669",
        }
    ]
}



export interface FieldOfficeProps {
    value?: string,
    handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>): void
}
export default function FieldOfficeDropdown(props: FieldOfficeProps) {
    const field_office_options = Object.values(FieldOffice);
    return (
    <div className="col-md-6">
        <div className="form-floating">
            <select defaultValue={props.value} className="form-control" id="field_office" name="field_office" required onChange={props.handleSelectChange}>
                <option value="">All field offices</option>
                {field_office_options.map((office, index) => (
                    <option key={index} value={office}>{office}</option>
                    // selected={office === props.value ? true : false}
                    // {JSON.stringify(field_office_dict[office])}
                ))}
            </select>
            <label htmlFor="field_office">Field Office</label>
        </div>
    </div>
    )
}
