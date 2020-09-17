export default function Container({ children }) {
  return (
    <div className="container w-3/4 sm: w-full mx-auto px-5">{children}</div>
  );
}
