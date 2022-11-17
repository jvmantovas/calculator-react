import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-width: 300px;
  min-height: 400px;
  max-width: 470px;
  max-height: 700px;
  padding: 40px 30px 30px;
  border-radius: 20px;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
    10px 10px 70px rgba(0, 0, 0, 0.25), inset -5px -5px 15px rgba(0, 0, 0, 0.25),
    inset 5px 5px 15px rgba(0, 0, 0, 0.25);
  background-color: #202020;
`;

export const Keyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); ;
`;
