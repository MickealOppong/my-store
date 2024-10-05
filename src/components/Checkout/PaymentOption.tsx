import styled from "styled-components";
import { payOption } from "./PaymentOptions";


const PaymentOption = ({ img, active }: payOption) => {


  return <Wrapper >
    <div className={`single-option ${active ? 'active' : ''}`} >
      <div className='payment'>
        <div className={`checkbox`} style={{ opacity: active ? '1' : '0' }} ></div>
      </div>
      <img src={img} alt="" />
    </div>

  </Wrapper>
}

const Wrapper = styled.div`
display: flex;
width: 100%;

.single-option{
  display: flex;
align-items: center;
justify-content: space-between;
 border:var(---textColor-3) solid 1px;
 border-radius:5px;
width: 100%;
height: 4rem;
padding-left:10px;
padding-right:10px;
}

.payment{
  display: flex;
justify-content:center;
align-items: center;
width: 1.2rem;
height: 1.2rem;
 border:var(---secondary) solid 2px;
 border-radius:50%;
}


.checkbox{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.8rem;
  height: 0.8rem;
 border:var(---secondary) solid 1px;
  background-color: var(---secondary);
 border-radius:50%;
}
.input{
  display: none;
}

img{
  width: 4rem;
  height: 2rem;
}

.active{
  border:var(---secondary) solid 2px;
  background-color:var(---bgColor-1);
}

`
export default PaymentOption