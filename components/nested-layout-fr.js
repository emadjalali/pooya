import Header from "./header-fr";
import Footer from "./footerC";

export default function NestedLayout({children}){
    return(
        <main style={{ overflow: "hidden" , direction:"rtl"}}>
			<Header />
			{children}
			<Footer />
		</main>
    )
}