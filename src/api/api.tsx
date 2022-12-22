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
    const result = await axios.post(`${API}/posts`, {title: title, body: body, userId: 1})
    return result?.data
  } catch (err) {
    console.error(err)
  }
}
