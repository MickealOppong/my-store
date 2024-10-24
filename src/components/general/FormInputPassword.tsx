import { ChangeEvent, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import styled from "styled-components";
import { useToggle } from "../../hooks/hooks";

const FormInputPassword = ({ name, placeholder, label, width, defValue, value, handleChange, hasError }: { name: string, placeholder: string, label: string, width: string, defValue?: string, value?: string, handleChange(e: ChangeEvent<HTMLInputElement>): void, hasError?: boolean }) => {
  const [isActive, toggle] = useToggle()
  const [type, setType] = useState<string>('password');
  (false);


  const handleClick = () => {
    toggle()
    if (type === 'password') {
      setType(() => 'text')
    } else {
      setType(() => 'password')
    }
  }
  return <Wrapper >
    <div className={`input-control ${width} ${hasError ? 'error' : ''}`} style={{ borderColor: hasError ? 'red' : '' }}>
      <label className="label" htmlFor={label} style={{ color: hasError ? 'red' : '' }}>{label}</label>
      <div className="input-container">
        <input type={type} name={name} placeholder={placeholder} className={`input`} id={label} defaultValue={defValue} value={value} onChange={handleChange} />
        <button type="button" className="eye-btn" onClick={() => handleClick()}>{
          isActive ? <IoEye /> : <IoEyeOff />}</button>
      </div>
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

  .input-container{
    display: flex;
    align-items: center;
    width: 100%;
  }

      .label{
      font-size:0.85rem;
      text-indent:10px;
      color: var(---textColor-3);
      padding-top:2px;
      background-color: var(---white);
   }

      .input{
        width: 100%;
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

     .eye-btn{
      font-size:1.2rem;
      background-color: transparent;
      border-color:transparent;
     }
      @media screen and (min-width: 768px){

      }
      `
export default FormInputPassword