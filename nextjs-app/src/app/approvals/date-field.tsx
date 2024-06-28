import { useState } from "react";

interface DateFieldProps{
    value?: Date,
    onChange(e: React.ChangeEvent<HTMLDataElement>): void
}

export default function DateField(props: DateFieldProps) {
    const [error, setError] = useState('');
    return (
        <div className="col-md-6">
            <div className="form-floating">
                <input type="date" className="form-control" id="date" name="date" required defaultValue={props.value?.toISOString().substring(0, 10)} onChange={props.onChange}/>
                <label htmlFor="date">Date</label>
            </div>
        </div>
    )
}
