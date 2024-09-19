import styled from "styled-components"

const FormInput = ({ type, name, placeholder, label, width }: { type: string, name: string, placeholder: string, label: string, width: string }) => {
  return <Wrapper >
    <div className={`input-control   ${width}`}>
      <label className="label" htmlFor={label} >{label}</label>
      <input type={type} name={name} placeholder={placeholder} className="input" id={label} />
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
display: flex;


  .input-control{
  display: flex;
  flex-direction: column;
  width: 100%;
  border: rgba(0,0,0,0.2) solid 1px;
  
  }

  .label{
    font-size:0.85rem;
    text-indent:10px;
    color: var(---textColor-3);
    background-color: var(---white);
    padding-top:5px;

  }

  .input{
    height: 2rem;
    outline: none;
    text-indent:10px;
    border-style:none;
    text-transform:uppercase;
  }

  .input-control:hover .label{
    color: var(---secondary);
  }

  .input-control:hover{
    border-color: var(---secondary);
  }
  
  @media screen and  (min-width: 1092px){
 
  }
`
export default FormInput