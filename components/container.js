export default function Container({ children }) {
  return (
    <div className="container w-3/4 sm:w-full md:w-3/4 mx-auto px-1">
      {children}
    </div>
  );
}
