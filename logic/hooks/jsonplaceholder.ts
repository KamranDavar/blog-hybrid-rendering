import { useQuery } from "react-query";
import { getPosts } from "../services/breakingbad";
import { posts } from "../types";

export function usePosts(queries: any) {
  return useQuery<posts, any>(["posts", { queries }], getPosts);
}
