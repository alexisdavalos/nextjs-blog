import dynamic from "next/dynamic";
import Alert from "../components/alert";
import Meta from "../components/meta";
const Footer = dynamic(import("../components/footer"));

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer typed={false} />
    </>
  );
}
