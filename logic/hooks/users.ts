import { useQuery } from "react-query";
import { getUsers } from "../services/users";
import { users } from "../types";

export function useUsers() {
  return useQuery<users, any>(["users" ], getUsers);
}