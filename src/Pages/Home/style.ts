import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background: #18191a;
`;
export const StyledContent = styled.div`
  width: 700px;
  padding-top: 10px;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    max-width: 80%;
  }
  @media screen and (max-width: 780px) {
    max-width: 90%;
  }
`;
export const StyledFlexBox = styled.div`
  display: flex;
`;
export const StyledPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
