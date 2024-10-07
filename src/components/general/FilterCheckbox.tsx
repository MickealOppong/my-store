import styled from "styled-components"

const FilterCheckbox = ({ title, text, data }: { title: string, text: string, data?: string[] }) => {

  if (data) {
    return <Wrapper>
      <div className="title">
        <h2>{title}</h2>
      </div>
      {
        data.map((item, index) => {
          return <div className="input-container" key={index}>
            <input type="checkbox" placeholder='from' className="input" />
            <span>{item}</span>
          </div>
        })
      }
    </Wrapper>
  }
  return <Wrapper>
    <div className="title">
      <h2>{title}</h2>
    </div>
    <div className="input-container">
      <input type="checkbox" placeholder='from' className="input" />
      <span>{text}</span>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`

.title h2{
  font-size:0.9rem;
}

.input-container{
  display: flex;
  align-items: center;

}


.input{
  width: 2rem;
  height: 1.5rem;
  border: none;
  outline:none;
  text-indent:5px;
  margin-left:-5px;
}

input[type="checkbox"]{
  accent-color: var(---secondary);
}

`
export default FilterCheckbox