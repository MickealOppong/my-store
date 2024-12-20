import styled from "styled-components";

const Wrapper = styled.section`
position: relative;
display: flex;
flex-direction: column;
width: 100vw;


.email-dialog{
  display: flex;
  max-width: var(---maxWidth-1);
  margin: 0 auto;
  width: 100%;
}

.setting-title{
 display: flex;
 max-width: var(---maxWidth-1);
 margin: 1rem auto;
 width: 100%;
}

.personal-info{
  display: flex;
  flex-direction: column;
  background-color: var(---white);
  padding: 2rem;
}


.user-info{
  display: grid;
  grid-template-columns:repeat(2,1fr);
  color: var(---textColor);
  width: 100%;
}



.edit-btn{
  background-color: transparent;
  border-color:transparent;
  color: var(---primary);
  font-size:var(---fontSize-1);
  text-transform:capitalize;
  letter-spacing: var(---spacing-1);
}


.add-btn,
.change-btn{
  width: auto;
  padding:10px;
  background-color: transparent;
  border-color:transparent;
  border:var(---primary) solid 1px;
  color: var(---primary);
  font-size:var(---fontSize-1);
  transition:all .2 ease-in-out;
}

.add-btn:hover,
.change-btn:hover{
  background-color: var(---primary);
  color: var(---white);
  transition:all .2 ease-in-out;
}
.address{
  display: flex;
  flex-direction: column;
  }

.delivery-container,
.invoice-container{
  display: flex;
  flex-direction: column;
  background-color: var(---white);
  margin-top:2rem;
  padding:2rem;
}


.delivery,
.invoice{
  display: flex;
  align-items: center;
  justify-content: space-between;
 
}
.delivery-data,
.invoice-data{
  display: flex;
  flex-direction: column;
color: var(---textColor-1);
}

.account-info{
  margin-bottom:4rem;
}


.btns{
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.delete,
.change{
  background-color: transparent;
  border-color:transparent;
  font-size:var(---fontSize-1);
}

.delete{
  color: red;
}

.change{
  color: var(---primary);
}

.change:hover{
  font-weight:500;
}


.add-address-btn,
.add-invoice-btn{
display: flex;
justify-content: center;
align-items: center;
width: 100%;
color: var(---primary);
border: var(---primary) solid 1px;
padding: 10px;
}
@media screen and (min-width: 768px){
display: flex;
flex-direction: column;
width: 70vw;

  .user-info{
  display: grid;
  grid-template-columns:repeat(2,1fr);
}
.setting-title{
   padding-left:0rem;
}


}

@media screen and (min-width: 1092px){
  display: flex;
flex-direction: column;
width: 70vw;

  .user-info{
  display: flex;
  justify-content: space-between;
}

.address{
  display: flex;
 flex-direction: row;
 width: 100%;
 column-gap:var(---c-gap-1);
  }

  .delivery-container,
.invoice-container{
  display: flex;
  width: 50%;
}
}

`

export default Wrapper