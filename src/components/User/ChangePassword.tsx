import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"
import styled from "styled-components"
import FormInput from "../general/FormInput"

const ChangePassword = () => {

  return <Wrapper>
    <div className="link-title">
      <Link className="link-container" to={'/my-account/account-setting'}><FiArrowLeft /></Link>
      <h2>Change password</h2>
    </div>
    <form className="form-control">
      <div className="form-input">
        <FormInput label={'Old password'} placeholder="Your old password" type="password" name="oldPassword" width="input-width" />
        <FormInput label={'New password'} placeholder="Your new password" type="password" name="newPassword" width="input-width" />
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
row-gap: 2rem;
margin-bottom:10rem;
width: 100vw;


.link-title{
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


.form-control{
  display: flex;
  flex-direction: column;

}
  

  .form-input{
    display: flex;
    flex-direction:column;
    row-gap:2rem;
    background-color:var(---white);
    padding: 1rem;
  }


  .btns{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    row-gap:1rem;
    margin:3rem 1rem 0 1rem;
  }

  .submit-btn{
    width: 100%;
    height: 3rem;
    background-color:var(---secondary);
    border-color:transparent;
    color: var(---white);
     box-shadow:0 5px 5px rgba(0,0,0,0.2);
  }


.cancel-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
   border-color:transparent;
  background-color:transparent;
  border:#B19CD8  solid 0.5px;
  border-radius:5px;
  font-weight:700;
  box-shadow:0 5px 5px rgba(0,0,0,0.2);
  transition:all .2s ease-in-out;
}


.cancel-btn span{
    color: var(---textColor-3);
}
  .cancel-btn:hover{
      background-color: #B19CD8;
      color: var(---white);
  }

    .cancel-btn:hover span{
      color: var(---white);
  }

  .input-width{
  width: 90vw;
  }


  @media screen and (min-width: 768px) {
    width: 70vw;

      .input-width{
        max-width: 65vw;
        margin:0 auto;
        width: 65vw;
  }
    .btns{

      margin-top:3rem;
  }
  }

    .submit-btn{
    margin-right:0;
  }

`

export default ChangePassword