import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "nprogress/nprogress.css";
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());
  }, []);
  return <Component {...pageProps} />
}
export default MyApp
