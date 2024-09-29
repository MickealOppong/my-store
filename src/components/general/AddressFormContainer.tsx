import { useState } from "react";
import styled from "styled-components";
import AddressFormCompany from "./AddressFormCompany";
import AddressFormPerson from "./AddressFormPerson";

const AddressFormContainer = () => {
  const [isPerson, setIsPerson] = useState<boolean>(true);

  return <Wrapper>
    <div>
      <button className="biz-btn btn" onClick={() => setIsPerson(() => false)}><span>Business</span></button>
      <button className="person-btn btn" onClick={() => setIsPerson(() => true)}><span>Natural person</span></button>
    </div>
    {
      isPerson ? <AddressFormPerson /> : <AddressFormCompany />
    }
  </Wrapper>
}
const Wrapper = styled.div`
  
`
export default AddressFormContainer