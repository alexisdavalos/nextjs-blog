export default function Container({ children }) {
  return (
    <div className="container w-5/6 sm:w-full md:w-3/4 mx-auto">{children}</div>
  );
}
