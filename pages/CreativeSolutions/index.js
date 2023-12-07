import Image from "next/image";
import picture from './pattern & Img/راهکارهای خلاق.webp'
import Form from "./companent/form";

const CreativeSolutions = () => {

    return (
        <div>
            <h1 className="text-4xl font-bold mx-64 mt-32">Creative<br/>Solutions</h1>
            <p className="text-slate-600 mx-64 my-16 tracking-wider block">
            It is what it is, the creative solutions! How do you describe an idea that has never been presented until your case? Probably<br/> 
            not possible. Well, we design creative solutions in any form and for any purpose for brands active in architecture and con-
            struction industry and for businesses in which space plays role like never before!
            </p>
            <div className="shape z-0 mt-16"></div>
            <div>
                <h1 className="text-cyan-700 text-[39px] font-bold absolute right-[35%] bottom-[-29%]">c<br/>r<br/>e<br/>a<br/>t<br/>i<br/>v<br/>e</h1>
                <div className=" z-10">
                    <Image src={picture} className="relative w-80 m-auto"/>
                    <h1 className="text-4xl text-white font-bold absolute left-[40%] bottom-[-27%]">solutions</h1>
                </div>
            </div>
            <div className="relative z-10 mb-36">
                <div className="mt-16 font-semibold ml-[40%] text-white">
                    <p className="text-xl">Want to know more about<br />feeling of a look creative solutions?</p>
                    <p className="text-2xl tracking-wide mt-3">Tell us about the challenge</p>
                </div>
                <div className="my-14 flex ml-[45%] ">
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default CreativeSolutions;