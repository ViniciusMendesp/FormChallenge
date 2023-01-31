import styled from "styled-components";

export const Content = styled.div`
  width: 35.75rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: var(--form-background);
  border-radius: 5px;

  @media (max-width: 390px) {
    background: none;
    margin-top: 3rem;
    padding: 1rem;
  }

  margin-top: 7rem;

  padding: 3rem 7.5rem;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;

      .logIcon {
        margin: 0;
      }

      h1 {
        color: var(--text-title);
        font-family: "Poppins", sans-serif;
        font-weight: 600;
      }
    }

    p {
      color: var(--text-base);
      font-family: "Roboto", sans-serif;
      font-weight: 400;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: start !important;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 1rem;
  color: var(--text-base);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  border: 1px solid var(--text-base);
  border-radius: 8px;
  max-height: 48px;

  padding: 1rem 0.5rem;

  &:focus-within {
    border: 1px solid var(--primary-color);
  }
`;

export const InputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

export const Input = styled.input`
  border: 0;
  background: transparent;

  font-size: 0.875rem;
  height: 100%;
  width: 100%;
  outline: 0;

  color: var(--text-base);
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

export const ContainerPassword = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const InputCheckbox = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  background: color;
  border-radius: 4px;
  border: 1px solid var(--text-base);

  cursor: pointer;
`;

export const LabelCheckbox = styled.label`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: var(--text-base);
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;

  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  color: #473404;

  background: var(--primary-color);
`;

export const Links = styled.a`
  font-size: 0.875rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: var(--primary-color);
  text-decoration: none;
`;
