import App from "next/app";
import React from "react";

import "../styles/normalize.css";
import "../styles/fonts.css";
import "../styles/global.css";

class KreativeSite extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <Component {...pageProps} />
    );
  }
}

export default KreativeSite;
