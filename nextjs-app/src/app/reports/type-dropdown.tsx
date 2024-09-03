export enum Type {
    FRESH="Fresh",
    RENEWAL="Renewal"
}
interface TypeDropdownProps {
    value?: string,
    handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>):void
}
export default function TypeDropdown(props: TypeDropdownProps) {
    const options = Object.keys(Type);
    return (
        <div className="col-12">
            <div className="form-floating">
                <select defaultValue={props.value} id="type" name="type" required onChange={props.handleSelectChange} 
                className="m-2 p-2 border-2 border-gray-400 rounded-lg text-md">
                    <option value="">Choose a Type</option>
                    {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
