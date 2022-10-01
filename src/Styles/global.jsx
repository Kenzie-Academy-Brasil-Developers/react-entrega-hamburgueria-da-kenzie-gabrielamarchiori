import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  html,body,header,ul,li,img,p,h1,h2,h3,nav,div,a, section, input {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    outline: none;
    border: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

button {
  cursor: pointer;
}

`;
export default GlobalStyle;
