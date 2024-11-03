import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ProductAttributeDTOS } from "../../types/general";


const ProductAttributeContainer = ({ attribute, defAttributeValue, data }: { attribute: string, defAttributeValue: number, data: ProductAttributeDTOS[] }) => {
  const [currIndex, setCurrIndex] = useState<number>(defAttributeValue);
  const [value, setValue] = useState<number>();
  const navigate = useNavigate();



  const handleClick = (i: number, selected: number) => {
    setCurrIndex(() => i)
    setValue(selected)
    navigate(`/product/${selected}`)
  }
  return <Wrapper>
    <select id={attribute} hidden >
      <option value={value}></option>
    </select>
    <div className="attribute-container">
      <div className="attribute-name">
        <span>{attribute}</span>
      </div>
      <div className="items">
        {
          data.map((attributeValue, index) => {
            return <div className={`item ${currIndex === index ? 'active' : ''} 
        `}
              style={{ backgroundColor: attribute.toLocaleLowerCase() === 'colour' ? attributeValue.value : '' }} key={index}
              onClick={() => handleClick(index, attributeValue.productId)}>
              <span style={{ display: attribute.toLocaleLowerCase() === 'colour' ? 'none' : 'flex' }}>{attributeValue.value}</span>
            </div>
          })
        }
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;



.attribute-container{
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 100%;
}

.attribute-name{
  display: flex;
  color:var(---textColor);
}

.items{
  display: flex;
  align-items: center;
  column-gap:5px;
}

.item{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 2rem;
  border:var(---border) solid 1px;
  cursor: pointer;
}

.active{
  border: var(---primary) solid 2px;
}

@media screen and (min-width: 768px) {
  display: flex;
  width: 100%;
  overflow-x:hidden;

  .items{
  display: grid;
  grid-template-columns:repeat(5,4rem);

  column-gap:10px;

}
}
`
export default ProductAttributeContainer