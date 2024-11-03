
import { ChangeEvent, FormEvent } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { hideVerificationForm, showTelephoneContainer } from "../../features/userToggleSlice";
import { useAppSelector } from "../../hooks/hooks";
import useFormDataVerification from "../../hooks/UseFormDataVerification";
import { addTelephone, customFetch } from "../../util/util";
import FormInput from "../general/FormInput";

const ConfirmTelephone = () => {
  //input state management
  const { value, handleChange } = useFormDataVerification('')
  const dispatch = useDispatch();
  const { telephoneNumber: telephone } = useAppSelector((state) => state.userMenu);
  const id = useAppSelector((state) => state.userSlice.id)

  async function verify(telephone: string, code: string): Promise<boolean | undefined> {

    try {
      const response = await customFetch.post(`/sms/auth-code`, { code, telephone }, {
        headers: {
          //Authorization: `Bearer ${getFromLocalStorage('uat')}`,
          "Content-Type": 'multipart/form-data'
        }
      })
      console.log(response);

      if (response.status === 200) return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  const resendSMS = () => {
    addTelephone(telephone, id)
  }
  //handle submit event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData);
    const { code } = data;
    if (!value) {
      return
    }
    const response = await verify(telephone as string, code as string)
    if (response) {
      dispatch(hideVerificationForm())
    }
  }

  return <Wrapper>
    <div className="telephone-title">
      <h2>Confirm telephone number</h2>
      <button className="close-form" onClick={() => dispatch(hideVerificationForm())}><FaTimes /></button>
    </div>
    <form className={`form-control `} method="post" onSubmit={handleSubmit}>
      <div>
        <p>  We sent an SMS with a verification code to the indicated number. Enter it below:</p>
        <FormInput label={''} placeholder="Verification code" type="text" name="code" width="verification-width"
          hasError={false} handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} value={value} />
      </div>
      <div className="verification-btn-container">
        <button className="confirm-btn" type="submit">Verify number</button>
        <button className="resend-btn " type="button" onClick={() => resendSMS()}>resend</button>
        <button className="change-number-btn" type="button" onClick={() => {
          dispatch(hideVerificationForm())
          dispatch(showTelephoneContainer())
        }}>Change number</button>
      </div>
    </form>

  </Wrapper>


}


const Wrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 2%;
  display: flex;
  flex-direction: column;
  padding:1rem;
  background-color: var(---white);
  box-shadow:var(---shadow-1);
  border-radius:10px;
  z-index: 3;

  .open{
    visibility: visible;
  }

  .close{
   visibility: hidden;
  }
  .telephone-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight:400;
  }



  .input-control{
    width:88.6vw;
    height: 3rem;
    text-indent:10px;
    background-color:var(---white);
    outline:none;
  }

  .btn-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:3rem auto;
    width: 100%;
  }

  .verification-btn-container{
    display: flex;
    align-items: center;
   flex-direction:column;
   row-gap: 1rem;
    margin:3rem auto;
    width: 100%;
  }
  .submit-btn{
    width: 12rem;
    height: 3rem;
    background-color:var(---primary);
    border-color:transparent;
    color: var(---white);
    box-shadow:var(---shadow-1);
      border-radius:5px;
  }


.cancel-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 3rem;
  border-color:transparent;
  background-color:transparent;
  border:var(---secondary)  solid 0.5px;
  color: var(---textColor);
  border-radius:5px;
  font-weight:700;
  box-shadow:var(---shadow-1);
    transition:all .2s ease-in-out
}

.cancel-btn span{
    color: var(---textColor-1);
}
  .cancel-btn:hover{
     box-shadow:var(---shadow-1);
      background-color:var(---secondary);
      color: var(---white);
  }

.show-form{
display: flex;
flex-direction: column;
height: auto;
}

.hide-form{
display: none;
  height: 0;
}

.change-number-btn,
.resend-btn,
.confirm-btn{
    display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  border-color:transparent;
  background-color:transparent;

  border-radius:5px;

}
.confirm-btn{
  background-color: var(---primary);
  color: var(---white);
}
.resend-btn,
.change-number-btn{
    border:var(---secondary)  solid 0.5px;
  color: var(---textColor);
}

.change-number-btn:hover,
.resend-btn:hover{
  background-color: var(---secondary);
  color: var(---white);
}

.form-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.close-form{
  display: flex;
 justify-content: center;
 background-color: transparent;
 border-color:transparent;
 font-size:1rem;
 cursor: pointer;
}


@media screen and (min-width: 768px){
  top: 40%;
left: 20%;


  .input-control{
    width:69vw;
  }

   .verification-btn-container{
    display: flex;
    align-items: center;
   flex-direction:row-reverse;
   column-gap:10px;
  }
}

@media screen and (min-width: 1092px){
  top: 40%;
  left: 30%;



  .input-control{
    width:49vw;
  }

}
`
export default ConfirmTelephone