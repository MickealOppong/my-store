import { FiArrowLeft } from "react-icons/fi"
import { Form, Link } from "react-router-dom"
import styled from "styled-components"
import FormInput from "../general/FormInput"

const ChangeAddress = () => {
  return <Wrapper>

    <div className="address-title">
      <Link className="link-container" to={'/my-account/account-setting'}><FiArrowLeft /></Link>
      <h2>Change delivery address</h2>
    </div>
    <Form className="form-control">
      <div className="form-input">
        <div className="name-div">
          <FormInput type="text" label="First Name" name="firstName" placeholder="First Name" width="name-input" handleChange={() => ''} />
          <FormInput type="text" label="Last name" name="lastName" placeholder="Last name" width="name-input" handleChange={() => ''} />
        </div>
        <FormInput type="text" label="Company name (optional)" name="companyName" placeholder="" width="company-input" handleChange={() => ''} />
        <FormInput type="text" label="Street" name="street" placeholder="" width="street-input" handleChange={() => ''} />
        <div className="apart-div">
          <FormInput type="text" label="House number" name="houseNumber" placeholder="" width="apart-input" handleChange={() => ''} />
          <FormInput type="text" label="Apartment number" name="apartmentNumber" placeholder="" width="apart-input" handleChange={() => ''} />
        </div>
        <div className="code-div">
          <FormInput type="text" label="Zip code" name="zipCode" placeholder="" width="code-input" handleChange={() => ''} />
          <FormInput type="text" label="City" name="city" placeholder="" width="code-input" handleChange={() => ''} />
        </div>
      </div>
      <div className="btn-container">
        <button className="save-btn btn"><span>save address</span></button>
        <button className="cancel-btn btn" ><span>delete</span></button>
      </div>
    </Form>

  </Wrapper>
}
const Wrapper = styled.div`
display: flex;
flex-direction:column;
width: 99vw;
margin-bottom:2rem;
row-gap: var(---c-gap-2);

.address-title{
display: flex;
align-items: center;
column-gap:10px;
margin: 1rem  auto;
width: 100%;;

}

.address-title h2{
  font-weight:500;
}

.link-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(---white);
  border-radius:50%;
  box-shadow:var(---shadow-1);
  font-size:var(---fontSize-2);
  color: black;
  cursor: pointer;
}

.form-control{
  display: flex;
  flex-direction: column;
  row-gap: var(---c-gap-2);
}

.form-input{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: var(---white);
  padding:1rem;
}

.name-div,
.street-div,
.apart-div,
.code-div{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
 width: 100%;
}

.name-input,
.company-input,
.street-input,
.apart-input,
.code-input{
  width: 100%;
}

.btn-container{
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 10px;
  
}

.save-btn,
.cancel-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-color:transparent;
  width: 100%;
  height: 3rem;
  border-radius:5px;
  box-shadow:var(---shadow-1);
}

.cancel-btn{
  border: var(---secondary) solid   1px;
  color: var(---textColor);
  transition:all .1s ease-in-out
}

.save-btn{
  background-color: var(---primary);
  color: var(---white);
}


.cancel-btn:hover{
  background-color: var(---secondary);
  color: var(---white);
    transition:all .1s ease-in-out;
}





@media screen and (min-width: 768px) {
display: flex;
max-width: 70vw;
width: 65vw;

  .form-input{
  padding:2rem;
}

.name-div,
.apart-div,
.code-div{
  flex-direction:row;
  width:100%;
  column-gap:10px;
}


.name-input,
.company-input,
.street-input,
.apart-input,
.code-input{
  width:100%;
}

.company-input,
.street-input{
width: 100%;
}

.btn-container{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  column-gap:10px;
}

}

@media screen and (min-width: 1092px) {
  width: 70vw;
}
`
export default ChangeAddress