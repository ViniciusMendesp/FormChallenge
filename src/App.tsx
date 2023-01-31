import { AppContent, Container, SideFirst, SideSecond, SideContent } from "./AppStyled"
import  Logo  from "./assets/logo.svg"
import { FormContainer } from "./components/Form"

export function App() {
  
  return (
    <>
      <Container>
        <SideFirst>
          <header>
            <img className="Logo" src={Logo} alt="" />
          </header>

          <SideContent>
            <FormContainer/>
          </SideContent>
        </SideFirst>
        <SideSecond></SideSecond>
      </Container>
      <AppContent/>
    </>
  
    
  )
}


