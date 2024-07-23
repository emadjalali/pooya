import Image from "next/image";
import Link from "next/link";
import lineOne from "./blackPattern3/home-13.svg"
import colorLineOne from "./colorPattern3/home-47.svg"
import lineTwo from "./colorPattern3/home-45.svg"
import کشف from "./colorPattern3/home-42.svg"
import به_کشف_چرایی from "./blackPattern3/home-16.svg"
import خلق from "./colorPattern3/home-44.svg"
import به_چیستی from "./blackPattern3/home-19.svg"
import هویت_برند from "./blackPattern3/home-20.svg"
import مسیر from "./colorPattern3/home-46.svg"
import به_چگونگی from "./blackPattern3/home-22.svg"
import بازاریابی from "./blackPattern3/home-20.svg"
import اجرا from "./colorPattern3/home-48.svg"
import زندگی from "./blackPattern3/home-24.svg"
export default function SectionThree() {
	return (
		<div>
			<div className='pageSize'></div>
			<div
					className='mycontainer'
					style={{
						position: "absolute",
						top: "-2%",
						// width: "75%",
						margin: "auto",
						left: "50%",
						transform: "translate(-50%)",
					}}>
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
					<Image src={colorLineOne}style={{height:"25px"}}/>
				</div>
				<div className="boldText">
					<Link href={"#"}><Image src={خلق}  style={{height:"220%"}}/></Link>
				</div>
				<div className="secondp">
					<Image src={به_چیستی}/>
				</div>
				<div className="thirthp">
					<Image src={هویت_برند}/>
				</div>
				<div className="lineTwo">
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
					<Image src={colorLineOne} style={{height:"25px"}}/>
				</div>
				<div className="boldText">
					<Link href={"#"}><Image src={اجرا}  style={{height:"220%"}}/></Link>
				</div>
				<div className="sixth">
					<Image src={زندگی}/>
				</div>
			</div>
			<style jsx>{`
				.pageSize {
					position: relative;
					width: 100%;
					padding-top: 110%;
					margin: auto;
					background-color: rgb(241 245 249);
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
					margin-top: 12%;
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
    				margin-top: 5%
				}
				.boldText{
					display: ruby-text;
    				margin-top: 3%;
				}
				.firstp{
					position: absolute;
    				right: 21%;
   					 top: 27%;
				}
				.secondp{
					position:absolute;
					right: 21%;
					top: 45%;
				}
				.thirthp{
					position:absolute;
					left:21%;
					top:48%;
				}
				.fourth{
					position:absolute;
					right:21%;
					top: 65%;
				}
				.fifth{
					position:absolute;
					left:21%;
					top: 68%;
				}
				.sixth{
					position:absolute;
					right:21%;
					top: 86%;
				}
				@media screen and (min-width: 768px) {
					.mycontainer {
						width: 75%;
					}
					
			`}</style>
		</div>
	);
}
