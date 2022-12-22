import ModalWindow from "../Modal";
import { PostAction } from "./PostAction";
import { usePostContext } from "./PostContext";
import { PostList } from "./PostList";
import { StyledButton } from "./style";

const Posts = () => {
  const { edit, clearModal, handleAction } = usePostContext();

  return (
    <div onClick={clearModal}>
      <StyledButton className="create" onClick={() => handleAction()}>
        Add Post
      </StyledButton>
      {edit && (
        <>
          <ModalWindow>
            <PostAction />
          </ModalWindow>
        </>
      )}
      <PostList />
    </div>
  );
};

export default Posts;
