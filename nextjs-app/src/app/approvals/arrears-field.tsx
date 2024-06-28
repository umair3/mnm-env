export default function ArrearsField(props: any) {
    return (
        <div className="col-md-6">
            <div className="form-floating">
                <input type="number" className="form-control" id="arrears" name="arrears" defaultValue={props.value} onChange={props.onChange} />
                <label htmlFor="arrears">Arrears</label>
            </div>
        </div>
    )
}


