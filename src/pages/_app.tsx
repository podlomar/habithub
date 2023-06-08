
import React from "react";
import { AppProps } from "next/app";
import '../global.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Component {...pageProps} />
  );
};

export default App;
