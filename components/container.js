export default function Container({ children }) {
  return (
    <div className="container w-11/12 sm:w-full md:w-3/4 mx-auto">
      {children}
    </div>
  );
}
