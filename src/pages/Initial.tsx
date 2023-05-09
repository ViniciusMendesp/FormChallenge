import { AppContent, Container, SideContent, SideFirst, SideSecond } from "../AppStyled";
import  Logo  from "../assets/logo.svg"
import { Thanks } from "../components/initalthanks";

export function Initial() {
  return (
    <>
      <Container>
      <SideFirst>
        <header>
          <img className="Logo" src={Logo} alt="" />
        </header>

        <SideContent>
          <Thanks />
        </SideContent>
      </SideFirst>
      <SideSecond></SideSecond>
    </Container>
    <AppContent/> 
    </>
  )
}