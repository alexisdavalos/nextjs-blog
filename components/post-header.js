import Avatar from "../components/avatar";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <p className="text-gray-600 text-xl mb-3 hidden md:block ">Written By:</p>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} date={date} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} hero />
      </div>
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-600 text-xl mb-3 block md:hidden">
          Written By:
        </p>
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} date={date} />
        </div>
      </div>
    </>
  );
}
