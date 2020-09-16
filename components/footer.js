import { useRef, useEffect, useState } from "react";
import Container from "./container";
import { SOURCE_PATH } from "../lib/constants";
import Typed from "react-typed";

export default function Footer({ typedState }) {
  const [typed, setTyped] = useState(typedState);
  useEffect(() => {
    setTyped(true);
  }, []);
  return (
    <>
      <footer className="bg-accent-1 border-t border-accent-2">
        <Container>
          <div className="py-16 flex flex-col lg:flex-row items-center">
            <Typed
              className="text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"
              strings={[
                `Statically Generated with Next.js.`,
                `Artistically defined by Alexis Davalos.`,
              ]}
              typeSpeed={60}
              backSpeed={75}
              stopped={typed}
            />
            <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
              <a
                href="https://github.com/alexisdavalos"
                className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                target="_blank"
              >
                Learn About Me
              </a>
              <a
                href={`${SOURCE_PATH}`}
                className="mx-3 font-bold hover:underline"
                target="_blank"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </Container>
      </footer>
      <footer className="bg-black border-t border-accent-2">
        <div className="py-12 flex items-center justify-center text-center flex-col">
          <img
            className="w-16 md:w-16 lg:w-32 color:black"
            src="/favicons/android-chrome-512x512.png"
          ></img>
          <p className="mb-10 mt-10 text-white">
            Built by{" "}
            <a
              className="underline font-bold"
              href="https://github.com/alexisdavalos"
              target="_blank"
            >
              Alexis Davalos
            </a>
            . The source code is licensed under open source{" "}
            <a
              className="underline font-bold"
              href="http://opensource.org/licenses/mit-license.php"
              target="_blank"
            >
              MIT
            </a>{" "}
            License.{" "}
          </p>
        </div>
      </footer>
    </>
  );
}
