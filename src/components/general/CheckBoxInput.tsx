import styled from "styled-components"

const CheckBoxInput = ({ handleChange }: { handleChange: React.ChangeEvent<HTMLInputElement> }) => {
  return <Wrapper className="checkbox-control">
    <input type="checkbox" name="delete" onChange={() => handleChange} />
  </Wrapper>
}
const Wrapper = styled.div`
  .checkbox-control{

  }
`
export default CheckBoxInput