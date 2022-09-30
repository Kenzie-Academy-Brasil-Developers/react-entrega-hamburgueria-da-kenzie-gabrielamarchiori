import styled from "styled-components";

export const Nome = styled.h2`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-title-3);
  color: var(--color-gray-100);

  margin-bottom: 15px;
`;

export const Categoria = styled.p`
  font-weight: var(--font-weight-regular);
  font-size: var(--font-text-3);
  color: var(--color-gray-50);

  margin-bottom: 15px;
  
`;

export const Preco = styled.span`
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-text-2);
  color: var(--color-primary);

  margin-bottom: 15px;
`;

export const Total = styled(Nome)`
  font-weight: var(--font-weight-semibold);
`;

export const Value = styled(Categoria)`
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-text-2);
`;
