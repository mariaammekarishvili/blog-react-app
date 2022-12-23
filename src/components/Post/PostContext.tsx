import { useContext, createContext, useState, useEffect } from "react";
import { PostType } from "../../types/types";
import {
  createPostRequest,
  deletePostRequest,
  getPostsRequest,
  updatePostRequest,
} from "../../api/api";

const PostContext = createContext<any>({});

function PostStore({ children }: any) {
  const [posts, setPosts] = useState<any[]>([]);
  const [edit, setEdit] = useState<any>();
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    const data = await getPostsRequest();
    setPosts(data);
  };

  const handleDelete = async (id: number) => {
    const response = await deletePostRequest(id);
    if (response.success) {
      setPosts(posts?.filter((post) => post?.id !== id));
    } else {
      alert("Oops something wrong");
    }
  };

  const handleAction = (id: number) => {
    setEdit(id ? posts?.find((post) => post?.id === id) : { id: Date.now() });
  };

  const clearModal = () => {
    if (edit) {
      setEdit(false);
    }
  };

  const handleUpdate = async (post: PostType) => {
    setLoading(true);
    const response = await updatePostRequest(post);
    if (response.success) {
      setPosts(
        posts?.map((item) =>
          item.id === post.id ? (item = { ...post }) : item
        )
      );
      clearModal();
    } else {
      alert("Oops something wrong");
    }
    setLoading(false);
  };

  const handleCreate = async (post: PostType) => {
    setLoading(true);
    const response = await createPostRequest(post.title, post.body);
    if (response.success) {
      setPosts((prevState) => [...prevState, post]);
      clearModal();
    } else {
      alert("Oops something wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        edit,
        loading,
        handleDelete,
        handleAction,
        clearModal,
        handleUpdate,
        handleCreate,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

const usePostContext = () => useContext(PostContext);

export { usePostContext, PostStore };
