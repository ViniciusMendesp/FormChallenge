import { InputHTMLAttributes } from "react";
import { CheckContainer, CheckMark, CheckboxLabel } from "./styles";

import Check from "../../assets/check.svg"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  id: string,
  onSelected?: (value: boolean) => void
}



export function Checkbox({id, label, checked, onSelected, ...rest}:CheckboxProps){
  return (
    <CheckContainer>
      <input type="checkbox" hidden id={id} checked={checked} onChange={ (e) => {
        onSelected?.(e.target.checked)
      }} {...rest}/>
      <CheckMark htmlFor={id} className={checked ? "active":undefined}>
        {checked && <img src={Check} alt="" />}
      </CheckMark>
      {label && 
      <CheckboxLabel htmlFor={id} >
        {label} 
      </CheckboxLabel>
      }
    </CheckContainer>
  )
}
