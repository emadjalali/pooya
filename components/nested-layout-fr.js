import Header from "./header-fr";
import Footer from "./footer-fr";

export default function NestedLayout({children}){
    return(
        <main style={{ overflow: "hidden" , direction:"rtl"}}>
			<Header />
			{children}
			<Footer />
		</main>
    )
}