import Link from "next/link";
import { CMS_NAME } from "../lib/constants";
import Typed from "react-typed";
import animations from "../styles/animations.module.scss";

export default function Intro() {
  return (
    <div
      className={`border-b-4 ${animations.hueRotate} ${animations.bottomShadow}`}
    >
      <section className="flex-row md:flex-row flex items-center align-middle justify-evenly mt-16 mb-4 md:mb-12">
        <div className="flex flex-col w-full sm:w-2/3">
          <Link href="/">
            <h1 className="hover:underline cursor-pointer text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
              Stoic.Dev
            </h1>
          </Link>
          <Typed
            className="text-2l md:text-2xl tracking-normal opacity-75 mb-6 font-light"
            strings={[`Design and Programming Blog `]}
            typeSpeed={80}
            backSpeed={75}
          />
        </div>
        <h4 className="w-1/3 text-left text-xs opacity-75 hidden sm:block md:pl-8">
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
