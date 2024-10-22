import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { hideDialogBox } from "../../features/userToggleSlice";
import { useAppSelector } from "../../hooks/hooks";


const MessageBox = ({ message, msgType }: { message: string, msgType: string }) => {
  const showDialog = useAppSelector((state) => state.userMenu.showDialog);
  const dispatch = useDispatch()
  return <Wrapper style={{ display: showDialog ? 'flex' : 'none' }} >
    <div className={`main ${msgType === 'success' ? 'success-bg' : 'failure-bg'}`}>
      <div className="close-btn-container">
        <button className="close-btn" onClick={() => dispatch(hideDialogBox())}>{
          msgType === 'success' ? <FaTimes /> : <FaTimes />
        }</button>
      </div>
      <div className="msg-container">
        <p>{message}</p>
      </div>
    </div>

  </Wrapper>
}
const Wrapper = styled.div`

.main{
  display: flex;
  width: 30rem;
  align-items: center;
  column-gap:10px;
  padding-left:5px;
}
.close-btn-container{
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  border:var(---white)  solid 2px;
  border-radius:50%;
}

.close-btn{
   display: flex;
   align-items: center;
  justify-content: center;
  background-color: transparent;
  border-color:transparent;
}
.close-btn svg{
  color: var(---white);
}
.msg-container{
  display: flex;
  align-items: center;
  width: 100%;
  color: var(---white);
  font-weight:400;
}


.failure-bg{
background-color: rebeccapurple;
}

.success-bg{
background-color: green;
}


`

export default MessageBox;