export default function PoliceStationField(props: any) {
    return (
        <div className="col-12">
            <div className="form-floating">
                <input type="text" className="form-control" id="police_station" name="police_station" required defaultValue={props.value} onChange={props.onChange} />
                <label htmlFor="police_station">Police Station</label>
            </div>
        </div>
    )
}


