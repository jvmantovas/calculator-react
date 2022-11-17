import styled from "styled-components";

export const InputContainer = styled.div`
  input {
    position: relative;
    grid-column: span 4;
    height: 100px;
    width: calc(100% - 20px);
    left: 10px;
    border: none;
    outline: none;
    background-color: darkolivegreen;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000000;
    text-align: right;
    padding: 10px;
    font-size: 2em;
    color: #000000;
  }
`;
