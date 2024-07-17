import "@/public/styles/globals.css";
// import "tailwindcss/tailwind.css";
import Layout from "./Layout";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
