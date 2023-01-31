import { 
  Button,
  CheckboxContainer,
  ContainerPassword, 
  Content, 
  Input, 
  InputCheckbox, 
  InputContainer, 
  InputIcon, 
  InputLabel, 
  InputWrapper, 
  LabelCheckbox, 
  Links } 
  from "./styles"

import { useState } from "react"

import LogIcon from "../../assets/log-in.svg"
import Mail from "../../assets/mail.svg"
import MailFocus from "../../assets/mail-focus.svg"
import Lock from "../../assets/lock.svg"
import LockFocus from "../../assets/lock-focus.svg"
import Eye from "../../assets/eye.svg";
import { Checkbox } from "../Checkbox"

export function FormContainer() {
  const [focus, setFocus] = useState(false)
  const [focusMail, setFocusMail] = useState(false)

  const [checked, setChecked] = useState(false)

  return (      
    <Content>
      <header>
        <div>
          <img src={LogIcon} className="logIcon" alt="" />
          <h1>Faça seu login</h1>
        </div>
        <p>Entre com suas informações de cadastro</p>
      </header>
      <form action="">
        <InputContainer onFocus={() => setFocusMail(true)} onBlur={() => setFocusMail(false)}>
          <InputLabel htmlFor="">E-mail</InputLabel>
            <InputWrapper>
                <InputIcon>
                  <img src={focusMail ?  MailFocus:Mail } alt="" />
                  </InputIcon>   
                <Input type="email" placeholder="Digite seu e-mail"/>
                
            </InputWrapper>
          </InputContainer>

          <InputContainer onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
            <InputLabel>Senha</InputLabel>
            <InputWrapper>
              <InputIcon>
                <img src={focus ? LockFocus:Lock } alt="" />
              </InputIcon>
                <Input type="password" placeholder="Digite sua senha"/>
                <InputIcon>
                  <img src={Eye} alt="" />
                </InputIcon>
            </InputWrapper>
          </InputContainer>
            <ContainerPassword>
              <Checkbox id="1" label="Lembrar-me" onSelected={setChecked} checked={checked}/> 
              <Links href="#">Esqueci minha senha</Links>
            </ContainerPassword>
           

            <Button>Entrar</Button>

            <Links href="#">Não tem uma conta? Registre-se</Links>
        
      </form>
    </Content> 

  )
}