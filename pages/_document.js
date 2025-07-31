import { Html, Head, Main, NextScript } from "next/document";
import { GeistSans } from "next/font/google";

const geist = GeistSans({ subsets: ["latin"] });

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={geist.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
