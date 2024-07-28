
import SectionOne from "../../components/خدمات برندینگ در صنعت ساختمان، معماری و شهرسازی/section1";
import SectionTwo from "../../components/خدمات برندینگ در صنعت ساختمان، معماری و شهرسازی/section2";
import SectionThree from "../../components/خدمات برندینگ در صنعت ساختمان، معماری و شهرسازی/section3";
import SectionFour from "../../components/خدمات برندینگ در صنعت ساختمان، معماری و شهرسازی/section4";
import Layout from '../../components/Layout'
import NestedLayout from '../../components/nested-layout-fr'

export default function HomeFr() {
	return (
		<div style={{fontFamily:"iranYekanRegularNum"}}>
			<section
				id="sectionOne"
				// className=' bg-[#0e0a0a] flex justify-around'
				style={{

					position: "relative",
					width: "100%",
					margin: "auto",
				}}>
				<SectionOne />
			</section>
			<section
				className=' secondSection'
				// style={{
				// 	paddingTop:"125%",
				// 	paddingBottom:"5%",
				// 	position: "relative",
				// 	width: "100%",
				// 	margin: "auto",
				// }}
				>
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
			<div className="backToUp">
				<a style={{color:"#f89b61" , textDecoration:"none" , fontWeight:"900" , fontSize:"18px" , fontFamily:"fantasy"}} href="#sectionOne">رفتن به بالا</a>
			</div>
			<style jsx>{`
				.firstsection {
					flex-direction: column;
					justify-content: center;
				}
				.firstsectionHead {
				}
				.firstsectionSubHead {
				}
				.secondSection{
					display: ruby-text;
					padding-top:125%;
					padding-bottom:5%;
					position: relative;
					width: 100%;
					margin: auto;
				}
				.backToUp{
					margin: 35px 0px 35px 0px;
    				text-align: center;
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
					.secondSection{
						padding-top:5%;
						display: block;
					}
					.backToUp{display:none;}
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
