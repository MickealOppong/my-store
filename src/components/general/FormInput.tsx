import { ChangeEvent } from "react"
import styled from "styled-components"

const FormInput = ({ type, name, placeholder, label, width, defValue, value, handleChange, hasError }: { type: string, name: string, placeholder: string, label: string, width: string, defValue?: string, value?: string, handleChange(e: ChangeEvent<HTMLInputElement>): void, hasError?: boolean }) => {
  return <Wrapper >
    <div className={`input-control ${width} ${hasError ? 'error' : ''}`} style={{ borderColor: hasError ? 'red' : '' }}>
      <label className="label" htmlFor={label} style={{ color: hasError ? 'red' : '' }}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} className={`input`} id={label} defaultValue={defValue} value={value ? value : ''} onChange={handleChange} />
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
      display:flex;
      width: 100%;

      .input-control{
        display: flex;
      flex-direction: column;
      border: rgba(0,0,0,0.2) solid 1px;
  }

      .label{
      font-size:0.85rem;
      text-indent:10px;
      color: var(---textColor-3);
      padding-top:2px;
      background-color: var(---white);
   }

      .input{
        height: 2rem;
      outline: none;
      text-indent:10px;
      border-style:none;
      background-color: var(---white);
    }

      .input-control:hover .label{
        color: var(---primary);
      } 

      .input-control:hover{
        border-color: var(---primary);
     }

     .error input:hover{
      border-color: red;
     }
       .error label:hover{
      color: red;
     }
      @media screen and (min-width: 768px){

      }
      `
export default FormInput