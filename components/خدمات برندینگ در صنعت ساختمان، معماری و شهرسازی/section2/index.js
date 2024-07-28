import Image from "next/image";
import Link from "next/link";
import pattern1 from "./colorPattern2/home-35.svg"
import pattern8 from "./colorPattern2/home-34.svg"
import pattern2 from "./colorPattern2/home-36.svg"
import pattern3 from "./colorPattern2/home-37.svg"
import pattern4 from "./colorPattern2/home-38.svg"
import pattern5 from "./colorPattern2/home-39.svg"
import pattern6 from "./colorPattern2/home-40.svg"
import pattern7 from "./colorPattern2/home-41.svg"


const SectionTwo = () => {
	return (
		<div className=''>
			<div className="container">

				<div className="patternTwo">
					<Image src={pattern2}/>
					<Link className="a" href="#"  style={{color:"#f58641"}}>سند اختصاصی راهنمای جامع برند</Link>
				</div>
				<div className="patternOne">
					<Image src={pattern1}/>
					<Link className="a" href="#" style={{color:"#868686"}}>تولید محتوای تخصصی و اختصاصی <br/>در صنعت و ساختمان سازی</Link>
				</div>
				<div className="patternTwo"  style={{textAlignLast: "justify"}}>
					<Image src={pattern8}/>
					<Link className="a" href="#"  style={{color:"#f58641"}}>اجرای صفر تا صد فرآیند برندینگ</Link>
				</div>
				<div className="patternFour" >
					<Image src={pattern4}/>
					<div style={{textAlignLast: "justify"}}>
						<Link className="a" href="#" style={{color: "#007199"}}>همکاری با سازندگان و سرمایه گذاران<br/>برای خلق پروژه‌های ماندگار</Link>
					</div>
				</div>
				
				<div className="patternSeven" >
					
				</div>

				<div className="patternThree">
					<Image src={pattern3}/>
					<div style={{textAlignLast: "justify"}}>
						<Link className="a" href="#" style={{color: "#007199", fontKerning: "none"}}>پرسش و پاسخ های تخصصی</Link>
					</div>
				</div>

				<div className="patternSeven" >
					<Image src={pattern7}/>
					<Link className="a" href="#" style={{color:"black"}}>عارضه یابی برند </Link>
				</div>

				<div className="patternSix">
					<Image src={pattern6}/>
					<div style={{textAlign:"center"}}>
						<Link className="a" href="#" style={{color:"#f58641"}}>طراحی تجربه</Link>
					</div>
				</div>
				<div className="patternFive" >
					<Image src={pattern5}/>
					<div style={{textAlignLast: "justify"}}>
						<Link className="a" href="#" style={{color: "#007199"}}>راهکارهای خلاق حس یک نگاه</Link>
					</div>
				</div>
				{/* <div className="patternSeven" >
					<Image src={pattern7}/>
					<Link className="a" href="#" style={{color:"black"}}>عارضه یابی برند </Link>
				</div> */}
			</div>
			<style jsx global>{`
				// .pageSize {
				// 	position: relative;
				// 	width: 100%;
				// 	padding-top: 167%;
				// 	margin: auto;
				// 	background-color: white;
				// }
				.container {
 					 display: grid;
					 row-gap:100px;
					
  				}
				.a{
					text-decoration: none;
					font-weight: bold;
					font-size: 20px;
				}
				img{
					margin-bottom:15px;
				}
				@media screen and (min-width: 768px) {
					// .pageSize {
					// 	padding-top: 56%;
					// }
					.container {
 					 	display: grid;
						 column-gap: 100px;
						 row-gap:100px;
  						grid-template-columns: auto auto auto;
					
  				}
				.a{font-size:10px}
			}
			@media screen and (min-width: 992px) {
				.a {font-size:15px}
			}
			`}</style>
		</div>
	);
};

export default SectionTwo;
