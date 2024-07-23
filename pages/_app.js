import "@/public/styles/globals.css";
// import "tailwindcss/tailwind.css";
// import Layout from "../components/layout";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";

export default function MyApp({ Component, pageProps }) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page)
   
	return getLayout(<Component {...pageProps} />)
  }
