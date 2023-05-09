import { AppContent, Container, SideContent, SideFirst, SideSecond } from "../AppStyled";
import  Logo  from "../assets/logo.svg"
import { FormRegister } from "../components/formregister";

export function Register() {
  return (
    <>
      <Container>
      <SideFirst>
        <header>
          <img className="Logo" src={Logo} alt="" />
        </header>

        <SideContent>
          <FormRegister/>
        </SideContent>
      </SideFirst>
      <SideSecond></SideSecond>
    </Container>
    <AppContent/> 
    </>
  )
}