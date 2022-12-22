import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const StyledBox = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  width: 40%;
`;

const ModalWindow = ({ children }) => {
  return (
    <StyledContainer>
      <StyledBox onClick={(e) => e.stopPropagation()}>{children}</StyledBox>
    </StyledContainer>
  );
};

export default ModalWindow;
