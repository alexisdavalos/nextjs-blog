import { CMS_NAME } from "../lib/constants";
import Typed from "react-typed";

export default function Intro() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <div className="flex flex-col w-full">
          <h1 className="text-6xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
            Stoic.Dev
          </h1>
          <Typed
            className="text-2l md:text-2xl tracking-normal opacity-75 mb-6 font-light"
            strings={[`Design and Programming Blog `]}
            typeSpeed={80}
            backSpeed={75}
          />
        </div>
        <h4 className="text-left md:text-left text-lg opacity-75 mt-5 md:pl-8 w-1/3 sm:w-full">
          Statically generated thoughts using{" "}
          <a
            href="https://nextjs.org/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Next.js,
          </a>{" "}
          {CMS_NAME}, and TailWind CSS
        </h4>
      </section>
    </>
  );
}
