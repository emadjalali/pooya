import Logo from "@/components/footerC/logo/Untitled-2-29.svg";
import Whatsapp from "@/components/footerC/logo/whatsapp.svg";
import Instagram from "@/components/footerC/logo/In.svg";
import In from "@/components/footerC/logo/instagram.svg";
import Form from "@/components/footerC/form";
import Image from "next/image";

function Footer() {
	return (
		<div className=' max-w-screen-xl my-5' style={{ margin: "auto" }}>
			<div className='px-10 lg:px-24 flex flex-col md:flex-row items-center md:items-end justify-evenly  [@media(max-width:767px)]:mx-auto md:m-0'>
				<div>
					<Image
						src={Logo}
						className='[@media(max-width:767px)]:mb-14 md:mb-4 [@media(max-width:767px)]:mx-auto   [@media(max-width:767px)]:w-[40%] md:w-content'
					/>
					<div className='hidden md:block'>
						<p className='md:text-[10px] lg:text-[12px] font-light'>
							hi@feelingofalook.com
						</p>
						<div className='flex justify-center'>
							<a href='#'>
								<Image
									src={Instagram}
									style={{ width: "15px", margin: "2px" }}
								/>
							</a>
							<a href='#'>
								<Image
									src={Whatsapp}
									style={{ width: "15px", margin: "2px" }}
								/>
							</a>
							<a href='#'>
								<Image
									src={In}
									style={{ width: "15px", margin: "2px" }}
								/>
							</a>
						</div>
					</div>
				</div>
				<div
					className='mr-10 max-w-[200px] md:max-w-[200px] lg:max-w-[370px]'
					style={{
						margin: "auto",
						textAlign: "center",
						letterSpacing: "1px",
					}}>
					<div className=' text-[11px] md:text-[9px] lg:text-[11px] text-orange-400 font-medium'>
						<p
							className='md:w-[166px] lg:w-[200px] [@media(max-width:767px)]:mb-2 md:mb-4'
							style={{
								textAlign: "justify",
								textAlignLast: "justify",
								lineBreak: "anywhere",

								letterSpacing: "0px",
								wordSpacing: "-1px",
							}}>
							<span style={{ whiteSpace: "nowrap" }}>
								Authentic Branding in Architecture,
							</span>
							<span style={{ whiteSpace: "nowrap" }}>
								Construction Industry and for Spaces
							</span>
						</p>
					</div>
					<Form />
				</div>
				<div
					className='text-right font-medium md:text-[9px] lg:text-[11px] hidden md:block'
					// style={{ margin: "auto 0" }}
				>
					<p style={{ marginBottom: "0px" }}>FAQ</p>
					<p style={{ marginBottom: "0px" }}>Articles and news</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
