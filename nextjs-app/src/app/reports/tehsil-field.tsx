import { District } from "../district/props";

export default function TehsilField(props: any) {
    return (
        <div className="col-md-6">
            <div className="form-floating">
                <input type="text" className="form-control" id="tehsil" name="tehsil" required defaultValue={props.value} onChange={props.onChange} />
                <label htmlFor="tehsil">Tehsil</label>
            </div>
        </div>
    )
}
