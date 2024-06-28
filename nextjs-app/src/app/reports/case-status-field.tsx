export default function CaseStatusField(props: any) {
    return (
        <div className="col-md-6">
            <div className="form-floating">
                <select defaultValue={props.value} className="form-control" id="status" name="status" onChange={props.onChange}>
                    <option value="">Choose an option</option>
                    <option value="FIELD_OFFICE">Field Office</option>
                    <option value="LA_DIVISION">LA Division</option>
                    <option value="DGMM">DGMM</option>
                    <option value="SERETARY_MM">Secretary MM</option>
                    <option value="AUDIT_PARA">Audit Para</option>
                    <option value="COURTS_OF_LAW">Courts of Law</option>
                    <option value="CLOSED">Closed</option>
                </select>
                <label htmlFor="status">Status of Case</label>
            </div>
        </div>
    )
}


