
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { hideTelephoneContainer } from "../../features/userToggleSlice";
import FormInput from "../general/FormInput";

const EditTelephone = () => {
  const dispatch = useDispatch();
  const handleCancelEvent = () => {
    dispatch(hideTelephoneContainer())
  }
  return <Wrapper>
    <div className="email-title">
      <h2>Add telephone number</h2>
    </div>
    <form className="form-control">
      <FormInput label={'Telephone'} placeholder="Your new number" type="text" name="telephone" width="input-width" />
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
     box-shadow:0 5px 5px rgba(0,0,0,0.2);
  }


.cancel-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 3rem;
  border-color:transparent;
  background-color:transparent;
  border:#B19CD8  solid 0.5px;
  border-radius:5px;
  font-weight:700;
  box-shadow:0 5px 5px rgba(0,0,0,0.2);
    transition:all .2s ease-in-out
}

.cancel-btn span{
    color: var(---textColor-1);
}
  .cancel-btn:hover{
     box-shadow:0 5px 5px rgba(0,0,0,0.2);
      background-color:#B19CD8;
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
export default EditTelephone