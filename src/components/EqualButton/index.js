import { EqualButtonContainer, Num } from "./styles";

const EButton = (props) => {
  return (
    <EqualButtonContainer onClick={() => props.onClick(props.keyValue)}>
      <Num>{props.keyValue}</Num>
    </EqualButtonContainer>
  );
};

export default EButton;
