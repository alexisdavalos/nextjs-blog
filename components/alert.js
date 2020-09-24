import Container from "./container";
import cn from "classnames";
import { ALERT_PATH } from "../lib/constants";

export default function Alert({ dark = true }) {
  return (
    <div
      className={cn("fixed top-0 z-50 mb-16 border-b w-full", {
        "bg-accent-7 border-accent-7 text-white": dark,
        "bg-accent-1 border-accent-2": !dark,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {dark ? (
            <>
              Coding Challenges{" "}
              <a
                href={`${ALERT_PATH}`}
                className="underline hover:text-blue-500 duration-200 transition-colors"
                target="_blank"
              >
                on GitHub
              </a>
              .
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-blue-500 duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
