import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DataWrapper } from "../context/personalData";
import { FoodContextWrapper } from "../context/foodContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataWrapper>
      <FoodContextWrapper>
        <Component {...pageProps} />
      </FoodContextWrapper>
    </DataWrapper>
  );
}

export default MyApp;
