import { ClearButtonContainer, Num } from "./styles";

const CButton = (props) => {
  return (
    <ClearButtonContainer onClick={() => props.onClick(props.keyValue)}>
      <Num>{props.keyValue}</Num>
    </ClearButtonContainer>
  );
};

export default CButton;
