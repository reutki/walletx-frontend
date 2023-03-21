// pages/_app.js

// 1. import `NextUIProvider` component
import store from "@/store";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </NextUIProvider>
  );
}

export default MyApp;
