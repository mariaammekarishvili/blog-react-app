import axios from "axios";
import { PostType } from "../types/Types";

const API = "https://jsonplaceholder.typicode.com";

export const getPostsRequest = async () => {
  try {
    const result = await axios.get(`${API}/posts`);
    return result?.data;
  } catch (err) {
    console.error(err);
  }
};

export const createPostRequest = async (title: string, body: string) => {
  try {
    const result = await axios.post(`${API}/posts`, {
      title: title,
      body: body,
      userId: 1,
    });
    const data = result?.data;
    return {
      data,
      success: true,
    };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

export const updatePostRequest = async (post: PostType) => {
  try {
    const result = await axios.put(`${API}/posts/${post.id}`, post);
    const data = result?.data;
    return {
      data,
      success: true,
    };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

export const deletePostRequest = async (postId: number) => {
  try {
    const result = await axios.delete(`${API}/posts/${postId}`);
    const data = result?.data;
    return {
      data,
      success: true,
    };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};
