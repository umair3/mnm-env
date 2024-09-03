export enum Category {
    IEE="IEE",
    EIA="EIA"
}
interface CategoryDropdownProps {
    value?: string,
    handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>):void
}
export default function CategoryDropdown(props: CategoryDropdownProps) {
    const options = Object.keys(Category);
    return (
        <div className="col-12">
            <div className="form-floating">
                <select defaultValue={props.value} id="category" name="category" required onChange={props.handleSelectChange} 
                className="m-2 p-2 border-2 border-gray-400 rounded-lg text-md">
                    <option value="">Choose a category</option>
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
