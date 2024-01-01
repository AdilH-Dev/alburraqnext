import "@/styles/global.css";
import "animate.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useEffect } from "react";
import { useRouter } from "next/router";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js/dist/wow.min.js") : null;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (WOW) {
      new WOW().init();
    }
  }, []);

  const { pathname } = router;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey="6LeoeUwmAAAAAI85GzA_TZSq7ZykQNROtkyOT6KA"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </GoogleReCaptchaProvider>
    </>
  );
}
