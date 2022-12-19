import styled from "styled-components";
import SendIcon from "../../assets/svg/SendIcon";
import Comment from "../Comment";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  min-height: 40px;
  border-radius: 10px;
  margin: 10px 0;
  padding-bottom: 20px;
`;
const StyledHeader = styled.div`
  padding: 15px;
  font-weight: bold;
  border-bottom: 1px solid #00000059;
  width: 100%;
  max-width: 100%;
`;
const StyledContent = styled.div`
  padding: 16px;
  width: 100%;
`;
const StyledCommentInput = styled.input`
  border-radius: 20px;
  height: 40px;
  outline: none;
  padding: 0 16px;
  border: 1px solid #00000059;
  margin-right: 5px;
  width: 100%;
`;
const StyledCommentBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-top: 20px;
`;
const StyledTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0 15px 15px;
`;
const Post: React.FC = (): JSX.Element => {
  return (
    <StyledBox>
      <StyledHeader>Title</StyledHeader>
      <StyledContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eaque
        expedita possimus officia facilis quam recusandae natus minus cumque
        praesentium, ab cupiditate velit eum maiores, amet, sit laborum!
        Dolorem, doloremque.
      </StyledContent>
      <StyledTitle>Comments</StyledTitle>
      <Comment />
      <StyledCommentBox>
        <StyledCommentInput placeholder="add comment" />
        <SendIcon />
      </StyledCommentBox>
    </StyledBox>
  );
};

export default Post;
