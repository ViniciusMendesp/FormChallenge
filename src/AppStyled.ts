import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import img from "./assets/side-image.jpg";
export const AppContent = createGlobalStyle`

  :root {
  --text-base: #afb6c2;
  --text-title: #d4ccb6;
  --background: #191816;
  --form-background: #24221f;
  --primary-color: #ffc632;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

`;
export const Container = styled.div`
  display: flex;
  width: 100vw;
`;

export const SideFirst = styled.aside`
  width: 50vw;
  height: 100vh;
  background: var(--background);

  .Logo {
    margin: 2.5rem;
  }

  @media (max-width: 1078px) {
    width: 100%;
  }
`;

export const SideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideSecond = styled.aside`
  width: 50vw;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;

  @media (max-width: 1078px) {
    display: none;
  }
`;
