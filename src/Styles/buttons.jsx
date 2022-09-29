import styled from "styled-components";

export const ButtonAdd = styled.button`
    
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;

    font-size: var( --font-text-2);
    font-weight: var(--font-weight-semibold);
    color: #FFFFFF;

    padding: 5px 10px;
`;

export const ButttonSearch = styled(ButtonAdd) `
    font-weight: var(--font-weight-medium);
`;

export const ButtonRemove = styled.button`
    
    width: 95%;
    
    background-color: var(--color-gray-20);
    border: 2px solid var(--color-gray-20);
    border-radius: 8px;

    font-size: var(--font-text-1);
    font-weight: var(--font-weight-semibold);
    color: var(--color-gray-50);
`;