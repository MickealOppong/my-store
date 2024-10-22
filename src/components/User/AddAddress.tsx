import { Store } from "@reduxjs/toolkit";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddressFormInput from "../general/AddressFormInput";


export const action = (store: Store) => async () => {

  console.log(store.getState());

}
const AddAddress = () => {


  return <Wrapper>
    <div className="address-title">
      <Link className="link-container" to={'/my-account/account-setting'}><FiArrowLeft /></Link>
      <h2>Add delivery address</h2>
    </div>
    <AddressFormInput />
  </Wrapper>


}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
row-gap: 2rem;
  .address-title{
display: flex;
align-items: center;
column-gap:10px;
margin: 0  auto;
width: 100%;;

}

.address-title h2{
  font-weight:500;
}

.link-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(---white);
  border-radius:50%;
  box-shadow:var(---shadow-1);
  font-size:var(---fontSize-2);
  color: black;
  cursor: pointer;
}
`
export default AddAddress