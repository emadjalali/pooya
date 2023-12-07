import SectionTwo from "@/components/BrandingForPage/section2"
import HowItWorks from "@/components/BrandingForPage/section5"
import Image from "next/image"
import TopLine from '../public/BrandingForPattern/section3/Untitled-2-19.svg'
import BotLine from '../public/BrandingForPattern/section3/Untitled-2-20.svg'
import pattern from '../public/BrandingForPattern/section4/Untitled-2-24.svg'


export default function Home() {
  return (
    <main>
      <section className="bg-[#0e0a0a] h-[87vh] flex justify-around items-center">
        <div className="text-white text-7xl ml-[60vh]">
          <p>Integrated</p>
          <p>Visual</p>
          <p>Identity</p>
        </div>
        <div className="text-gray-500 text-5xl mr-[20vh]">
          <p>in Architecture and<br></br>Constraction Industry</p>
        </div>
      </section>
      <section className="bg-[#fffff] h-[100vh]">
        <SectionTwo />
      </section>
      <section className="bg-[#fffff] h-[100vh]">
        <h2 className="text-3xl font-bold absolute right-[43%] mt-[250px]">Hot, Perhaps.</h2>
        <Image src={TopLine} style={{width:"280px", position:"absolute", right:"0px" , marginTop:"70px"}}/>
        <div style={{color:"rgb(22, 85, 124)", position:"absolute", left:"20%" , marginTop:"400px"}}>
          <h2 style={{fontSize:"27px"}}>Beyond a Brand Book<br></br>for Architects and<br></br>Architecture Offices</h2>
          <pre style={{fontSize:"14px"}}>Authentic   Brand    Discovery,<br /> 
            Creation   and   Communications
            <br />(DCCapproach)</pre>
        </div>
        <div style={{color:"rgb(22, 85, 124)", position:"absolute", left:"40%" , marginTop:"400px"}}>
          <h2 style={{fontSize:"27px"}}>Place Branding for Real<br></br>Estate Developers and<br></br>Construction Companies</h2>
          <p>creating branded buildings</p>
        </div>
        <div style={{color:"rgb(22, 85, 124)", position:"absolute", right:"19%" , marginTop:"400px"}}>
          <h2 style={{fontSize:"27px"}}>Branded Space Creation<br></br>for Businesses</h2>
          <p>Experience Design</p>
        </div>
      <Image src={BotLine}  style={{width:"500px", position:"absolute", left:"0px" , marginTop:"38%"}} />
      </section>
      <section className="bg-orange-500 h-[100vh]">
        <Image src={pattern} />
      </section>
      <section className="h-[200vh]">
        <HowItWorks className="bg-[#fffff]"/>
      </section>
    </main>
  )
}
