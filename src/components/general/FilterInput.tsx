import styled from "styled-components"

const FilterInput = ({ title, unit }: { title: string, unit: string }) => {
  return <Wrapper>
    <div className="title">
      <h2>{title}</h2>
    </div>
    <div className="input-parent">
      <div className="input-container">
        <input type="text" placeholder='from' className="input" />
        <span>{unit}</span>
      </div>
      <span className="hyphen">&#8208;</span>
      <div className="input-container">
        <input type="text" placeholder="to" className="input" />
        <span>{unit}</span>
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`

.title h2{
  font-size:0.9rem;
}
  .input-parent{
    display: flex;
    align-items: center;
    column-gap:10px;
  }

.input-container{
  display: flex;
  align-items: center;
  width: 8vw;
  height:2rem;
  border: var(---textColor-3) groove 1px;
  background-color: var(---white);
  border-radius:5px;
  padding: 2px;
  color: var(---textColor-1);
}

.input{
  width: 5vw;
  height: 1.5rem;
  border: none;
  outline:none;
  text-indent:5px;
}

@media screen and (min-width: 1092px) {


}

`
export default FilterInput