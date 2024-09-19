import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
height: 76.5vh;
  background-color: var(---bgColor-1);

.login-form,
.register-form{
  display: flex;
  flex-direction: column;
  max-width: var(---maxWidth-4);
  margin: 3rem auto;
 row-gap: 2rem;
 box-shadow:0 0px 15px rgba(0,0,0,0.2);
 padding: 1rem;
 background-color: var(---white);
}


.form-control{
  display: flex;
  flex-direction: column;
 row-gap: 2rem;
}

.form-title{
  display: flex;
  justify-content: center;
}

.parent-container{
  display: flex;
  flex-direction:column;
  row-gap: 2rem;
}

.email-container,
.password-container,
.name-container{
  display: flex;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
  border:gray solid 1px;
    border-radius:25px;
}

input{
  outline:none;

}

.email, 
.password,
.name{
  width: 30rem;
  height: 2rem;
  background-color: var(---white);
  margin-right:1rem;
}

.email-container svg,
.password-container svg,
.name-container svg{
margin-left:1rem;
}

.login-btn{
  width: 100%;
  height: 2rem;
  background-color: var(---secondary);
  border-color:transparent;
  color: var(---white);
  font-size:var(---fontSize-1);
  border-radius: 25px;
  text-transform:capitalize;
}

.register-link,
.login-link{
  display: flex;
  align-items: center;
  column-gap:5px;
  color: var(---textColor-3);
  margin-top:-1rem;
}

.register-link a,
.login-link a{ 
color: var(---secondary);
}

.register-link a:hover,
.login-link a:hover{
text-decoration:underline;
}

.pwd-reminder{
  display: flex;
  justify-content: right;
  color: var(---textColor-3);
}

.pwd-reminder a{
  color: var(---secondary);
}

.oauth-login{
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin-top:-1rem;
}

.oauth-links{
  display: flex;
  align-items: center;
  justify-content: center;
column-gap:1rem;

}

.oauth-links img{
  width: 1rem;
  height: 1rem;
}

.oauth-links a{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
}


.oauth-links a:hover{
  background-color: var(---textColor-4);
  border-radius:50%
}

@media screen and (min-width: 768px) {
 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 83.5vh;
}

`
export default Wrapper