import { PlusButtonContainer, Num } from "./styles";

const PlusButton = (props) => {
  return (
    <PlusButtonContainer onClick={() => props.onClick(props.keyValue)}>
      <Num>{props.keyValue}</Num>
    </PlusButtonContainer>
  );
};

export default PlusButton;
