import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, src, slug, hero }) {
  const image = (
    <img
      src={src ? src : `meta/og-image.png`}
      alt={`Cover Image for ${title}`}
      className={cn(`shadow-small ${hero ? "" : "min-h-315 object-cover"}`, {
        "hover:shadow-medium transition-shadow duration-200 w-full": slug,
      })}
    />
  );
  return (
    <div className={`sm:mx-0`}>
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
