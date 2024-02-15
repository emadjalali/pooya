import Btn from "./headerItem/Btn";
import Phone from "./headerItem/Phone";
import Image from "next/image";
import FeelingText from "./headerItem/feelingText.svg";

const Header = () => {
	return (
		<header className='bg-[#0e0a0a] relative z-10'>
			<div className='text-xl text-white h-[13vh] flex justify-between items-center px-10'>
				<div
					style={{
						position: "relative",
					}}>
					<Phone />
				</div>
				<div
					className='[@media(max-width:767px)]:w-[30%] absolute '
					style={{ left: "50%", transform: "translate(-50%)" }}
					// style={{ margin: "0 auto", paddingLeft: "30px" }}
				>
					<Image src={FeelingText} />
				</div>

				<Btn />
			</div>
		</header>
	);
};

export default Header;
