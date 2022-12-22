import DeleteIcon from "../../assets/svg/DeleteIcon";
import {
  StyledBox,
  StyledContent,
  StyledEditButton,
  StyledHeader,
  StyledIconBox,
} from "./style";

type Props = {
  userId: number;
  id: number;
  title: string;
  body: string;
  handleDelete: any;
  handleAction: any;
};
const Post: React.FC<Props> = ({
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
        <DeleteIcon onClick={() => handleDelete(id)} />
        <StyledEditButton onClick={() => handleAction(id)}>
          Edit
        </StyledEditButton>
      </StyledIconBox>
    </StyledBox>
  );
};

export default Post;
