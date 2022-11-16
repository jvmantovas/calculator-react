import { ButtonContainer, Num } from "./styles";

const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <Num>{label}</Num>
    </ButtonContainer>
  );
};

export default Button;
