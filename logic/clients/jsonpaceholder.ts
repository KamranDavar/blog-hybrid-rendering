import axios from "axios";

export const breakingbadApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
