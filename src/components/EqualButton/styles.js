import styled from "styled-components";

export const EqualButtonContainer = styled.span`
  & {
    background: #2196f3;
    color: #fff;
    position: relative;
    display: grid;
    width: 80px;
    place-items: center;
    margin: 8px;
    height: 80px;
    box-shadow: inset -8px 0 8px rgb(0 0 0 / 15%),
      inset 0 -8px 8px rgb(0, 0, 0, 0.25), 0 0 0 2px rgb(0, 0, 0, 0.75),
      10px 20px 25px rgb(0, 0, 0, 0.4);
    user-select: none;
    cursor: pointer;
    font-weight: 400;
    border-radius: 10px;
  }
  &::before {
    background: linear-gradient(90deg, #1479c9, #ffffff5c);
    border-left: 1px solid #fff4;
    border-bottom: 1px solid #fff4;
    border-top: 1px solid #fff4;
    content: "";
    position: absolute;
    top: 3px;
    left: 4px;
    bottom: 14px;
    right: 12px;
    border-radius: 10px;
    box-shadow: -5px -5px 15px rgb(0, 0, 0, 0.1),
      10px 5px 10px rgb(0, 0, 0, 0.15);
  }
  &:active {
    filter: brightness(1.5);
`;

export const Num = styled.i`
  position: relative;
  font-style: normal;
  font-size: 1.5em;
  text-transform: uppercase;
  padding-bottom: 10px;
  padding-right: 5px;
`;
