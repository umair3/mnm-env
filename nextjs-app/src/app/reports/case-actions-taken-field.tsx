export default function CaseActionsTakenField(props: any) {
    return (
        <div className="col-12">
            <div className="form-floating">
                <textarea className="form-control" id="actions_taken" name="actions_taken" style={{"height": "150px"}} defaultValue={props.value} onChange={props.onChange}></textarea>
                <label htmlFor="actions_taken">Actions Taken Previously</label>
            </div>
        </div>
    )
}

