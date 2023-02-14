import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/globalStyles";
import { ThemeLayout } from "@/layouts/ThemeLayout";
import "@/styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeLayout>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeLayout>
  );
}
