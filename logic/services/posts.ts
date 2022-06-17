import { jsonplaceholderApi } from "../clients/jsonplaceholder";

import { posts, post } from "../types";

export const getPosts = async (context: any) => {
  const response = await jsonplaceholderApi.get<posts>("/posts", {
    params: context.queryKey[1],
  });
  return response.data;
};
export const getPost = async (id: any) => {
  const response = await jsonplaceholderApi.get<post>(`/posts/${id}`);
  return response.data;
};
