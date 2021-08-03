import type { AppProps } from "next/app";
import "./index.scss";

const index = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
);

export default index;
