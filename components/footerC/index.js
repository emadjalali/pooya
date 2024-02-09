import Logo from "@/components/footerC/logo/Untitled-2-29.svg";
import Whatsapp from "@/components/footerC/logo/whatsapp.svg";
import Instagram from "@/components/footerC/logo/In.svg";
import In from "@/components/footerC/logo/instagram.svg";
import Form from "@/components/footerC/form";
import Image from "next/image";

function Footer() {
	return (
		<div className='flex  justify-evenly mx-10 h-[30vh]'>
			<div>
				<Image src={Logo} className='mb-10' />
				<p className='text-sm font-light'>hi@feelingofalook.com</p>
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
						<Image src={In} style={{ width: "15px", margin: "2px" }} />
					</a>
				</div>
			</div>
			<div className='mr-10'>
				<div className='text-sm text-orange-400 font-medium mb-[2rem]'>
					<p className='tracking-wide'>
						Authentic Branding in Architecture,
					</p>
					<p>Construction Industry and for Spaces</p>
				</div>
				<Form />
			</div>
			<div className='text-right font-medium text-sm'>
				<p>FAQ</p>
				<p>Articles and news</p>
			</div>
		</div>
	);
}

export default Footer;
