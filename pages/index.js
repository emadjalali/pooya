import SectionTwo from "@/components/BrandingForPage/section2";
import HowItWorks from "@/components/BrandingForPage/section5";
import Image from "next/image";
import TopLine from "@/public/BrandingForPattern/section3/Untitled-2-19.svg";
import BotLine from "@/public/BrandingForPattern/section3/Untitled-2-20.svg";
import pattern from "@/public/BrandingForPattern/section4/Untitled-2-24.svg";

export default function Home() {
	return (
		<div>
			<section className=' bg-[#0e0a0a] flex justify-around'>
				<div className=' firstsection flex  h-[87vh]'>
					<div className='firstsectionHeader text-white pe-4 text-5xl sm:text-6xl md:px-0 md:text-5xl lg:text-7xl'>
						<p>Integrated</p>
						<p>Visual</p>
						<p>Identity Design</p>
					</div>
					<div className='firstsectionSubHeader text-gray-500 text-2xl sm:text-3xl md:text-2xl lg:text-4xl '>
						<p>
							in Architecture and<br></br>Constraction Industry
						</p>
					</div>
				</div>
			</section>
			<section
				className='h-[100vh] secondsection'
				style={{ position: "relative" }}>
				<SectionTwo />
			</section>
			<section
				className='bg-[#fffff] h-[100vh]'
				style={{ position: "relative" }}>
				<h2 className='text-3xl font-bold absolute right-[43%] mt-[250px]'>
					Hot, Perhaps.
				</h2>
				<Image
					src={TopLine}
					style={{
						width: "280px",
						position: "absolute",
						right: "0px",
						marginTop: "70px",
					}}
				/>
				<div
					style={{
						color: "rgb(22, 85, 124)",
						position: "absolute",
						left: "20%",
						marginTop: "400px",
					}}>
					<h2 style={{ fontSize: "27px" }}>
						Beyond a Brand Book<br></br>for Architects and<br></br>
						Architecture Offices
					</h2>
					<pre style={{ fontSize: "14px" }}>
						Authentic Brand Discovery,
						<br />
						Creation and Communications
						<br />
						(DCCapproach)
					</pre>
				</div>
				<div
					style={{
						color: "rgb(22, 85, 124)",
						position: "absolute",
						left: "40%",
						marginTop: "400px",
					}}>
					<h2 style={{ fontSize: "27px" }}>
						Place Branding for Real<br></br>Estate Developers and<br></br>
						Construction Companies
					</h2>
					<p>creating branded buildings</p>
				</div>
				<div
					style={{
						color: "rgb(22, 85, 124)",
						position: "absolute",
						right: "19%",
						marginTop: "400px",
					}}>
					<h2 style={{ fontSize: "27px" }}>
						Branded Space Creation<br></br>for Businesses
					</h2>
					<p>Experience Design</p>
				</div>
				<Image
					src={BotLine}
					style={{
						width: "500px",
						position: "absolute",
						left: "0px",
						marginTop: "38%",
					}}
				/>
			</section>
			<section className='bg-orange-500 h-[100vh]'>
				<Image src={pattern} />
			</section>
			<section className='h-[200vh]' style={{ position: "relative" }}>
				<HowItWorks className='bg-[#fffff]' />
			</section>
			<style jsx>{`
				.firstsection {
					flex-direction: column;
					justify-content: center;
				}
				.firstsectionHead {
				}
				.firstsectionSubHead {
				}
				@media screen and (min-width: 769px) {
					.firstsection {
						flex-direction: row;
						align-items: center;
					}
					.firstsectionHead {
					}
					.firstsectionSubHead {
					}

					.secondsection {
						filter: grayscale(100%);
					}
					.secondsection:hover {
						filter: unset;
					}
				}
			`}</style>
		</div>
	);
}
