import Header from "./header";
// import Footer from "./footerC";
const Layout = ({ children }) => {
	return (
		<main style={{ overflow: "hidden" }}>
			<Header />
			{children}
			{/* <Footer /> */}
		</main>
	);
};

export default Layout;
