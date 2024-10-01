import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get method
export const getPost = () => {
  return api.get("/posts");
};

// delete method
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// post method
export const postData = (post) => {
  return api.post("/posts", post);
};

// put
export const updateData = (id, post) => {
  //naya post hai jo hmey update krna hai
  return api.put(`/posts/${id}`, post);
};
