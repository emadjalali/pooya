import Image from "next/image";
// import TopLine from "@/public/BrandingForPattern/section3/Untitled-2-19.svg";
import BotLine from "@/public/BrandingForPattern/section3/Untitled-2-20.svg";
export default function SectionThree() {
	return (
		<div
			className='pageSize'
			style={{
				// position: "relative",
				// width: "100%",
				// paddingTop: "56%",
				// margin: "auto",
				// backgroundImage: "url('section3.jpg')",
				// backgroundSize: "cover",
				opacity: 1,
			}}>
			<div
				className='perhaps'
				style={{
					position: "absolute",
					// top: "0%",
					// width: "75%",
					margin: "auto",
					left: "50%",
					transform: "translate(-50%)",
					whiteSpace: "nowrap",
				}}>
				<h2
					className=' text-[30px] sm:text-[35px] lg:text-3xl xl:text-4xl font-bold  mt-[23%]'
					style={{
						position: "absolute",

						margin: "auto",
						left: "50%",
						transform: "translate(-50%)",
					}}>
					Hot, Perhaps.
				</h2>
				<div className='topline'>
					<Image
						src='/BrandingForPattern/section3/topline.svg'
						width={300}
						height={292}
						// style={{
						// 	width: "21%",
						// 	position: "absolute",
						// 	left: "95%",
						// 	marginTop: "14%",
						// 	opacity: "1",
						// }}
					/>
				</div>

				<div
					className='bbb'
					style={
						{
							// color: "rgb(22, 85, 124)",
							// position: "absolute",
							// left: "1%",
							// marginTop: "37%",
							// lineHeight: "1",
							// overflow: "hidden",
							// textAlign: "justify",
						}
					}>
					<h2
						className='bbbh2 font-bold text-[15px] sm:text-[20px] md:text-[14px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px]'
						style={{
							lineHeight: "1",
							textAlign: "justify",
							// textAlignLast: "justify",
							lineBreak: "anywhere",
							// width: "37%",
						}}>
						<span style={{ whiteSpace: "nowrap" }}>
							Beyond a Brand Book
						</span>
						<span style={{ whiteSpace: "nowrap" }}>
							for Architects and
						</span>
						<span style={{ whiteSpace: "nowrap" }}>
							Architecture Offices
						</span>
					</h2>
					<pre
						className='text-[10px] md:text-[9px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px]'
						style={{
							lineHeight: "1",
							overflow: "hidden",
						}}>
						Authentic Brand Discovery,
						<br />
						Creation and Communications
						<br />
						(DCCapproach)
					</pre>
				</div>
				<div
					className='pbr'
					style={{
						// color: "rgb(22, 85, 124)",
						position: "absolute",
						// margin: "37% auto",
						left: "50%",
						// marginTop: "37%",
						lineHeight: "1",
						overflow: "hidden",

						transform: "translate(-50%)",
					}}>
					<h2
						className='pbh2 font-bold text-[15px] sm:text-[20px] md:text-[13px] lg:text-[19px] xl:text-[24px] 2xl:text-[29px]'
						style={{
							lineHeight: "1",
							textAlign: "justify",
							textAlignLast: "justify",
							lineBreak: "anywhere",
						}}>
						<span style={{ whiteSpace: "nowrap" }}>
							Place Branding for Real
						</span>

						<span style={{ whiteSpace: "nowrap" }}>
							Estate Developers and
						</span>

						<span style={{ whiteSpace: "nowrap" }}>
							Construction Companies
						</span>
					</h2>
					<p
						className='text-[10px] md:text-[9px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px]'
						style={{ lineHeight: "1", overflow: "hidden" }}>
						creating branded buildings
					</p>
				</div>
				<div
					className='bs'
					style={{
						// color: "rgb(22, 85, 124)",
						position: "absolute",

						// marginTop: "37%",
						lineHeight: "1",
						overflow: "hidden",
					}}>
					<h2
						className='bsh2 font-bold text-[15px] sm:text-[20px] md:text-[14px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px]'
						style={{
							lineHeight: "1",

							lineBreak: "anywhere",
						}}>
						<span style={{ whiteSpace: "nowrap" }}>
							Branded Space Creation
						</span>
						<span style={{ whiteSpace: "nowrap" }}>for Businesses</span>
					</h2>
					<p
						className='text-[10px] md:text-[9px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px]'
						style={{ lineHeight: "1", overflow: "hidden" }}>
						Experience Design
					</p>
				</div>
				<div className='botline'>
					<Image
						src={BotLine}
						// style={{
						// 	width: "46%",
						// 	position: "absolute",
						// 	left: "-16%",
						// 	marginTop: "54%",
						// }}
					/>
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

				.topline {
					width: 33%;
					position: absolute;
					left: 68%;
					margin-top: -45%;
				}
				.botline {
					width: 70%;
					position: absolute;
					left: 0%;
					margin-top: 116% !important;
				}
				.perhaps {
					top: 25%;
					width: 100%;
				}

				.bbb {
					position: absolute;
					margin: 20% auto;
					left: 50%;
					transform: translate(-50%);

					line-height: 1;
					overflow: hidden;
					text-align: justify;
					white-space: normal;
				}
				.bbbh2 {
					max-width: 162px;
					margin-bottom: 3px;
				}
				.pbr {
					margin: 67% auto;
					margin-top: 50%;
					white-space: normal;
				}
				.pbh2 {
					max-width: 162px;
					letter-spacing: -1px;
					margin-bottom: 3px;
				}
				.bs {
					margin-top: 87%;
					margin: 77% auto;
					left: 50%;
					transform: translate(-50%);
					white-space: normal;
				}

				.bsh2 {
					max-width: 162px;
					letter-spacing: -1px;
					margin-bottom: 3px;
				}
				@media screen and (min-width: 640px) {
					.bbbh2 {
						max-width: 212px;
						margin-bottom: 5px;
					}

					.pbh2 {
						max-width: 212px;
						letter-spacing: -1px;
						margin-bottom: 5px;
					}

					.bsh2 {
						max-width: 212px;
						letter-spacing: -1px;
						margin-bottom: 5px;
					}
				}

				@media screen and (min-width: 768px) {
					.pageSize {
						padding-top: 56%;
					}

					.perhaps {
						top: 20%;
						width: 75%;
					}

					.topline {
						width: 21%;
						position: absolute;
						left: 95%;
						margin-top: -8%;
						opacity: 1;
					}

					.botline {
						width: 46%;
						position: absolute;
						left: -16%;
						margin-top: 54%;
					}

					.pbr {
						margin: 25% auto;
					}

					.bbb {
						position: absolute;
						margin: unset;
						left: 3%;
						transform: unset;
						margin-top: 25%;
						line-height: 1;
						overflow: hidden;
						text-align: justify;
					}

					.bbbh2 {
						max-width: 146px;
					}
					.pbh2 {
						max-width: 161px;
						letter-spacing: 0px;
					}

					.bs {
						right: -2%;
						margin: unset;
						margin-top: 25%;
						left: unset;
						transform: unset;
					}

					.bsh2 {
						max-width: 182px;
					}
				}

				@media screen and (min-width: 1024px) {
					.bbbh2 {
						max-width: 199px;
					}

					.pbh2 {
						max-width: 225px;
					}
					.bsh2 {
						max-width: 248px;
					}
				}
				@media screen and (min-width: 1280px) {
					.bbbh2 {
						max-width: 247px;
					}

					.pbh2 {
						max-width: 280px;
					}
					.bsh2 {
						max-width: 302px;
					}
				}
				@media screen and (min-width: 1536px) {
					.bbbh2 {
						max-width: 297px;
					}

					.pbh2 {
						max-width: 337px;
					}
					.bsh2 {
						max-width: 337px;
					}
				}
			`}</style>
		</div>
	);
}
