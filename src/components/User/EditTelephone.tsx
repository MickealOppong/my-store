
import { ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAddTelephoneMutation } from "../../features/api/userApiSlice";
import { hideTelephoneContainer, showVerificationForm } from "../../features/userToggleSlice";
import { useAppSelector, useFormDataTelephone } from "../../hooks/hooks";
import FormInput from "../general/FormInput";

const EditTelephone = () => {
  //input state management
  const { value, handleChange, errorMessage } = useFormDataTelephone('')
  const dispatch = useDispatch();
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const [addTelephone] = useAddTelephoneMutation()
  //user id from slice
  const id = useAppSelector((state) => state.userSlice.id)

  const handleCancelEvent = () => {
    dispatch(hideTelephoneContainer())
  }

  //handle submit event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData);
    const telephone = data.telephone as string
    console.log(telephone);

    if (!errorMessage) {

      try {
        const returnedValue = await addTelephone({
          id,
          url: `/sms/add-number/${id}`,
          token,
          telephone
        })

        //dispatch(hideTelephoneContainer())
        dispatch(hideTelephoneContainer())
        dispatch(showVerificationForm(telephone))

      } catch (error) {

      }
    }

  }


  return <Wrapper>
    <div className="telephone-title">
      <h2>Add telephone number</h2>
    </div>
    <form className="form-control" method="post" onSubmit={handleSubmit} >
      <div>
        <FormInput label={'Telephone'} placeholder="Your new number" type="text" name="telephone" width="input-width"
          hasError={errorMessage.length > 0} handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} value={value} />
        <span>{errorMessage}</span>
      </div>
      <div className="btn-container">
        <button className="cancel-btn" type="button" onClick={() => handleCancelEvent()}>Cancel</button>
        <button className="submit-btn" type="submit">Submit</button>
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
export default EditTelephone