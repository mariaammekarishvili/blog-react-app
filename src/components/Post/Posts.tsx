import { ModalWindow } from "../Modal/ModalWindow";
import { PostAction } from "./PostAction";
import { usePostContext } from "./PostContext";
import { PostList } from "./PostList";

const Posts = () => {
  const { edit, clearModal, handleAction } = usePostContext();

  return (
    <div onClick={clearModal}>
      <button onClick={() => handleAction()}>Add Post</button>
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
}

export default Posts;