import { Link } from "react-router-dom"
import styled from "styled-components"
import FormInput from "../general/FormInput"

const ChangePassword = () => {

  return <Wrapper>
    <div className="form-title">
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

.form-title{
  display: flex;
  padding: 1rem;
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
    align-items: center;
    justify-content: space-between;
    margin:3rem 1rem 0 1rem;
  }

  .submit-btn{
    width: 8rem;
    height: 3rem;
    background-color:var(---secondary);
    border-color:transparent;
    color: var(---white);
  }


.cancel-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 1.5rem;
  background-color: transparent;
  border-color:transparent;
  border:var(---secondary)   solid   1px;
  padding: 10px;
}

.cancel-btn span{
    color: var(---textColor-1);
}
  .cancel-btn:hover{
      background-color: #e1f1fd;
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