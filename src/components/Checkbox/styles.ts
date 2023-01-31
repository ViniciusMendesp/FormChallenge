import styled from "styled-components";

export const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  gap: 0.5rem;
`;

export const CheckboxLabel = styled.label`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: var(--text-base);
`;

export const CheckMark = styled.label`
  width: 1.25rem;
  height: 1.25rem;
  background: color;
  border-radius: 4px;
  border: 1px solid var(--text-base);

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;

  &.active {
    background: var(--primary-color);
    border: none;
  }
`;
