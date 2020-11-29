/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import App from "next/app";
import nprogress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", () => {
  nprogress.start();
});
Router.events.on("routeChangeComplete", () => nprogress.done());
Router.events.on("routeChangeError", () => nprogress.done());

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return <Component {...pageProps} key={router.route} />;
  }
}

export default MyApp;
