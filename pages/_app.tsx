import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
