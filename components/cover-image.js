import cn from "classnames";
import Link from "next/link";
import coverStyles from "../styles/cover-image.module.scss";

export default function CoverImage({ title, src, slug, hero }) {
  const image = (
    <img
      src={src ? src : `meta/og-image.png`}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div
      className={`sm:mx-0 ${
        hero ? coverStyles.coverHero : coverStyles.coverImage
      }`}
    >
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
