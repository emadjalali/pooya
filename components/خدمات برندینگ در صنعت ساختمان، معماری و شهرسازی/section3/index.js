import Image from "next/image";
import Link from "next/link";
import lineOne from "./blackPattern3/home-13.svg"
import colorLineOne from "./colorPattern3/home-47.svg"
import lineTwo from "./colorPattern3/home-45.svg"
import کشف from "./colorPattern3/home-42.svg"
import به_کشف_چرایی from "./blackPattern3/home-16.svg"
import خلق from "./colorPattern3/home-44.svg"
import به_چیستی from "./blackPattern3/home-19.svg"
import هویت_برند from "./blackPattern3/home-17.svg"
import مسیر from "./colorPattern3/home-46.svg"
import به_چگونگی from "./blackPattern3/home-22.svg"
import بازاریابی from "./blackPattern3/home-20.svg"
import اجرا from "./colorPattern3/home-48.svg"
import زندگی from "./blackPattern3/home-24.svg"
export default function SectionThree() {
	return (
		<div>
			<div className='pageSize'>
				<div className='mycontainer' style={{position: "absolute", top: "-3%", margin: "auto", left: "50%", transform: "translate(-50%)",}}>
				<div><h1 className='bigQ'>حس یک نگاه مشخصا به چه می پردازد؟</h1></div>
				<div className="lineOne">
					<Image src={lineOne} style={{height:"25px"}}/>
				</div>
				<div className="answer">
					<p>به چرایی،چیستی،چگونگی و زندگی برندها<br/> در صنعت ساختمان ، معماری و شهرساز</p>
				</div>
				<div className="lineTwo">
					<Image src={lineTwo} style={{width:"30px"}}/>
				</div>
				<div className="boldText">
					<Link href={"#"}><Image src={کشف}  style={{height:"220%"}}/></Link>
				</div>
				<div className="firstp">
					<Image src={به_کشف_چرایی}/>
				</div>
				<div className="lineOne">
					<Image src={colorLineOne} style={{height:"25px", marginTop:"5%"}}/>
				</div>
				<div className="boldText">
					<Link href={"#"}><Image src={خلق}  style={{height:"220%"}}/></Link>
				</div>
				<div className="secondp">
					<Image src={به_چیستی}/>
				</div>
				<div className="thirthpp">
					<Image src={هویت_برند}/>
				</div>
				<div className="lineTwo" style={{marginTop:"10%"}}>
					<Image src={lineTwo}/>
				</div>
				<div className="boldText">
					<Link href={"#"}><Image src={مسیر}  style={{height:"220%"}}/></Link>
				</div>
				<div className="fourth">
					<Image src={به_چگونگی}/>
				</div>
				<div className="fifth">
					<Image src={بازاریابی}/>
				</div>
				<div className="lineOne">
					<Image src={colorLineOne} style={{height:"25px",marginTop:"10%"}}/>
				</div>
				<div className="boldText">
					<Link href={"#"}><Image src={اجرا}  style={{height:"220%"}}/></Link>
				</div>
				<div className="sixth">
					<Image src={زندگی}/>
				</div>
			</div>
			</div>	
		<div/>
			<style jsx>{`
				.pageSize {
					position: relative;
					width: 100%;
					padding-top: 250%;
					margin: auto;
					background-color: #edebeb;
				}
				.mycontainer {
					width: 150%;
				}
				.bigQ {
    				font-family: revert-layer;
					min-width: 160px;
					position: relative;
					margin: 0 auto;
					font-size: 20px;
					margin-top: 20%;
					text-align: center;
				}
				.lineOne{
					display: ruby-text;
    				margin-top: 3%;
				}
				.answer{
					text-align: center;
   					font-size: 20px;
   					font-weight: 700;
				}
				.lineTwo{
					display: ruby-text;
    				margin-top: 2%
				}
				.boldText{
					width: 18%;
    				margin-right: 42%;
    				margin-top:0%;
				}
				.firstp{
					width: 15%;
    				margin-right: 23%;
    				margin-top: -20%;
				}
				.secondp{
	    			width: 14%;
   					margin-right: 23%;
   					margin-top: -19%;
				}
				.thirthpp{
    				width: 20%;
   					margin-right: 62%;
    				margin-top: -14%;
				}
				.fourth{
	    			width: 14%;
   					margin-right: 23%;
   					margin-top: -19%;
				}
				.fifth{
    				width: 20%;
   					margin-right: 62%;
    				margin-top: -12%;
				}
				.sixth{
	    			width: 14%;
   					margin-right: 23%;
   					margin-top: -19%;
				}
				@media screen and (min-width: 768px) {
					.pageSize {
						padding-top: 130%;
					}
					.mycontainer {
						width: 75%;
					}
					
			`}</style>
		</div>
	);
}
