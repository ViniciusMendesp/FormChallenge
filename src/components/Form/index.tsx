import { 
  Button,
  ContainerPassword, 
  Content, 
  Input,  
  InputContainer, 
  InputIcon, 
  InputLabel, 
  InputWrapper, 
  Links } 
  from "./styles"

import { useState,  } from "react"

import { NavLink } from "react-router-dom"

import LogIcon from "../../assets/log-in.svg"
import Mail from "../../assets/mail.svg"
import MailFocus from "../../assets/mail-focus.svg"
import Lock from "../../assets/lock.svg"
import LockFocus from "../../assets/lock-focus.svg"
import Eye from "../../assets/eye.svg";
import { Checkbox } from "../CheckBox"

import { useAuth } from "../../context/authContext"

export function FormContainer() {
  const [focus, setFocus] = useState(false)
  const [focusMail, setFocusMail] = useState(false)
  const [checked, setChecked] = useState(false)
  const [email, setEmail] = useState("vinicius@email.com")
  const [password, setPassword] = useState("1234567")
  const [view, setView] = useState(false)

  const { logIn } = useAuth()


 async function onSubmit(e: any) {
    e.preventDefault()
    await logIn(email, password)
  }

  return (      
    <Content>
      <header>
        <div>
          <img src={LogIcon} className="logIcon" alt="" />
          <h1>Faça seu login</h1>
        </div>
        <p>Entre com suas informações de cadastro</p>
      </header>
      <form onSubmit={onSubmit}>
        <InputContainer onFocus={() => setFocusMail(true)} onBlur={() => setFocusMail(false)}>
          <InputLabel htmlFor="">E-mail</InputLabel>
            <InputWrapper>
                <InputIcon>
                  <img src={focusMail ?  MailFocus:Mail } alt="" />
                  </InputIcon>   
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail"/>
                
            </InputWrapper>
          </InputContainer>

          <InputContainer onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
            <InputLabel>Senha</InputLabel>
            <InputWrapper>
              <InputIcon>
                <img src={focus ? LockFocus:Lock } alt="" />
              </InputIcon>
                <Input type={view ? "text":"password" } value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha"/>
                <InputIcon onClick={() => setView(!view)}>
                  <img src={Eye} alt="" />

                  <a href="">123</a>
                </InputIcon>
            </InputWrapper>
          </InputContainer>
            <ContainerPassword>
              <Checkbox id="1" label="Lembrar-me" onSelected={setChecked} checked={checked}/> 
              <Links href="#">Esqueci minha senha</Links>
            </ContainerPassword>
           

            <Button type="submit">Entrar</Button>

            <NavLink to="/register" style={{ textDecoration: 'none' }}>
              <Links>Não tem uma conta? Registre-se</Links>
            </NavLink>
        
      </form>
    </Content> 

  )
}