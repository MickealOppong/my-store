
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { hideTelephoneContainer } from "../../features/userToggleSlice";

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
      <input placeholder="New telephone" type="text" name="telephone" className="input-control" />
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
  width: 90vw;
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
    margin-right:10px;
  }


.cancel-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 3rem;
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



@media screen and (min-width: 768px){
  top: 40%;
left: 20%;
width: 70vw;

  .input-control{
    width:69vw;
  }

}

@media screen and (min-width: 1092px){
  top: 40%;
left: 25%;
width: 50vw;


  .input-control{
    width:49vw;
  }

}
`
export default EditTelephone