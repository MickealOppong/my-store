
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { hideEmailContainer } from "../../features/userToggleSlice";
import FormInput from "../general/FormInput";

const EditEmail = () => {
  const dispatch = useDispatch();
  const handleCancelEvent = () => {
    dispatch(hideEmailContainer())
  }
  return <Wrapper>
    <div className="email-title">
      <h2>Change email address</h2>
    </div>
    <form className="form-control">
      <FormInput label={'Email'} placeholder="Your new email" type="text" name="lastName" width="input-width" />
    </form>
    <div className="btn-container">
      <button className="cancel-btn" type="submit" onClick={() => handleCancelEvent()}>Cancel</button>
      <button className="submit-btn" type="submit">Submit</button>
    </div>
  </Wrapper>
}


const Wrapper = styled.div`
position: absolute;
top: 40%;
left: 2%;
  display: flex;
  flex-direction: column;
  padding:1rem;
  background-color: var(---white);
  box-shadow:0  5px 5px rgba(0,0,0,0.2);
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
  }

  .form-control{
    border: var(---secondary) solid 1px;
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
  height: 3rem;
  background-color: transparent;
  border-color:transparent;
  border:red   solid   1px;
  padding: 10px;
}

.cancel-btn span{
    color: var(---textColor-1);
}
  .cancel-btn:hover{
      background-color: red;
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
left: 25%;



  .input-control{
    width:49vw;
  }

}
`
export default EditEmail