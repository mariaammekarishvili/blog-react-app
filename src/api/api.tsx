import axios from "axios";
import { stringify } from "querystring";

const API = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
  try {
    const result = await axios.get(`${API}/posts`);
    return result?.data;
  } catch (err) {
    console.error(err);
  }
};

export const createPost = async (title: string, body: string) => {
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

export const updatePost = async (post: any) => {
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

export const deletePost = async (postId: number) => {
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
