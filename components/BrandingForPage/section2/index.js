import Image from "next/image";
import BigQuestion from "@/components/BrandingForPage/section2/pattern2/bigQuestion.svg";
import BrandDiscovery from "@/components/BrandingForPage/section2/pattern2/BrandDiscovery.svg";
import why from "@/components/BrandingForPage/section2/pattern2/why.svg";
import AreYou from "@/components/BrandingForPage/section2/pattern2/AreYou.svg";
import who from "@/components/BrandingForPage/section2/pattern2/who.svg";
import BrandStrategy from "@/components/BrandingForPage/section2/pattern2/BrandStrategy.svg";
import how from "@/components/BrandingForPage/section2/pattern2/how.svg";
import doYou from "@/components/BrandingForPage/section2/pattern2/doYou.svg";
import Marketing from "@/components/BrandingForPage/section2/pattern2/Marketing.svg";
import live from "@/components/BrandingForPage/section2/pattern2/live.svg";
import IntegratedBrand from "@/components/BrandingForPage/section2/pattern2/IntegratedBrand.svg";

const SectionTwo = () => {
	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				paddingTop: "56%",
				margin: "auto",
				// backgroundImage: "url('section2.jpg')",
				// backgroundSize: "cover",
			}}>
			<div
				style={{
					position: "absolute",
					top: "0%",
					width: "75%",
					margin: "auto",
					left: "50%",
					transform: "translate(-50%)",
				}}>
				<Image
					src={BigQuestion}
					alt='big question'
					style={{
						width: "25%",
						position: "relative",
						marginLeft: "36%",
						marginTop: "11%",
					}}
				/>
				<Image
					src={BrandDiscovery}
					style={{
						width: "3.3%",
						position: "absolute",
						left: "20.3%",
						marginTop: "8.5%",
					}}
				/>
				<Image
					src={why}
					style={{
						width: "24%",
						position: "absolute",
						left: "25.5%",
						marginTop: "8.5%",
					}}
				/>
				<Image
					src={AreYou}
					style={{
						width: "5%",
						position: "absolute",
						left: "51%",
						marginTop: "10.3%",
					}}
				/>
				<Image
					src={who}
					style={{
						width: "25.6%",
						position: "absolute",
						left: "30.2%",
						marginTop: "16.6%",
					}}
				/>
				<Image
					src={AreYou}
					style={{
						width: "5%",
						position: "absolute",
						left: "56.7%",
						marginTop: "18.7%",
					}}
				/>
				<Image
					src={BrandStrategy}
					style={{
						width: "12%",
						position: "absolute",
						left: "63.3%",
						marginTop: "18%",
					}}
				/>
				<Image
					src={how}
					style={{
						width: "25.6%",
						position: "absolute",
						left: "36%",
						marginTop: "25%",
					}}
				/>
				<Image
					src={doYou}
					style={{
						width: "14.7%",
						position: "absolute",
						left: "63%",
						marginTop: "26.7%",
					}}
				/>
				<Image
					src={Marketing}
					style={{
						width: "25.5%",
						position: "absolute",
						left: "36.2%",
						marginTop: "33.3%",
					}}
				/>
				<Image
					src={live}
					style={{
						width: "28%",
						position: "absolute",
						left: "35.8%",
						marginTop: "40.5%",
					}}
				/>
				<Image
					src={IntegratedBrand}
					style={{
						width: "25.5%",
						position: "absolute",
						left: "36%",
						marginTop: "48%",
					}}
				/>
			</div>
		</div>
	);
};

export default SectionTwo;
