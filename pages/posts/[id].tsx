import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import { headingXl, lightText } from "../../styles/utils";

const Post = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>

    <article>
      <h1 className="headingXl">{postData.title}</h1>
      <div className="lightText">
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>

    <style jsx>{headingXl}</style>
    <style jsx>{lightText}</style>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // todo: should be a better way :)
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
