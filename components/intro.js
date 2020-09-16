import { CMS_NAME } from "../lib/constants";
import Typed from "react-typed";
import introStyles from "../styles/intro.module.scss";

export default function Intro() {
  return (
    <div
      className={`border-b-4 ${introStyles.hueRotate} ${introStyles.bottomShadow}`}
    >
      <section className="flex-row md:flex-row flex items-center align-middle md:justify-between mt-16 mb-16 md:mb-12">
        <div className="flex flex-col w-1/2">
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
        <h4 className="text-left text-lg md:text-xl sm:text-base opacity-75 md:pl-8 md:w-1/2 sm:w-1/2">
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
    </div>
  );
}
