export default function MachinerySeizedRemarksField(props: any) {
    return (
        <div className="col-md-12">
            <div className="form-floating">
                <textarea className="form-control" id="machinery_seized_remarks" name="machinery_seized_remarks" style={{"height": "150px"}} defaultValue={props.value} onChange={props.onChange}></textarea>
                <label htmlFor="machinery_seized_remarks">Machinery Seized Remarks</label>
            </div>
        </div>
    )
}
