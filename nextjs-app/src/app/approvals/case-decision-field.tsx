export default function CaseDecisionField(props: any) {
    return (
        <div className="col-12">
            <div className="form-floating">
                <textarea className="form-control" id="decision" name="decision" style={{"height": "150px"}} defaultValue={props.value} onChange={props.onChange}></textarea>
                <label htmlFor="decision">Decision of LA/DG (AA)/ Secretary (RA)</label>
            </div>
        </div>
    )
}

