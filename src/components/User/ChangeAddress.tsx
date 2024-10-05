import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"
import styled from "styled-components"
import AddressFormInput from "../general/AddressFormInput"

const ChangeAddress = () => {
  return <Wrapper>

    <div className="address-title">
      <Link className="link-container" to={'/my-account/account-setting'}><FiArrowLeft /></Link>
      <h2>Change delivery address</h2>
    </div>
    <div className="form-container">
      <AddressFormInput />
    </div>

  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
flex-direction: column;



.address-title{
display: flex;
align-items: center;
column-gap:10px;
margin: 1rem  auto;
width: 100%;;

}


.link-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(---white);
  border-radius:50%;
  box-shadow:0 5px 5px  rgba(0,0,0,0.2);
    font-size:var(---fontSize-2);
  color: black;
  cursor: pointer;
}

.form-container{
  background-color: var(---white);
  padding-top:1rem;
  padding-bottom:1rem;
}

@media screen and (min-width: 768px){
    width: 100%;
.form-container{
 padding:2rem;
}
}

@media screen and (min-width:1092px){
    width: 100%;

}
`
export default ChangeAddress