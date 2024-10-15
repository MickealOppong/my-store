
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
    <div className="telephone-title">
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
    font-weight:500;
  }

  .form-control{
    border: var(---primary) solid 1px;
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
export default EditTelephone