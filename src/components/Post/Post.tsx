import styled from "styled-components";
import DeleteIcon from "../../assets/svg/DeleteIcon";
import EditIcon from "../../assets/svg/EditIcon";

const StyledIconBox = styled.div`
  position: absolute;
  right: 10px;
  top: 7px;
  display: none;
  align-items: center;
  font-size: 14px;
  & svg:first-child{
    margin: 0 5px;
    cursor: pointer;
    & path{
      fill: red;
    }
  }
`
const StyledEditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cdcfd2;
  height: 25px;
  border-radius: 8px;
  width: auto;
  padding:  0 10px;
  cursor: pointer;
`
const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgb(36,37,38);
  width: 100%;
  min-height: 40px;
  border-radius: 10px;
  margin: 10px 0;
  padding-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover{
    ${StyledIconBox}{
      display: flex;
    }
  }
`;
const StyledHeader = styled.div`
  padding: 15px 3px;
  font-weight: bold;
  margin-left: 15px;
  border-bottom: 2px solid rgb(255,255,255,0.2);
  min-width: 45%;
  max-width: 90%;
  color: white;
`;
const StyledContent = styled.div`
  padding: 19px;
  width: 100%;
  color: white;
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

type Props = {
  userId: number;
  id: number;
  title: string;
  body: string;
  handleDelete: any;
  handleAction: any;
};
const Post: React.FC<Props> = ({
  userId,
  id,
  title,
  body,
  handleDelete,
  handleAction,
}): JSX.Element => {

  return (
    <StyledBox>
      <StyledHeader>{title}</StyledHeader>
      <StyledContent>{body}</StyledContent>
      <StyledIconBox>
        <DeleteIcon  onClick={() => handleDelete(id)}/>
        <StyledEditButton onClick={() => handleAction(id)}>Edit</StyledEditButton>
      </StyledIconBox>

      {/* <StyledTitle>Comments</StyledTitle>
      <Comment />
      <StyledCommentBox>
        <StyledCommentInput placeholder="add comment" />
        <SendIcon />
      </StyledCommentBox> */}
    </StyledBox>
  );
};

export default Post;
