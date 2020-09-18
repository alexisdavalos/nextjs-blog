import Avatar from "../components/avatar";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  topics,
  slug,
}) {
  return (
    <div className="max-w-m rounded overflow-hidden shadow-lg mb-10 mr-3">
      <CoverImage slug={slug} title={title} src={coverImage} hero={false} />
      <div className="flex flex-col justify-evenly">
        <div className="px-6 py-4">
          <h3 className="text-3xl mb-3 mt-3 truncate leading-snug">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <p className="text-sm leading-relaxed mb-4 text-gray-700">
            {excerpt}
          </p>
        </div>
        <div className="flex justify-content flex-col ml-8 mr-8 p-2">
          <Avatar name={author.name} picture={author.picture} date={date} />
        </div>
        <div className="px-6 pt-4 pb-2 mb-4">
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
    </div>
  );
}
