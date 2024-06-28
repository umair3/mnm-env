import { useState } from "react";

export default function ShowCauseDateField(props: any) {
    const [error, setError] = useState('');
    return (
        <div className="col-md-6">
            <div className="form-floating">
                <input type="date" className="form-control" id="date_of_showcause" name="date_of_showcause" defaultValue={props.value?.toISOString().substring(0, 10)} onChange={props.onChange} />
                <label htmlFor="date_of_showcause">Date of Show Cause Notice</label>
            </div>
        </div>
    )
}


