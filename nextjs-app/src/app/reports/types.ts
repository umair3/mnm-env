export type CaseType =  {
    id?: number | undefined
    date: Date
    field_office: string
    district: string
    tehsil: string
    location: string
    police_station: string
    // coordinates: [CoordinatePair]
    mineral: string
    assessment_amount?: number
    recovered_amount?: number
    date_of_showcause?: Date
    status: string | null
    illegal_activity_stopped?: boolean
    machinery_seized?: boolean
    machinery_seized_remarks?: string
    // inspection: Inspection[]
    // fir: FIR[]
    // accused: Accused[]
    remarks?: string
    actions_taken?: string
    decision?: string
    personal_hearing_proceedings?: string
    // complaint_to_office: File
    // attachment: File[]
    // arrears: number
}
