import "../styles/reset.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import ReactModal from "react-modal";

export default function App({ Component, pageProps }: AppProps) {
    ReactModal.setAppElement("#__next");
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
