import Image from "next/image";
import Link from "next/link";
import pattern1 from "./blackPattern2/home.png";
import pattern2 from "./blackPattern2/home2.png";
import pattern3 from "./blackPattern2/home3.png";
import pattern4 from "./blackPattern2/home4.png";
import pattern5 from "./blackPattern2/home5.png";
import pattern6 from "./blackPattern2/home6.png";
import pattern7 from "./blackPattern2/home7.png";
import pattern8 from "./blackPattern2/home8.png";

const SectionTwo = () => {
	return (
		<div className=''>
			<div className='containerD'>
				<div className='patternTwo'>
					<Image src={pattern3} />
					<Link className='a' href='#' style={{ color: "black" }}>
						سند اختصاصی راهنمای جامع برند
					</Link>
				</div>
				<div className='patternOne'>
					<Image src={pattern2} />
					<div>
						{/* <Link className='a' href='#' style={{ color: "black" }}>
							تولید محتوای تخصصی و اختصاصی <br />
							<span className="lineSpace">در صنعت و ساختمان سازی</span>
						</Link> */}
						<Link className="a" href={{}} style={{ color: "black" , display:"block" , textAlignLast:"justify"}}>تولید محتوای تخصصی و اختصاصی</Link>
						<Link className="a" href={{}} style={{ color: "black" }}>در صنعت و ساختمان سازی</Link>
					</div>
				</div>
				<div
					className='patternTwo'
					style={{ justifySelf: "end", textAlignLast: "justify" }}>
					<Image src={pattern1} />
					<span style={{ textAlign: "justify" }}>
						<Link className='a' href='#' style={{ color: "black" }}>
							اجرای صفر تا صد فرآیند برندینگ
						</Link>
					</span>
				</div>
				<div className='patternFour'>
					<Image src={pattern5} />
					<div style={{ textAlignLast: "justify" }}>
						<Link className='a' href='#' style={{ color: "black" }}>
							<span style={{}}>همکاری با سازندگان و سرمایه گذاران</span>
							<br />
							برای خلق پروژه‌های ماندگار
						</Link>
					</div>
				</div>

				<div className='patternSeven'></div>

				<div
					className='patternThree'
					style={{ justifySelf: "end", textAlignLast: "justify" }}>
					<Image src={pattern4} />
					<div style={{ textAlignLast: "justify" }}>
						<Link
							className='a'
							href='#'
							style={{ color: "black", fontKerning: "none" }}>
							پرسش و پاسخ های تخصصی
						</Link>
					</div>
				</div>

				<div className='patternSeven'>
					<Image src={pattern8}/>
					<Link className='a' href='#' style={{ color: "black" }}>
						عارضه یابی برند{" "}
					</Link>
				</div>

				<div className='patternSix' style={{justifySelf:"center"}}>
					<Image src={pattern7} />
					<div style={{ textAlign: "center" }}>
						<Link className='a' href='#' style={{ color: "black" }}>
							طراحی تجربه
						</Link>
					</div>
				</div>
				<div
					className='patternFive'
					style={{ justifySelf: "end", textAlignLast: "justify" }}>
					<Image src={pattern6} />
					<div style={{ textAlignLast: "justify" }}>
						<Link className='a' href='#' style={{ color: "black" }}>
							راهکارهای خلاق حس یک نگاه
						</Link>
					</div>
				</div>
				{/* <div className="patternSeven" >
					<Image src={pattern7}/>
					<Link className="a" href="#" style={{color:"black"}}>عارضه یابی برند </Link>
				</div> */}
			</div>
			<div className='containerM'>
				<div className='pattern'>
					<Image src={pattern1} />
					<span style={{ textAlignLast: "justify" }}>
						<Link className='a' href='#' style={{ color: "black" }}>
							اجرای صفر تا صد فرآیند برندینگ
						</Link>
					</span>
				</div>
				<div className='pattern'>
					<Image src={pattern2} />
					<div>
						{/* <Link className='a' href='#' style={{ color: "black" }}>
							تولید محتوای تخصصی و اختصاصی <br />
							<span className="lineSpace">در صنعت و ساختمان سازی</span>
						</Link> */}
						<Link className="a" href={{}} style={{ color: "black" , display:"block" , textAlignLast:"justify"}}>تولید محتوای تخصصی و اختصاصی</Link>
						<Link className="a" href={{}} style={{ color: "black" }}>در صنعت و ساختمان سازی</Link>
					</div>
				</div>
				<div className='pattern' style={{justifySelf:"baseline"}}>
					<Image src={pattern4} />
					<div style={{ textAlignLast: "justify" }}>
						<Link
							className='a'
							href='#'
							style={{ color: "black", fontKerning: "none" }}>
							پرسش و پاسخ های تخصصی
						</Link>
					</div>
				</div>
				<div className='pattern'>
					<Image src={pattern3} />
					<Link className='a' href='#' style={{ color: "black" }}>
						سند اختصاصی راهنمای جامع برند
					</Link>
				</div>

				<div className='pattern' style={{justifySelf:"baseline"}}>
					<Image src={pattern6} />
					<div style={{ textAlignLast: "justify" }}>
						<Link className='a' href='#' style={{ color: "black" }}>
							راهکارهای خلاق حس یک نگاه
						</Link>
					</div>
				</div>

				<div className='pattern'>
					<Image src={pattern7} />
					<div style={{ textAlign: "center" }}>
						<Link className='a' href='#' style={{ color: "black" }}>
							طراحی تجربه
						</Link>
					</div>
				</div>

				<div className='pattern' style={{ textAlign: "center" }}>
					<Image src={pattern8}/>
					<Link className='a' href='#' style={{ color: "black" }}>
						عارضه یابی برند{" "}
					</Link>
				</div>

				<div className='pattern'>
					<Image src={pattern5} />
					<div style={{ textAlignLast: "justify" }}>
						<Link className='a' href='#' style={{ color: "black" }}>
							<span style={{}}>همکاری با سازندگان و سرمایه گذاران</span>
							<br />
							برای خلق پروژه‌های ماندگار
						</Link>
					</div>
				</div>
			</div>
			<style jsx global>{`
			.pattern{
				width:85%
			}
			.containerD {
					display: none;
				}
				.containerM {
					display: grid;
					row-gap: 100px;
					white-space: nowrap;
					padding-right: 20px; 
				}
				.a {
					text-decoration: none;
					font-weight: bold;
					font-size: 21px;
				}
				img {
					margin-bottom: 15px;
				}
				@media screen and (min-width: 320px) {
					.a{
					font-size:24px
					}
				}
			@media screen and (min-width: 390px) {
				.pattern{
					width:85%
				}
				.a{
					font-size:30px
				}
			}

				@media screen and (min-width: 768px) {
					// .pageSize {
					// 	padding-top: 56%;
					// }
					.containerM {
						display: none;
					}
					.containerD {
						display: grid;
						grid-template-columns: auto auto auto;
						justify-content: space-between;
						align-items: center;
						padding-left: 20px;
						padding-right: 20px;
						column-gap: 100px;
						row-gap: 100px;
					}
					.a {
						font-size: 13px;
					}
				}
				@media screen and (min-width: 814px) {
					.a {
						font-size: 15px;
					}
				}
				@media screen and (min-width: 927px) {
					.a {
						font-size: 18px;
					}
				}
				@media screen and (min-width: 1079px) {
					.a {
						font-size: 22px;
					}
					// .lineSpace{
					// 	word-spacing: 6px;
					// }
				}
				@media screen and (min-width: 1245px) {
					.a {
						font-size: 25px;
					}
					// .lineSpace{
					// 	word-spacing: 11px;
					// }
				}
			`}</style>
		</div>
	);
};

export default SectionTwo;
