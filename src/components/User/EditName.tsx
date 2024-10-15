import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"
import styled from "styled-components"
import FormInput from "../general/FormInput"

const EditName = () => {

  return <Wrapper>
    <div className="form-title">
      <Link className="link-container" to={'/my-account/account-setting'}><FiArrowLeft /></Link>
      <h2>Change First and Last name</h2>
    </div>
    <form className="form-control">
      <div className="form-input">
        <FormInput label={'First name'} placeholder="Your first name" type="text" name="firstName" width="input-width" />
        <FormInput label={'Last name'} placeholder="Your last name" type="text" name="lastName" width="input-width" />
      </div>
      <div className="btns">
        <Link to={'/my-account/account-setting'} role="button" className="cancel-btn" type="submit"><span>Cancel</span></Link>
        <button className="submit-btn" type="submit">Submit</button>
      </div>
    </form>

  </Wrapper>
}
const Wrapper = styled.div`
display: flex;
flex-direction:column;
width: 99vw;
margin-bottom:2rem;
row-gap: var(---c-gap-2);

.form-title{
display: flex;
align-items: center;
column-gap:10px;
margin: 1rem  auto;
width: 100%;;

}

.form-title h2{
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


.input-width{
  width: 100%;
}

.btns{
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 15px;
  
}

.submit-btn,
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

.submit-btn{
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



.btns{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap:10px;
}

}

@media screen and (min-width: 1092px) {
  width: 70vw;
}
`

export default EditName