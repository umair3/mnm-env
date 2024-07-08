export default function DateRangeField(props: any) {
    return (
        <div className="flex">
            <div className="form-floating">
                <label htmlFor="date">Date start</label>
                <input type="date" className="m-2 p-2 border-2 border-gray-400 rounded-lg text-md" id="date" name="date" required defaultValue={props.value?.toISOString().substring(0, 10)} onChange={props.onChange}/>
            </div>
            <div className="form-floating">
                <label htmlFor="date">Date end</label>
                <input type="date" className="m-2 p-2 border-2 border-gray-400 rounded-lg text-md" id="date" name="date" required defaultValue={props.value?.toISOString().substring(0, 10)} onChange={props.onChange}/>
            </div>
        </div>
    )
}
