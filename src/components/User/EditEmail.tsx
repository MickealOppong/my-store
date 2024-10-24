
import { ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { hideEmailContainer } from "../../features/userToggleSlice";
import { useAppSelector } from "../../hooks/hooks";
import useFormDataEmail from "../../hooks/useFormDataEmail";
import { customFetch, getFromLocalStorage } from "../../util/util";
import FormInput from "../general/FormInput";

const EditEmail = () => {
  const dispatch = useDispatch();


  //get first name and last name from user slice
  const { username, id } = useAppSelector((state) => state.userSlice)
  const { value, handleChange, errorMessage } = useFormDataEmail(username)


  const handleCancelEvent = () => {
    dispatch(hideEmailContainer())
  }

  //handle first name and last name change
  async function editEmail(username: string): Promise<boolean | undefined> {
    console.log(username);

    try {
      const response = await customFetch.patch(`/users/edit-username/${id}`, { username }, {
        params: {
          id
        },
        headers: {
          Authorization: `Bearer ${getFromLocalStorage('uat')}`,
          "Content-Type": 'multipart/form-data'
        }
      })
      if (response.status === 200) return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }

  //handle submit event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData);
    const { username } = data;

    if (errorMessage) {
      return
    }
    const returnedValue = await editEmail(username as string)
    if (returnedValue) {
      dispatch(hideEmailContainer())
    }

  }

  return <Wrapper>
    <div className="email-title">
      <h2>Change email address</h2>
    </div>
    <form className="form-control" method="post" onSubmit={handleSubmit}>
      <div>
        <FormInput label={'Email'} placeholder="Your new email" type="email" name="username" width="input-width" value={value}
          handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} hasError={errorMessage.length > 0} />
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
  .email-title{
    display: flex;
    align-items: center;
    font-weight:500;
  }

  .form-control{

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



@media screen and (min-width: 768px){
  top: 40%;
left: 20%;


  .input-control{
    width:69vw;
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
export default EditEmail


