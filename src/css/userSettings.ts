import styled from "styled-components";

const Wrapper = styled.section`
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
   padding-left:1rem;
}

.personal-info{
  display: flex;
  flex-direction: column;
  background-color: var(---white);
  border-radius:5px;
  
}

.user-info{
  display: grid;
  grid-template-columns:repeat(2,1fr);
  padding:1rem;
  color: var(---textColor-1);
}

.profile-title{
  padding:0 1rem 1rem 1rem;
}


.edit-btn{
  background-color: transparent;
  border-color:transparent;
  color: var(---secondary);
  font-size:var(---fontSize-1);
  text-transform:capitalize;
}


.add-btn,
.change-btn{
  width: auto;
  padding:10px;
  background-color: transparent;
  border-color:transparent;
  border:var(---secondary) solid 1px;
  color: var(---secondary);
  font-size:var(---fontSize-1);
    transition:'5s'
}

.add-btn:hover,
.change-btn:hover{
  background-color: var(---secondary);
  color: var(---white);
  transition:'5s'
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
  padding:1rem;
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
  font-size:var(---fontSize-2);
  color: red;
}

.change{
  color: var(---secondary);
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
  

  .user-info{
  display: flex;
  justify-content: space-between;
}

.address{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  }

  .delivery-container,
.invoice-container{
  display: flex;
  width: 32vw;
}
}

`

export default Wrapper