export default function MachinerySeizedField(props: any) {
    return (
        <div className="col-md-6">
            <div className="form-floating">
                <select defaultValue={props.value} className="form-control" id="machinery_seized" name="machinery_seized" onChange={props.onChange} >
                    <option value="">Choose an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <label htmlFor="machinery_seized">Machinery Siezed (Yes|No)</label>
            </div>
        </div>
    )
}


