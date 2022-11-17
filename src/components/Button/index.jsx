import { ButtonContainer, Num } from "./styles";

const Button = (props) => {
  return (
    <ButtonContainer onClick={() => props.onClick(props.keyValue)}>
      <Num>{props.keyValue}</Num>
    </ButtonContainer>
  );
};

export default Button;
