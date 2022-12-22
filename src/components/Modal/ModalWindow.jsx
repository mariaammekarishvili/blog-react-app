import { StyledContainer, StyledBox } from "./style";

const ModalWindow = ({ children }) => {
  return (
    <StyledContainer>
      <StyledBox onClick={(e) => e.stopPropagation()}>{children}</StyledBox>
    </StyledContainer>
  );
};

export default ModalWindow;
