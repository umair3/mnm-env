export enum Mineral {
    BAUXITE="Bauxite",
    BENTONITE="Bentonite",
    BUILDING_STONE="Building Stone",
    COAL="Coal",
    CHINA_CLAY="China Clay",
    DECORATIVE_STONE="Decorative Stone",
    DOLOMITE="Dolomite",
    EBRY_STONE="Ebry Stone (excluding marble)",
    FIRECLAY="Fireclay",
    GHASSAR_BHASSAR="Ghassar/Bhassar",
    GRAVEL="Gravel",
    GYPSUM="Gypsum",
    IRON_ORE="Iron Ore",
    LIMESTONE="Limestone",
    LATRITE="Laterite",
    MARBLE="Marble",
    MILL_STONE="Mill Stone",
    OCHERS="Ochers",
    ORDINARY_SAND="Ordinary Sand",
    ORDINARY_STONE="Ordinary Stone",
    ROCK_SALT="Rock Salt",
    SAND_STONE="Sand Stone",
    SILICA_SAND="Silica Sand",
    SLATE_STONE="Slate Stone",
    ORD_STONE="Ord Stone",
    LAKE_SALT="Lake Salt",
}
interface MineralDropdownProps {
    value?: string,
    handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>):void
}
export default function MineralDropdown(props: MineralDropdownProps) {
    const mineral_options = Object.keys(Mineral);
    return (
        <div className="col-12">
            <div className="form-floating">
                <select defaultValue={props.value} id="mineral" name="mineral" required onChange={props.handleSelectChange} 
                className="m-2 p-2 border-2 border-gray-400 rounded-lg text-md">
                    <option value="">Choose a mineral</option>
                    {mineral_options.map((mineral, index) => (
                    <option key={index} value={mineral}>
                        {mineral}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
