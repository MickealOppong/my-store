import { BiErrorCircle } from "react-icons/bi"
import { IoMdInformationCircleOutline } from "react-icons/io"
import styled from "styled-components"
import { EMessageType } from "../../types/EMessageType"
import Overlay from "./Overlay"

const Info = ({ message, type }: { message: string, type: EMessageType }) => {

  if (type === EMessageType.SUCCESS) {
    return <Wrapper>
      <Overlay />
      <div className="info">
        <IoMdInformationCircleOutline />
        <h2>{message}</h2>
      </div>
    </Wrapper>
  }
  if (type === EMessageType.FAILURE) {
    return <Wrapper>
      <Overlay />
      <div className="info">
        <BiErrorCircle />
        <h2>{message}</h2>
      </div>
    </Wrapper>
  }
  if (type === EMessageType.WARNING) {
    return <Wrapper>
      <Overlay />
      <div className="info">
        <BiErrorCircle />
        <h2>{message}</h2>
      </div>
    </Wrapper>
  }
  return <Wrapper>
    <Overlay />
    <div className="info">
      <h2>{message}</h2>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
display: none;
.info{
    position: absolute;
  top: 20%;
  left: 50%;
  display:flex;
  flex-direction:column;
  width: 15rem;
  height: 3rem;
  background-color: lightblue;
  z-index: 30;
}
  
`
export default Info