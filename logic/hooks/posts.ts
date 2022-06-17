import { useQuery } from "react-query";
import { getPosts, getPost } from "../services/posts";
import { posts, post } from "../types";

export function usePosts(query: any) {
  return useQuery<posts, Error>(["posts", query], getPosts);
}
export function useSinglePost(id: number) {
  return useQuery<post, Error>(["post", { id }], getPost);
}
