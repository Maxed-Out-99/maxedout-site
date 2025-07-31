import "@/styles/globals.css";
import { GeistSans } from "next/font/google";

const geist = GeistSans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={geist.className}>
      <Component {...pageProps} />
    </main>
  );
}
