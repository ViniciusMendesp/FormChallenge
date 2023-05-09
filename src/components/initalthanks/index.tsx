import { Content, Links } from "../Form/styles";
import { ThanksContent } from "./styles";

export function Thanks() {
  return (
    <Content>
      <ThanksContent>
        <h1>Obrigado por testar</h1>
        <p>De uma olhada nas minhas redes sociais!</p>

        <Links href="https://github.com/ViniciusMendesp">Github</Links>
        <Links href="https://www.linkedin.com/in/vinicius-mendes-pimentel/">Linkedin</Links>
      </ThanksContent>    
    </Content>
  )
}