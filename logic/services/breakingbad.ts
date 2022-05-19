import { jsonplaceholderApi } from "../clients/jsonplaceholder";

import { GetPostsResponse, quotes } from "../types";

export const getPosts = async (context: any) => {
  const response = await jsonplaceholderApi.get<GetPostsResponse>(
    "/posts", {
      params: context.queryKey[1],
    }
  );
  console.log("response", response);
  return response.data;
};