import animations from "../styles/animations.module.scss";

export default function PostTitle({ children }) {
  return (
    <div
      className={`border-b-4 ${animations.hueRotate} ${animations.bottomShadow}`}
    >
      <h1 className="text-left text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 md:text-left">
        {children}
      </h1>
    </div>
  );
}
