import "@/public/styles/globals.css";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import { ReusableProvider } from "reusable";
import Header from "@/component/header";
import Footer from "@/component/footer";

export default function App({ Component, pageProps }) {
  return (
    <ReusableProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ReusableProvider>
  );
}
