export default function CaseRemarksField(props: any) {
    return (
        <div className="col-12">
            <div className="form-floating">
                <textarea className="form-control" id="remarks" name="remarks" style={{"height": "150px"}} defaultValue={props.value} onChange={props.onChange}></textarea>
                <label htmlFor="remarks">Remarks</label>
            </div>
        </div>
    )
}
