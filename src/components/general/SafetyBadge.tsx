import { AiFillSafetyCertificate } from "react-icons/ai"
import { Link } from "react-router-dom"
import styled from "styled-components"

const SafetyBadge = () => {
  return <Wrapper>
    <div className="safety-icon">
      <AiFillSafetyCertificate />
      <span>Swappi guarantees safe shopping</span>
    </div>
    <div className="safety-link">
      <Link to={'/'}>Buyer Protection Program Terms and Conditions</Link>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 5px;

  .safety-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap:10px;
  }

  .safety-icon p{
    font-size:0.85rem;
    font-weight:900;
  }

  .safety-icon svg{
    font-size:1.2rem;
    color: green;
  }

  .safety-link{
      display: flex;
    align-items: center;
    justify-content: center;
  }
  

  .safety-link a{
    color: var(---secondary);
    text-decoration:underline;
  }
`
export default SafetyBadge