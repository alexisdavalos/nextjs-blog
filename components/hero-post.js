import dynamic from "next/dynamic";

const Avatar = dynamic(import("../components/avatar"));
const DateFormatter = dynamic(import("../components/date-formatter"));
const Link = dynamic(import("next/link"));
const CoverImage = dynamic(() => import("../components/cover-image"), {
  loading: () => (
    <p className="w-full min-h-315 flex justify-content ">Loading...</p>
  ),
});

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-10 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} hero />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-8 lg:col-gap-8 mb-16 md:mb-18">
        <div className="mx-5">
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="mx-5 mb-10 text-sm leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} date={date} />
        </div>
      </div>
    </section>
  );
}
