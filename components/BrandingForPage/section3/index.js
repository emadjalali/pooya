import Image from "next/image";
import TopLine from "@/public/BrandingForPattern/section3/Untitled-2-19.svg";
import BotLine from "@/public/BrandingForPattern/section3/Untitled-2-20.svg";
export default function SectionThree() {
	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				paddingTop: "56%",
				margin: "auto",
				backgroundImage: "url('section3.jpg')",
				backgroundSize: "cover",
			}}>
			<div
				style={{
					position: "absolute",
					top: "0%",
					width: "75%",
					margin: "auto",
					left: "50%",
					transform: "translate(-50%)",
					opacity: 0,
				}}>
				<h2 className='text-[10px] sm:text-xl lg:text-4xl md:font-bold absolute left-[39%] mt-[23%]'>
					Hot, Perhaps.
				</h2>
				<Image
					src={TopLine}
					style={{
						width: "21%",
						position: "absolute",
						left: "95%",
						marginTop: "14%",
					}}
				/>
				<div
					style={{
						// color: "rgb(22, 85, 124)",
						position: "absolute",
						left: "1%",
						marginTop: "37%",
						lineHeight: "1",
						overflow: "hidden",
						textAlign: "justify",
					}}>
					<h2
						className='font-bold text-[10px] md:text-[14px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px]'
						style={{
							lineHeight: "1",
							textAlign: "justify",
							// textAlignLast: "justify",
							lineBreak: "anywhere",
							width: "37%",
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
						className='text-[10px] sm:text-xl lg:text-[20px]'
						style={{ lineHeight: "1", overflow: "hidden" }}>
						Authentic Brand Discovery,
						<br />
						Creation and Communications
						<br />
						(DCCapproach)
					</pre>
				</div>
				<div
					style={{
						// color: "rgb(22, 85, 124)",
						position: "absolute",
						left: "34%",
						marginTop: "37%",
						lineHeight: "1",
						overflow: "hidden",
					}}>
					<h2
						className='font-bold text-[10px] md:text-[13px] lg:text-[19px] xl:text-[24px] 2xl:text-[29px]'
						style={{
							lineHeight: "1",
							textAlign: "justify",
							textAlignLast: "justify",
							lineBreak: "anywhere",
							width: "50%",
							letterSpacing: "1px",
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
						className='text-[10px] sm:text-xl lg:text-[20px]'
						style={{ lineHeight: "1", overflow: "hidden" }}>
						creating branded buildings
					</p>
				</div>
				<div
					style={{
						// color: "rgb(22, 85, 124)",
						position: "absolute",
						left: "70%",
						marginTop: "37%",
						lineHeight: "1",
						overflow: "hidden",
					}}>
					<h2
						className='font-bold text-[10px] md:text-[14px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px]'
						style={{
							lineHeight: "1",

							lineBreak: "anywhere",
							width: "48%",
						}}>
						<span style={{ whiteSpace: "nowrap" }}>
							Branded Space Creation
						</span>
						<span style={{ whiteSpace: "nowrap" }}>for Businesses</span>
					</h2>
					<p
						className='text-[10px] sm:text-xl lg:text-[20px]'
						style={{ lineHeight: "1", overflow: "hidden" }}>
						Experience Design
					</p>
				</div>
				<Image
					src={BotLine}
					style={{
						width: "46%",
						position: "absolute",
						left: "-16%",
						marginTop: "54%",
					}}
				/>
			</div>
		</div>
	);
}
