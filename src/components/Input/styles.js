import styled from "styled-components";

export const InputContainer = styled.div`
  input {
    display: grid;
    grid-column: span 4;
    font-family: "Orbitron", sans-serif;
    font-weight: 600;
    position: relative;
    height: 100px;
    width: calc(100% - 20px);
    left: 10px;
    border: 2px solid #000000;
    outline: none;
    background-color: darkolivegreen;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: inset 0 0 8px #000000;
    text-align: right;
    padding: 10px;
    padding-right: 20px;
    font-size: 4em;
    color: #000000;
  }
`;
