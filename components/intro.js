import { CMS_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <div className="flex flex-col w-full">
          <h1 className="text-6xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
            Alexis Davalos.
          </h1>
          <h3 className="text-2xl md:text-2xl font-light tracking-normal mb-6">
            Design and Programming Blog
          </h3>
        </div>
        <h4 className="text-left md:text-left text-lg mt-5 md:pl-8 w-1/2 sm:w-full">
          Statically generated thoughts using{" "}
          <a
            href="https://nextjs.org/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Next.js
          </a>{" "}
          and {CMS_NAME}.
        </h4>
      </section>
    </>
  );
}
