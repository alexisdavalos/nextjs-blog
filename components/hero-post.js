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
  topics,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-4 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} hero />
        <div className="mt-4 hidden sm:block md:block">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #latest
          </span>
          {topics.map((topic) => (
            <span
              key={Math.random()}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{topic}
            </span>
          ))}
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-8 lg:col-gap-8 mb-16 md:mb-18">
        <div className="mx-5">
          <h3 className="mb-4 mt-8 md:mt-0 text-xl sm:text-2xl md:text-3xl lg:text-6xl leading-tight">
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
