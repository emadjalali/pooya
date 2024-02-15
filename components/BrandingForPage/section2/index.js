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
		<div>
			<div
				className='pageSize'
				style={
					{
						// position: "relative",
						// width: "100%",
						// paddingTop: "56%",
						// margin: "auto",
						// backgroundImage: "url('section2.jpg')",
						// backgroundSize: "cover",
					}
				}>
				<div
					className='mycontainer'
					style={{
						position: "absolute",
						top: "-3%",
						// width: "75%",
						margin: "auto",
						left: "50%",
						transform: "translate(-50%)",
					}}>
					<div className='bigQ'>
						<Image
							src={BigQuestion}
							alt='big question'

							// style={{
							// 	width: "25%",
							// 	position: "relative",
							// 	marginLeft: "36%",
							// 	marginTop: "11%",
							// }}
						/>
					</div>
					<div className='brandD'>
						<Image
							src={BrandDiscovery}
							// style={{
							// 	width: "3.3%",
							// 	position: "absolute",
							// 	left: "20.3%",
							// 	marginTop: "8.5%",
							// }}
						/>
					</div>
					<div className='bd'>
						<Image
							src={Marketing}
							// style={{
							// 	width: "25.5%",
							// 	position: "absolute",
							// 	left: "36.2%",
							// 	marginTop: "33.3%",
							// }}
						/>
					</div>
					<div className='why'>
						<Image
							src={why}
							// style={{
							// 	width: "24%",
							// 	position: "absolute",
							// 	left: "25.5%",
							// 	marginTop: "8.5%",
							// }}
						/>
					</div>
					<div className='areU'>
						<Image
							src={AreYou}
							// style={{
							// 	width: "5%",
							// 	position: "absolute",
							// 	left: "51%",
							// 	marginTop: "10.3%",
							// }}
						/>
					</div>
					<div className='bsbi'>
						<Image
							src={Marketing}
							// style={{
							// 	width: "25.5%",
							// 	position: "absolute",
							// 	left: "36.2%",
							// 	marginTop: "33.3%",
							// }}
						/>
					</div>
					<div className='who'>
						<Image
							src={who}

							// style={{
							// 	width: "25.6%",
							// 	position: "absolute",
							// 	left: "30.2%",
							// 	marginTop: "16.6%",
							// }}
						/>
					</div>
					<div className='areU2'>
						<Image
							src={AreYou}
							className='areU2'
							// style={{
							// 	width: "5%",
							// 	position: "absolute",
							// 	left: "56.7%",
							// 	marginTop: "18.7%",
							// }}
						/>
					</div>
					<div className='brandS'>
						<Image
							src={BrandStrategy}
							// style={{
							// 	width: "12%",
							// 	position: "absolute",
							// 	left: "63.3%",
							// 	marginTop: "18%",
							// }}
						/>
					</div>
					<div className='how'>
						<Image
							src={how}
							// style={{
							// 	width: "25.6%",
							// 	position: "absolute",
							// 	left: "36%",
							// 	marginTop: "25%",
							// }}
						/>
					</div>
					<div className='doU'>
						<Image
							src={doYou}
							// style={{
							// 	width: "14.7%",
							// 	position: "absolute",
							// 	left: "63%",
							// 	marginTop: "26.7%",
							// }}
						/>
					</div>
					<div className='marketing'>
						<Image
							src={Marketing}
							// style={{
							// 	width: "25.5%",
							// 	position: "absolute",
							// 	left: "36.2%",
							// 	marginTop: "33.3%",
							// }}
						/>
					</div>
					<div className='liveit'>
						<Image
							src={live}
							// style={{
							// 	width: "28%",
							// 	position: "absolute",
							// 	left: "35.8%",
							// 	marginTop: "40.5%",
							// }}
						/>
					</div>
					<div className='integratedB'>
						<Image
							src={IntegratedBrand}
							// style={{
							// 	width: "25.5%",
							// 	position: "absolute",
							// 	left: "36%",
							// 	marginTop: "48%",
							// }}
						/>
					</div>
				</div>
			</div>
			<style jsx>{`
				.pageSize {
					position: relative;
					width: 100%;
					padding-top: 167%;
					margin: auto;
					background-color: white;
				}
				.mycontainer {
					width: 150%;
				}
				.bigQ {
					width: 25%;
					min-width: 160px;
					position: relative;
					margin: 0 auto;

					margin-top: 15%;
				}
				.brandD {
					width: 3.3%;

					position: absolute;
					margin-left: 20.3%;
					margin-top: 8.5%;
					display: none;
				}

				.bd {
					width: 24%;
					position: absolute;
					margin-left: 25.5%;
					margin-top: 21.5%;
				}
				.why {
					width: 24%;
					position: absolute;
					margin-left: 25.5%;
					margin-top: 23.5%;
				}

				.areU {
					width: 5%;
					position: absolute;
					margin-left: 51%;
					margin-top: 25.3%;
				}
				.bsbi {
					width: 24%;
					position: absolute;
					margin-left: 30.2%;
					margin-top: 31.6%;
				}
				.who {
					width: 25.6%;
					position: absolute;
					margin-left: 30.2%;
					margin-top: 33.6%;
				}
				.areU2 {
					width: 5%;
					position: absolute;
					margin-left: 56.7%;
					margin-top: 35.7%;
				}
				.brandS {
					width: 12%;
					position: absolute;
					margin-left: 63.3%;
					margin-top: 35%;
					display: none;
				}
				.how {
					width: 25.6%;
					position: absolute;
					margin-left: 36%;
					margin-top: 44%;
				}
				.doU {
					width: 14.7%;
					position: absolute;
					margin-left: 63%;
					margin-top: 45.7%;
				}
				.marketing {
					width: 25.5%;
					position: absolute;
					margin-left: 36.2%;
					margin-top: 42%;
				}
				.liveit {
					width: 28%;
					position: absolute;
					margin-left: 35.8%;
					margin-top: 65.5%;
				}
				.integratedB {
					width: 25.5%;
					position: absolute;
					margin-left: 36%;
					margin-top: 73%;
				}

				@media screen and (min-width: 768px) {
					.pageSize {
						padding-top: 56%;
					}
					.mycontainer {
						width: 75%;
					}
					.bigQ {
						width: 25%;
						position: relative;
						margin-left: 36%;
						margin-top: 11%;
					}
					.brandD {
						width: 3.3%;
						position: absolute;
						margin-left: 20.3%;
						margin-top: 8.5%;
						display: block;
					}
					.bd {
						display: none;
					}
					.why {
						width: 24%;
						position: absolute;
						margin-left: 25.5%;
						margin-top: 8.5%;
					}
					.areU {
						width: 5%;
						position: absolute;
						margin-left: 51%;
						margin-top: 10.3%;
					}
					.bsbi {
						display: none;
					}
					.who {
						width: 25.6%;
						position: absolute;
						margin-left: 30.2%;
						margin-top: 16.6%;
					}
					.areU2 {
						width: 5%;
						position: absolute;
						margin-left: 56.7%;
						margin-top: 18.7%;
					}
					.brandS {
						width: 12%;
						position: absolute;
						margin-left: 63.3%;
						margin-top: 18%;
					}
					.how {
						width: 25.6%;
						position: absolute;
						margin-left: 36%;
						margin-top: 25%;
					}
					.doU {
						width: 14.7%;
						position: absolute;
						margin-left: 63%;
						margin-top: 26.7%;
					}
					.marketing {
						width: 25.5%;
						position: absolute;
						margin-left: 36.2%;
						margin-top: 33.3%;
					}
					.liveit {
						width: 28%;
						position: absolute;
						margin-left: 35.8%;
						margin-top: 40.5%;
					}
					.integratedB {
						width: 25.5%;
						position: absolute;
						margin-left: 36%;
						margin-top: 48%;
					}
				}
			`}</style>
		</div>
	);
};

export default SectionTwo;
