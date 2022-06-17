import { jsonplaceholderApi } from "../clients/jsonplaceholder";

import { posts } from "../types";

export const getPosts = async (context: any) => {
  const response = await jsonplaceholderApi.get<posts>(
    "/posts", {
      params: context.queryKey[1],
    }
  );
  return response.data;
};