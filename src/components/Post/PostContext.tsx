import { useContext, createContext, useState, useEffect } from "react";
import { getPosts } from "../../API/API";

const PostContext = createContext<any>({});

function PostStore({ children }: any) {
  const [posts, setPosts] = useState<any[]>([]);
  const [edit, setEdit] = useState<any>();

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handleDelete = (id: number) =>
    setPosts(posts?.filter((post) => post?.id !== id));

  const handleAction = (id: number) => {
    setEdit(id ? posts?.find((post) => post?.id === id) : { id: Date.now() });
  };

  const clearModal = () => {
    if (edit) {
      setEdit(false);
    }
  };

  const handleUpdate = (post: any) => {
    setPosts(
      posts?.map((item) => (item.id === post.id ? (item = { ...post }) : item))
    );
    clearModal();
  };

  const handleCreate = (post: any) => {
    setPosts((prevState) => [...prevState, post]);
    clearModal();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        edit,
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
