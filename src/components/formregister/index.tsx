import { Button, Content, Input, InputContainer, InputIcon, InputLabel, InputWrapper, Links } from "../Form/styles";
import LogIcon from "../../assets/log-in.svg"
import Mail from "../../assets/mail.svg"
import MailFocus from "../../assets/mail-focus.svg"
import Custumer from "../../assets/customer.png"
import CustomerFocus from "../../assets/customer-focus.png"
import Lock from "../../assets/lock.svg"
import LockFocus from "../../assets/lock-focus.svg"
 
import { NavLink } from "react-router-dom"

import { useState } from "react";

export function FormRegister() {
  const [focus, setFocus] = useState(false)
  const [focusMail, setFocusMail] = useState(false)
  const [focusName, setFocusName] = useState(false)


  return (
    <Content>
      <header>
        <div>
          <img src={LogIcon} className="logIcon" alt="" />
          <h1>Faça seu cadastro</h1>
        </div>
        <p>informe seus dados de cadastro</p>
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

        <InputContainer onFocus={() => setFocusName(true)} onBlur={() => setFocusName(false)}>
          <InputLabel>Nome</InputLabel>
          <InputWrapper>
            <InputIcon>
              <img src={focusName ? CustomerFocus:Custumer} alt="" ></img>
            </InputIcon>
            <Input type="name" placeholder="Digite seu nome"/>
          </InputWrapper>
        </InputContainer>


        <InputContainer onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}> 
          <InputLabel htmlFor="">Senha</InputLabel>
          <InputWrapper>
            <InputIcon>
              <img src={focus ? LockFocus:Lock } alt="" />
            </InputIcon>
            <Input type="password" placeholder="Digite sua senha"/>
          </InputWrapper>
        </InputContainer>


        <Button>Cadastrar-se</Button>
        
        <NavLink to="/"  style={{ textDecoration: 'none' }}>
          <Links>Já tem uma conta? Login</Links>
        </NavLink>
        
      </form>
    </Content>
  )
}