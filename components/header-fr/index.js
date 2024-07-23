import Phone from "./headerItem/Phone";
import Nav from "./headerItem/Navbar";
import Title from "./headerItem/title/home-11.svg"
import Image from "next/image";


const Header = () => {
	return (
		<header className='bg-[#0e0a0a] relative z-10' style={{direction: "ltr"}}>
			<div className='text-xl text-white h-[13vh] flex justify-between items-center px-10'>
				<Nav />
				<div
					className='[@media(max-width:767px)]:w-[30%] absolute '
					style={{ left: "50%", transform: "translate(-50%)" }}
					// style={{ margin: "0 auto", paddingLeft: "30px" }}
				>
					<Image src={Title}/>
				</div>
				
				<div
					style={{
						position: "relative",
						
					}}>
					<Phone />
				</div>
			</div>
		</header>
	);
};

export default Header;
