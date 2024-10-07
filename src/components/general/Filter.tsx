import FilterCheckbox from "./FilterCheckbox";
import FilterInput from "./FilterInput";
import SubCategory from "./SubCategory";

const Filter = () => {
  return <div>
    <SubCategory />
    <div>
      <h2>Filter</h2>
      <div>
        <FilterInput title="Price" unit="zl" />
      </div>
      <div>
        <FilterCheckbox title="Shipping" text="free shipping" />
      </div>
      <div>
        <FilterCheckbox title="State" text="New" data={['new', 'used', 'slightly-new']} />
      </div>
    </div>
  </div>
}
export default Filter;