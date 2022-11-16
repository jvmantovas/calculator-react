import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
     display: flex;
     height: 100vh;
     align-items: center;
     justify-content: center;
     background-color: #202020;   
    }
`;
