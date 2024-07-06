import { District } from "../district/props";


interface DistrictDropdownProps {
    value?: string,
    handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>):void
}
export default function DistrictDropdown(props: DistrictDropdownProps) {
    const district_options = Object.values(District);
    return (
        <div className="col-md-6">
            <div className="form-floating">
                <select defaultValue={props.value} id="district" name="district" required onChange={props.handleSelectChange}
                className="m-2 p-2 border-2 border-gray-400 rounded-lg text-md">
                    <option value="">Choose a district</option>
                    {district_options.map((district, index) => (
                    <option key={index} value={district}>
                        {district}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
