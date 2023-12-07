import Btn from "./headerItem/Btn";
import Phone from "./headerItem/Phone";
import Image from "next/image";
import FeelingText from './headerItem/feelingText.svg'

const Header = () => {
    return (
        <header className="bg-[#0e0a0a] relative">
            <div className="text-xl text-white h-[13vh] flex justify-between items-center px-10">
                <Phone />
                <Image src={FeelingText} />
                <Btn />
            </div>
        </header>
    );
}

export default Header;