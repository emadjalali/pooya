import Image from "next/image"
import BigQuestion from './pattern2/BigQuestion.svg'
import BrandDiscovery from './pattern2/BrandDiscovery.svg'
import why from './pattern2/why.svg'
import AreYou from './pattern2/AreYou.svg'
import who from './pattern2/who.svg'
import BrandStrategy from './pattern2/BrandStrategy.svg'
import how from './pattern2/how.svg'
import doYou from './pattern2/doYou.svg'
import Marketing from './pattern2/Marketing.svg'
import live from './pattern2/live.svg'
import IntegratedBrand from './pattern2/IntegratedBrand.svg'

const SectionTwo = () => {
    return (
        <>
        <Image src={BigQuestion} style={{width:"260px", position:"absolute" , right:"40%" , marginTop:"90px"}}/>
        <Image src={BrandDiscovery} style={{width:"35px", position:"absolute" , left:"29%" , marginTop:"230px"}}/>
        <Image src={why} style={{width:"250px", position:"absolute" , left:"32%" , marginTop:"230px"}}/>
        <Image src={AreYou} style={{width:"50px", position:"absolute" , left:"49%" , marginTop:"260px"}}/>
        <Image src={who} style={{width:"250px", position:"absolute" , left:"36%" , marginTop:"330px"}}/>
        <Image src={AreYou} style={{width:"50px", position:"absolute" , right:"43%" , marginTop:"350px"}}/>
        <Image src={BrandStrategy} style={{width:"150px", position:"absolute" , right:"32%" , marginTop:"334px"}}/>
        <Image src={how} style={{width:"250px", position:"absolute" , right:"40%" , marginTop:"430px"}}/>
        <Image src={doYou} style={{width:"150px", position:"absolute" , right:"29%" , marginTop:"454px"}}/>
        <Image src={Marketing} style={{width:"250px", position:"absolute" , right:"40%" , marginTop:"530px"}}/>
        <Image src={live} style={{width:"250px", position:"absolute" , right:"40%" , marginTop:"600px"}}/>
        <Image src={IntegratedBrand} style={{width:"230px", position:"absolute" , right:"41.5%" , marginTop:"680px"}}/>
        </>
    );
}

export default SectionTwo;