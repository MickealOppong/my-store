import styled from "styled-components";
import FilterCheckbox from "./FilterCheckbox";
import FilterInput from "./FilterInput";
import FilterRadio from "./FilterRadio";
import SubCategory from "./SubCategory";

const Filter = () => {

  return <Wrapper  >
    <SubCategory />
    <div className="filters">
      <h2>Filter</h2>
      <div>
        <FilterInput title="Price" unit="zl" />
      </div>
      <div>
        <FilterCheckbox title="Shipping" data={["Free shipping"]} />
      </div>
      <div>
        <FilterRadio title="Delivery time" data={['Today', 'Tomorrow', 'After-tomorrow']} />
      </div>
      <div>
        <FilterCheckbox title="State" data={['new', 'used', 'slightly-new']} />
      </div>
      <div>
        <FilterCheckbox title="Colour" data={['Red', 'Green', 'Blue']} />
      </div>
      <div>
        <FilterCheckbox title="Size" data={['Extra small', 'Small', 'Medium', 'Large', 'Extra large']} />
      </div>
      <div>
        <FilterInput title="Weight" unit="cm" />
      </div>

    </div>
  </Wrapper>
}
const Wrapper = styled.div`
    
.filters{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
`
export default Filter;