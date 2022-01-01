import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DataWrapper } from "../context/personalData";
import { FoodContextWrapper } from "../context/foodContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FoodContextWrapper>
      <DataWrapper>
        <Component {...pageProps} />
      </DataWrapper>
    </FoodContextWrapper>
  );
}

export default MyApp;
