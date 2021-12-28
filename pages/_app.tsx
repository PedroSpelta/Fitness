import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DataWrapper } from "../context/personalData";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataWrapper>
      <Component {...pageProps} />
    </DataWrapper>
  );
}

export default MyApp;
