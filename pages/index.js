import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import {
  headingMd,
  padding1px,
  headingLg,
  list,
  listItem,
  lightText,
} from "../styles/utils";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="headingMd">
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className="headingMd padding1px">
        <h2 className="headingLg">Blog</h2>
        <ul className={"list"}>
          {allPostsData.map(({ id, date, title }) => (
            <li className="listItem" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="lightText">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <style jsx>{lightText}</style>
      <style jsx>{headingMd}</style>
      <style jsx>{padding1px}</style>
      <style jsx>{headingLg}</style>
      <style jsx>{list}</style>
      <style jsx>{listItem}</style>
    </Layout>
  );
}
