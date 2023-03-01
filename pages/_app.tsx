import "../styles/globals.css";
import type { AppProps } from "next/app";
import WPApolloProvider from "../graphql/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WPApolloProvider>
      <Component {...pageProps} />
    </WPApolloProvider>
  );
}

export default MyApp;
