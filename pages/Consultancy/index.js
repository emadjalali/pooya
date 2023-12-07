import Image from "next/image";
import Picture from './pattern/مشاوره.png'
import Form from "./Form/index";
import colLines from './pattern/colLines.svg'

const Consultancy = () => {
    return (
        <div>
                    <div>
            <h1 className="text-4xl font-bold mx-64 mt-32">Consulting</h1>
            <p className="text-slate-600 mx-64 my-16 tracking-wider">
            “Feeling of a look” has been a branding consulting agency in urban, architecture and construction industry and benefits<br /> 
            from team of interdisciplinary advisors worldwide. We provide professional branding and marketing consulting service to:
            </p>
            {/* <div className="generator__shape generator__shape--8v" id="shape" style={{borderRadius: "23% 77% 100% 0% / 4% 74% 0% 35%"}}></div> */}
            <div>
                <Image src={colLines} style={{width:"355px", position: "absolute",  top: '80%'}} /> 
                <Image src={Picture} className="w-[50rem] m-auto"/>
                <Image src={colLines} style={{width:"355px", position: "absolute",  bottom: '-20%' , right:'-5%'}} /> 
                <p className="text-5xl text-white font-bold absolute left-[30%] bottom-[-20%] tracking-[.85em]">consulting</p>
            </div>
            <div className="font-bold mx-64 mt-16">
                <p>Architects and architectural firms</p>
                <p>Construction companies</p>
                <p>Real estate developers</p>
                <p>Material supplier and manufacturer</p>
                <p>Investors of buildings and built environment</p>
                <p>Business owners of any scale who considers branded spaces as the focal point for their brands
                    and their customers</p>
            </div>
            <p className="text-slate-600 font-medium mx-64 mt-6">Fill out the form below to book your 30-minutes free online meeting</p>
            <div className="mt-12 mb-44 ml-[45%]">
                <Form />
            </div>
        </div>
        </div>
    );
}

export default Consultancy;