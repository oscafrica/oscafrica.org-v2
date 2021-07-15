import { useEffect } from "react";
import nprogress from "nprogress";
import Router, { useRouter } from "next/router";
import "../styles/styles.css";
import { initGA, logPageView } from "../utils/analytics";
import "tailwindcss/tailwind.css";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", () => {
  nprogress.start();
});
Router.events.on("routeChangeComplete", () => nprogress.done());
Router.events.on("routeChangeError", () => nprogress.done());

declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

const MyApp = (props: any) => {
  const { pathname } = useRouter();
  const { Component, pageProps, router } = props;

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      console.log("Iam", process.env.GOOGLE_ANALYTICS);
      initGA();
      window.GA_INITIALIZED = true;
    }
  }, []);

  useEffect(() => {
    logPageView();
  }, [pathname]);

  return <Component {...pageProps} key={router.route} />;
};

export default MyApp;
