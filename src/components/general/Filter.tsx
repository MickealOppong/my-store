import styled from "styled-components";
import FilterCheckbox from "./FilterCheckbox";
import FilterInput from "./FilterInput";
import SubCategory from "./SubCategory";

const Filter = () => {
  return <Wrapper>
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
      <div>
        <FilterCheckbox title="Colour" text="New" data={['Red', 'green', 'Blue']} />
      </div>
      <div>
        <FilterCheckbox title="Size" text="New" data={['Extra small', 'Small', 'Medium', 'Large', 'Extra large']} />
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`



`
export default Filter;