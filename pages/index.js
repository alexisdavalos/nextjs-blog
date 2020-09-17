import dynamic from "next/dynamic";
const Container = dynamic(import("../components/container"));
const MoreStories = dynamic(import("../components/more-stories"));
const HeroPost = dynamic(import("../components/hero-post"));
const Intro = dynamic(import("../components/intro"));
const Layout = dynamic(import("../components/layout"));
import { getAllPosts } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Design and Programming Blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "topics",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
