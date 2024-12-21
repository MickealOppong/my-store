import styled from "styled-components";


const PaymentOption = ({ id, image, paymentMethod, active }: { id: number, image: string, paymentMethod: string, active: number }) => {


  return <Wrapper >
    <div className={`single-option ${active == id ? 'active' : ''}`} >
      <div className="payment-container">
        <div className='payment'>
          <div className={`${active === id ? 'checkbox' : ''}`} ></div>
        </div>
        <div className="payment-name">
          <span>{paymentMethod}</span>
        </div>
      </div>
      <img src={image} alt="" style={{ display: image ? 'flex' : 'none' }} />
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
 border:var(---ghost) solid 1px;
 border-radius:5px;
width: 100%;
height: 4rem;
padding-left:10px;
padding-right:10px;

}

.payment-container{
  display: flex;
  align-items: center;
  column-gap:10px;
}

.payment{
  display: flex;
align-items: center;
justify-content: center;
width: 1.2rem;
height: 1.2rem;
 border:var(---secondary) solid 1px;
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
  width: 6rem;
  height: 4rem;
}

.active{
  border:var(---secondary) solid 1px;
  background-color:var(---accent);
}

`
export default PaymentOption