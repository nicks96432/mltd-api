import type { AppProps } from "next/app";
import "./App.scss";

const index = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default index;
