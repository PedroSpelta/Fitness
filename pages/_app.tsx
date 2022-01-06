import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DataWrapper } from "../context/personalData";
import { FoodContextWrapper } from "../context/foodContext";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <FoodContextWrapper>
        <DataWrapper>
          <Component {...pageProps} />
        </DataWrapper>
      </FoodContextWrapper>
    </SessionProvider>
  );
}

export default MyApp;
