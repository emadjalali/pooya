import Header from "./headerC";
import Footer from "./footerC";

export default function NestedLayout({children}){
    return(
        <main style={{ overflow: "hidden" }}>
			<Header />
			{children}
			<Footer />
		</main>
    )
}