import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getPost } from "../logic/services/posts";
import { Button } from "antd";
import { useRouter } from "next/router";
const PostDetail: NextPage = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
  return (
    <>
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
    <Button type="link" onClick={()=>{
        router.back()
    }}>Back</Button>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const post = await getPost(context.query.id);

  return {
    props: {
      post,
    },
  };
};

export default PostDetail;
