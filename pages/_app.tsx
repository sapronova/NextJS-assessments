import NextNProgress from "nextjs-progressbar";
import "../styles/main.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#FFFFFF"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      ;
      <Component {...pageProps} />
    </>
  );
}
