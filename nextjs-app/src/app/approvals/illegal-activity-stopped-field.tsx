export default function IllegalActivityStoppedField(props: any) {
    return (
        <div className="col-md-6">
            <div className="form-floating">
                <select defaultValue={props.value} className="form-control" id="illegal_activity_stopped" name="illegal_activity_stopped" onChange={props.onChange} >
                    <option value="">Choose an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <label htmlFor="illegal_activity_stopped">Illegal Activity Stopped (Yes|No)</label>
            </div>
        </div>
    )
}


