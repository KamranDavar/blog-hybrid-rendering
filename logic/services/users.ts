import { jsonplaceholderApi } from "../clients/jsonplaceholder";

import { users } from "../types";

export const getUsers = async (context: any) => {
  const response = await jsonplaceholderApi.get<users>("/users", {
    params: context.queryKey[1],
  });
  return response.data;
};
