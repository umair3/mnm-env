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
                <select defaultValue={props.value} className="form-control" id="district" name="district" required onChange={props.handleSelectChange}>
                    <option value="">All districts</option>
                    {district_options.map((district, index) => (
                    <option key={index} value={district}>
                        {district}
                    </option>
                    ))}
                </select>
                <label htmlFor="district">District</label>
            </div>
        </div>
    )
}
