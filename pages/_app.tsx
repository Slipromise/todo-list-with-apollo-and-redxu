import { StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "../store";


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst >
        <Component {...pageProps} />
      </StyledEngineProvider>
    </Provider>
  );
}
