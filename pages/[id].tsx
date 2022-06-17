import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getPost } from "../logic/services/posts";
import { Button, List } from "antd";
import { useRouter } from "next/router";
import { getComments } from "../logic/services/comments";
import { comment } from "../logic/types";
const PostDetail: NextPage = ({
  post,
  comments,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  return (
    <>
      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>
      <List
      header="comments"
      bordered
        dataSource={comments}
        renderItem={(item: comment) => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              description={<span>{item.body}</span>}
            />
          </List.Item>
        )}
      />
      <Button
        type="link"
        onClick={() => {
          router.back();
        }}
      >
        Back
      </Button>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const post = await getPost(context.query.id);
  const comments = await getComments(context.query.id);

  return {
    props: {
      post,
      comments,
    },
  };
};

export default PostDetail;
