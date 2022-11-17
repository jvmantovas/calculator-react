import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-width: 300px;
  min-height: 400px;
  max-with: 480px;
  padding: 40px 30px 30px;
  border-radius: 20px;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
    10px 10px 70px rgba(0, 0, 0, 0.25), inset -5px -5px 15px rgba(0, 0, 0, 0.25),
    inset 5px 5px 15px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  position: relative;
  display: grid;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
