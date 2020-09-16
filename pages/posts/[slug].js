import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
const PostBody = dynamic(import("../../components/post-body"));
const MoreStories = dynamic(import("../../components/more-stories"));

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | Stoic.Dev Blog</title>
                <meta property="og:image" content={post.ogImage.url} />
                <link
                  rel="stylesheet"
                  href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/default.min.css"
                ></link>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            {morePosts ? (
              <MoreStories posts={morePosts} />
            ) : (
              <div>Loading...</div>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "topics",
    "coverImage",
    "excerpt",
  ]);

  const curPost = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "topics",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const otherPosts = allPosts.filter((post) => post.title !== curPost.title);

  const content = await markdownToHtml(curPost.content || "");

  return {
    props: {
      post: {
        ...curPost,
        content,
      },
      morePosts: [...otherPosts],
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
