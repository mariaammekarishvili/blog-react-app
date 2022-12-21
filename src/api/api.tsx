import axios from "axios";

export const getPosts = async () => {
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return result?.data;
  } catch (err) {
    console.error(err);
  }
};
