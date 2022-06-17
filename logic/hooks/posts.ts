import { useQuery } from "react-query";
import { getPosts } from "../services/posts";
import { posts } from "../types";

export function usePosts(query: any) {
  return useQuery<posts, any>(["posts", query ], getPosts);
}