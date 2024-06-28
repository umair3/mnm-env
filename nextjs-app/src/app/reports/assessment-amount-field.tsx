export default function AssessmentAmountField(props: any) {
    return (
        <div className="col-md-6">
            <div className="form-floating">
                <input type="number" className="form-control" id="assessment_amount" name="assessment_amount" defaultValue={props.value} onChange={props.onChange} />
                <label htmlFor="assessment_amount">Assessment Amount</label>
            </div>
        </div>
    )
}


