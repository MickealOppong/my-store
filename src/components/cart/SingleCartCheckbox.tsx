import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { useUpdateCartStatus } from "../../hooks/useUpdateCartStatus";

export function SingleCartCheckbox({ id, productId, include }: { id: number, productId: number, include: boolean }) {
  const { handleClick, includeItem } = useUpdateCartStatus(id, productId, include)



  return <Wrapper className={`checkbox-container `}>
    <div className={`checkbox-btn status-btn ${includeItem ? 'checked' : ''}`} onClick={() => handleClick()} ><FaCheck /></div>
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