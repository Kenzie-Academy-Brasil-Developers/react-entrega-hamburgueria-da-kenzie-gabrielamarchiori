import styled from "styled-components";

export const FormDefault = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  background-color: #ffffff;
  border: 2px solid var(--color-gray-20);
  padding: 5px 0px;
  border-radius: 8px;
`;

export const FormDefaultDesk = styled(FormDefault) `
    width: unset;
`;