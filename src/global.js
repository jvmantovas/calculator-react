import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        box-sizing: border-box
    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: inherit
    }
    body {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #0f0606;   
    }
`;
