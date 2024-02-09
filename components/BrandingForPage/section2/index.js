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
		<div style={{ position: "relative" }}>
			<Image
				src={BigQuestion}
				alt='big question'
				style={{
					width: "26%",
					position: "relative",
					margin: "auto",
					marginTop: "10%",
				}}
			/>
			<Image
				src={BrandDiscovery}
				style={{
					width: "3.5%",
					position: "absolute",
					left: "21%",
					marginTop: "10%",
				}}
			/>
			<Image
				src={why}
				style={{
					width: "25%",
					position: "absolute",
					left: "26.5%",
					marginTop: "10%",
				}}
			/>
			<Image
				src={AreYou}
				style={{
					width: "5%",
					position: "absolute",
					left: "53%",
					marginTop: "12%",
				}}
			/>
			<Image
				src={who}
				style={{
					width: "25%",
					position: "absolute",
					left: "31%",
					marginTop: "19%",
				}}
			/>
			<Image
				src={AreYou}
				style={{
					width: "5%",
					position: "absolute",
					left: "57%",
					marginTop: "21%",
				}}
			/>
			<Image
				src={BrandStrategy}
				style={{
					width: "12%",
					position: "absolute",
					left: "64%",
					marginTop: "20%",
				}}
			/>
			<Image
				src={how}
				style={{
					width: "25%",
					position: "absolute",
					left: "37%",
					marginTop: "28%",
				}}
			/>
			<Image
				src={doYou}
				style={{
					width: "15%",
					position: "absolute",
					left: "64%",
					marginTop: "30%",
				}}
			/>
			<Image
				src={Marketing}
				style={{
					width: "25%",
					position: "absolute",
					left: "37%",
					marginTop: "36%",
				}}
			/>
			<Image
				src={live}
				style={{
					width: "25%",
					position: "absolute",
					left: "37%",
					marginTop: "44%",
				}}
			/>
			<Image
				src={IntegratedBrand}
				style={{
					width: "23%",
					position: "absolute",
					left: "37%",
					marginTop: "51%",
				}}
			/>
		</div>
	);
};

export default SectionTwo;
