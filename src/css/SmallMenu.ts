import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: var(---white);
width: 100vw;
height: auto;
box-shadow:0 0px 5px rgba(0,0,0,0.2);

.menu-container{
display: flex;
flex-direction:column;
}

.menu-title{
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  font-size:var(---fontSize-1);
  background-color: var(---bgColor-1);
  color: black;
  font-weight:700;
}

.menu-title h4{
  margin-left:10px;
}


.menu-link-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  border-top:var(---bgColor-1) solid 1px;
}



.menu-link{
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap:10px;
  width: 100%;
  color: var(---textColor-1); 
  text-transform:capitalize;
  font-size:1rem;
  padding: 10px;
 
}

.menu-link svg {
  font-size:1rem;
  color: var(---secondary);
}

.link{
  display: flex;
  align-items: center;
  column-gap:10px;
}
.text{
  width: 12rem;
}


.menu-link:hover{
  background-color: var(---bgColor-1);
}



.logout-btn:hover{
    background-color: var(---bgColor-1);
}


.counter{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius:50%;
  background-color: var(---primary);
  color: var(---white);
}

.user-reg-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size:var(---fontSize-2);
}


.login-container,
.join-container{
  display: flex;
  align-items: center;
  padding: 1rem;
}

.login-btn{
  display: flex;
  align-items: center;
  justify-content:center;
  width: 16rem;
  height: 3rem;
  background-color: var(---btnColor);
  color: var(---white) ;
  box-shadow:0 5px 5px rgba(0,0,0,0.2);
    transition:'1s'
}

.join-btn{
   display: flex;
  align-items: center;
  justify-content:center;
  width:16rem;
  height: 3rem;
  background-color:transparent;
  border-color:transparent;
  border:var(---secondary) solid 0.5px;
  color: var(---secondary) ; 
    transition:'1s'
}

.login-btn:hover{
  background-color: var(---secondary);
    transition:'1s'
}


.join-btn:hover{
  background-color: #e1f1fd;
  transition:'1s'
}

.info{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(---fontSize-1);
}
.info span{
  margin-left:5px;
  margin-right:5px;
  color: var(---textColor-3);
}

.left,
.right{
 width: 85px;
 height: 1px;
 background-color: gray;
}


.logout-container:hover{
  background-color: var(---bgColor-1);
}

.logout-btn{
  display: flex;
  align-items: center;
  height:2.4rem;
  background-color: transparent;
  border-color:transparent;
  color: var(---secondary);
  text-transform:capitalize;
}


@media screen  and (min-width:768px){

display: none;

}
`

export default Wrapper;