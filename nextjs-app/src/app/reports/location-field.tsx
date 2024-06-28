interface LocationFieldProps{
    value?: string,
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
}


export default function LocationField(props: LocationFieldProps) {
    return (
        <div className="col-12">
            <div className="form-floating">
                <input type="text" className="form-control" id="location" name="location" required defaultValue={props.value} onChange={props.onChange}/>
                <label htmlFor="location">Location of Illegal Mining</label>
            </div>
        </div>
    )
}


