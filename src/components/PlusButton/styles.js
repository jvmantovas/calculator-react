import styled from "styled-components";

export const PlusButtonContainer = styled.span`
  & {
    color: #fff;
    position: relative;
    display: grid;
    grid-row-start: 3;
    grid-row-end: 5;
    grid-column-start: 4;
    grid-column-end: 4;
    width: 80px;
    place-items: center;
    margin: 8px;
    background: linear-gradient(180deg, #2f2f2f, #3f3f3f);
    box-shadow: inset -8px 0 8px rgb(0, 0, 0, 0.15),
      inset 0 -8px 8px rgb(0, 0, 0, 0.25), 0 0 0 2px rgb(0, 0, 0, 0.75),
      10px 20px 25px rgb(0, 0, 0, 0.4);
    user-select: none;
    cursor: pointer;
    font-weight: 400;
    border-radius: 10px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 4px;
    bottom: 14px;
    right: 12px;
    border-radius: 10px;
    background: linear-gradient(90deg, #2d2d2d, #4d4d4d);
    box-shadow: -5px -5px 15px rgb(0, 0, 0, 0.1),
      10px 5px 10px rgb(0, 0, 0, 0.15);
    border-left: 1px solid #0004;
    border-bottom: 1px solid #0004;
    border-top: 1px solid #0009;
  }
  &:active {
    filter: brightness(1.5);
  }
`;

export const Num = styled.i`
  position: relative;
  font-style: normal;
  font-size: 1.5em;
  text-transform: uppercase;
  padding-bottom: 10px;
  padding-right: 5px;
`;
