import { jsonplaceholderApi } from "../clients/jsonplaceholder";

import { comment } from "../types";

export const getComments = async (id: any) => {
  const response = await jsonplaceholderApi.get<comment>(
    `/posts/${id}/comments`
  );
  return response.data;
};
