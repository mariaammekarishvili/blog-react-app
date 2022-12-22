import styled from "styled-components";

export const StyledIconBox = styled.div`
  position: absolute;
  right: 10px;
  top: 7px;
  display: none;
  align-items: center;
  font-size: 14px;
  & svg:first-child {
    margin: 0 5px;
    cursor: pointer;
    & path {
      fill: red;
    }
  }
`;
export const StyledCoseBox = styled.div`
  position: absolute;
  top: 0px;
  right: 12px;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;
export const StyledEditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cdcfd2;
  height: 25px;
  border-radius: 8px;
  width: auto;
  padding: 0 10px;
  cursor: pointer;
`;
export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgb(36, 37, 38);
  width: 100%;
  min-height: 40px;
  border-radius: 10px;
  margin: 10px 0;
  padding-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  h2 {
    color: #f5faff;
    font-size: 20px;
    margin: 0 0 15px 0;
  }
  &.create {
    padding: 15px 20px;
  }
  &:hover {
    ${StyledIconBox} {
      display: flex;
    }
  }
`;
export const StyledTextarea = styled.textarea`
  background-color: rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  outline: none;
  min-width: 100%;
  min-height: 50px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 10px;
  color: #f5faff;
  padding: 10px;
  font-size: 16px;
  &.body {
    min-height: 90px;
  }
`;
export const StyledButton = styled.button`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  margin-left: auto;
  border-radius: 33px;
  width: 108px;
  height: 37px;
  cursor: pointer;
  margin-top: 5px;
  background-color: #2374e1;
  border: none;
`;
export const StyledInput = styled.input`
  background-color: rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  outline: none;
  min-height: 40px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 10px;
  color: #f5faff;
  padding: 0 10px;
`;
export const StyledHeader = styled.div`
  padding: 15px 3px;
  font-weight: bold;
  margin-left: 15px;
  border-bottom: 2px solid rgb(255, 255, 255, 0.2);
  min-width: 45%;
  max-width: 90%;
  color: white;
`;
export const StyledContent = styled.div`
  padding: 19px;
  width: 100%;
  color: white;
`;
export const StyledCommentInput = styled.input`
  border-radius: 20px;
  height: 40px;
  outline: none;
  padding: 0 16px;
  border: 1px solid #00000059;
  margin-right: 5px;
  width: 100%;
`;
export const StyledCommentBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-top: 20px;
`;
export const StyledTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0 15px 15px;
`;
