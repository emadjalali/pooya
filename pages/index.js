import SectionTwo from "@/components/BrandingForPage/section2";
import SectionThree from "@/components/BrandingForPage/section3";
import SectionFour from "@/components/BrandingForPage/section4";
import HowItWorks from "@/components/BrandingForPage/section5";
import Image from "next/image";

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
				className=' secondsection'
				style={{
					position: "relative",
					width: "100%",
					margin: "auto",
				}}>
				<SectionTwo />
			</section>
			<section
				className='bg-[#fffff]'
				style={{
					position: "relative",
					width: "100%",
					margin: "auto",
				}}>
				<SectionThree />
			</section>
			<section
				// className='bg-orange-500 h-[100vh]'
				style={{
					position: "relative",
					width: "100%",
					margin: "auto",
				}}>
				{/* <Image src={pattern} /> */}
				<SectionFour />
			</section>
			<section
				// className='h-[200vh]'
				style={{
					position: "relative",
					width: "100%",
					margin: "auto",
				}}>
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
				@media screen and (min-width: 768px) {
					.firstsection {
						flex-direction: row;
						align-items: center;
					}
					.firstsectionHead {
					}
					.firstsectionSubHead {
					}
				}
			`}</style>
		</div>
	);
}
