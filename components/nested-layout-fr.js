import Header from "./header-fr";
import Footer from "./footer-fr";

import localFont from "next/font/local";
const myFont = localFont({ src: "./font/BRoyaBd_0.ttf" });

export default function NestedLayout({ children }) {
	return (
		<main
			style={{ overflow: "hidden", direction: "rtl" }}
			className={myFont.className}>
			<Header />
			{children}
			<Footer />
		</main>
	);
}
