
import SectionOne from "../../components/خدمات برندینگ در صنعت ساختمان، معماری و شهرسازی/section1";
import SectionTwo from "../../components/خدمات برندینگ در صنعت ساختمان، معماری و شهرسازی/section2";
import SectionThree from "../../components/خدمات برندینگ در صنعت ساختمان، معماری و شهرسازی/section3";
import SectionFour from "../../components/خدمات برندینگ در صنعت ساختمان، معماری و شهرسازی/section4";
import Layout from '../../components/layout'
import NestedLayout from '../../components/nested-layout-fr'

export default function HomeFr() {
	return (
		<div>
			<section
				// className=' bg-[#0e0a0a] flex justify-around'
				style={{

					position: "relative",
					width: "100%",
					margin: "auto",
				}}>
				<SectionOne />
			</section>
			<section
				className=' secondsection'
				style={{
					paddingTop:"5%",
					paddingBottom:"5%",
					position: "relative",
					width: "100%",
					margin: "auto",
				}}>
				<SectionTwo />
			</section>
			<section
				// className='bg-slate-300'
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
					paddingTop:"5%",
					position: "relative",
					width: "100%",
					margin: "auto",
				}}>
				<SectionFour />
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

HomeFr.getLayout = function getLayout(page) {
	return (
	  <Layout>
		<NestedLayout>{page}</NestedLayout>
	  </Layout>
	)
  }
