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
    background-color: #a7af7c;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.75);
    text-align: right;
    padding: 10px;
    font-size: 2em;
  }
`;
