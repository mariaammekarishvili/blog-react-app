import Post from "./Post";
import { usePostContext } from "./PostContext";

export function PostList() {
  const { posts, handleAction, handleDelete } = usePostContext();

  return (
    <>
      {posts?.length &&
        posts?.map(({ id, ...item }: any) => {
          return (
            <div key={id} style={{ border: "1px solid black" }}>
              <Post
                {...item}
                id={id}
                handleDelete={handleDelete}
                handleAction={handleAction}
              />
            </div>
          );
        })}
    </>
  );
}
