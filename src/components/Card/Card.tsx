import styled from "styled-components";

const StyledCardBox = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  background-image: url("https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZSUyMGFuZCUyMHB1cnBsZXxlbnwwfHwwfHw%3D&w=1000&q=80");
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Card: React.FC = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledCardBox>mariami</StyledCardBox>
      <StyledCardBox>mariami</StyledCardBox>
      <StyledCardBox>mariami</StyledCardBox>
      <StyledCardBox>mariami</StyledCardBox>
    </StyledContainer>
  );
};

export default Card;
