import Container from "./container";
import cn from "classnames";
import { ALERT_PATH } from "../lib/constants";

export default function Alert({ dark = true }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": dark,
        "bg-accent-1 border-accent-2": !dark,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {dark ? (
            <>
              Checkout my repository of coding challenges{" "}
              <a
                href={`${ALERT_PATH}`}
                className="underline hover:text-success duration-200 transition-colors"
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
                className="underline hover:text-success duration-200 transition-colors"
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
