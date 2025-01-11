import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { useUpdateCartLineItemStatusMutation } from "../../features/api/cartApi";

export function SingleCartCheckbox({ id, productId, include }: { id: number, productId: number, include: boolean }) {

  const [handleCartLineItemStatus] = useUpdateCartLineItemStatusMutation()
  const [changeStatus, setChangeStatus] = useState<boolean>(include);
  const sessionId = sessionStorage.getItem('_apx.sessionid') as string

  const handleCheckbox = async () => {

    await handleCartLineItemStatus({ cartId: id, productId, sessionId, includeItem: changeStatus })

  }

  /*
    <form className={`checkbox-btn status-btn ${include ? 'checked' : ''}`} onClick={() => handleCheckbox()} ><input type="checkbox" name="cartStatus" checked={changeStatus} onChange={(e: ChangeEvent<HTMLInputElement>) => handleStatusChange(e)} /></form>
  */

  useEffect(() => {
    handleCheckbox()
  }, [changeStatus])


  const handleStatusChange = () => {
    setChangeStatus(() => !changeStatus)
  }


  return <Wrapper className={`checkbox-container `}>
    <div className={`checkbox-btn status-btn ${include ? 'checked' : ''}`} onClick={() => handleStatusChange()} >
      <FaCheck />
    </div>
  </Wrapper>

}

const Wrapper = styled.div`
  .checkbox-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(---white);
  border-color:transparent;
  width:15px;
  height: 15px;
  border:var(---textColor)  solid 2px;
  border-radius:2px;
  cursor: pointer;
}

.checkbox-btn svg{
 color: var(---white);
}

.checked{
  font-weight:900;
  border:var(---secondary)  solid 2px;
}

.checked svg{
  font-weight:900;
  color: var(---secondary);
}
`