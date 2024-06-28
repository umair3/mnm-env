export default function RecoveredAmountField(props: any) {
    return (
        <div className="col-md-6">
            <div className="form-floating">
                <input type="number" className="form-control" id="recovered_amount" name="recovered_amount" defaultValue={props.value} onChange={props.onChange} />
                <label htmlFor="recovered_amount">Recovered Amount</label>
            </div>
        </div>
    )
}


