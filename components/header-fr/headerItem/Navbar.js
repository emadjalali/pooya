import Link from "next/link";
import { useState} from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Nav = () => {
	const [btnUl, setBtnUl] = useState(false);

	const clickHandler = () => {
		setBtnUl((prove) => !prove);
	};
	// const [expand, setExpand] = useState(false);
	return (
		<nav className='bg-[#0e0a0a]  w-full absolute left-0 top-[13vh] z-10' style={{direction: ""}}>
			<ul className='nav px-0'>
				<li
					// onClick={() => setExpand((prev) => !prev)}
					className='navitem'>
					<div style={{position:"relative"}}>
						<div className="firstNI"  className={`${btnUl ? "firstNIshow" : "firstNIhide"}`}><p >خدمات برندینگ در صنعت ساختمان، معماری و شهرسازی</p></div>
						<div className="secondBtn">
						<i onClick={clickHandler}>
							{btnUl == false ? (<IoIosArrowDown style={{width:"20px"}}/>) : (<IoIosArrowUp style={{ color: "orange" , width:"20px"}} />)}
						</i>
						</div>
					</div>
					<div className={`${btnUl ? "navshow" : "navhide"}`}>
						<ul className="ul">
							<li className='hover:text-orange-600  branditem '>
								برندینگ برای معماران
							</li>
							<li className='hover:text-orange-600  branditem  '>
								برندینگ برای سازندگان
							</li>
							<li className='hover:text-orange-600  branditem  '>
								برندینگ برای تامین‌کنندگان
							</li>
							<li className='hover:text-orange-600  branditem  '>
								رندینگ ساختمان
							</li>
							<li className='hover:text-orange-600  branditem  '>
								برندینگ شهری
							</li>
						</ul>
					</div>
					
				</li>
				<li className='HVR navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"#"}>
						{" "}
						<p className="ph">برندینگ فضا</p>
					</Link>
				</li>
				<li className='HVR navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"#"}>
						<p className="ph">مشاوره</p>
					</Link>
				</li>
				<li className='HVR  navitem' >
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"#"}>
						<p className="ph">dycaba</p>
					</Link>
				</li>
				<li className='HVR navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"#"}>
						<p className="ph">درباره حس یک نگاه </p>
					</Link>
				</li>
			</ul>
			<style jsx>{`
				.ph:hover{
					color:  #ff8100;
				}
				.firstNIshow{
					color:  #ff8100;
				}
				.firstNIhide{
					color: white
				}
				.navshow {
					display: block;
					width:400%;

				}
				.navhide {
					display: none;
				}
				.secondBtn{
					position: absolute;
					top:5px;
    				margin-right: 15px;
    				width: 100%;
    				direction: ltr;
				}
				}
				.firstNI{
					font-size:15px;
					margin-left:35px;
				}

				.nav {
					display: flex;
					flex-direction: column;
					font-size: 26px;
					background-color: #0e0a0a;
					height: 100vh;
					text-align: start;
    				margin-right: 15px;
				}

				.navitem {
					padding-left: 50px;
					padding-top: 15px;
					font-size: 13.5px;
				}

				.branditem {
					padding-top: 5px;
					font-size: 15px;
				}
			@media screen and (min-width: 390px){
				.navitem {
					padding-top: 20px;
					font-size: 17px;
				}
			}
			@media screen and (min-width: 425px){
				.secondBtn{
       				width: auto;
        			margin-right: 335px;
				}
			}
				@media screen and (min-width: 560px){
					.navitem{
						font-size:22px;
					}
					.firstNI{
						font-size:20px;
					}
					.secondBtn{
						margin-right: 430px;
					}
				}

				@media screen and (min-width: 768px) {
				.ph:hover{
					color:  white;
				}
				.HVR:hover{
					background-color: #ff8100;
				}
				.ul{
					padding-right: 30px;
    				font-weight: 600;
				}
				.navshow{
					background-color: white;
					color: black;
    				text-align: start;
					margin-top: 15px;
					margin-right: -20px;
				}
				.firstNI{
       				 margin-left: -10px;
        			font-size: 16px;
        			margin-right: -15px;
				}
				.secondBtn{
					top: 8px;
    				position: absolute;
    				left: 2px;
				}
					.nav {
						display: flex;
						flex-direction: row;
						text-align: center;
						font-size: 16px;
						height: inherit;
						direction: rtl;
					}
					Link{
						font-size: 14px;
					}
					.navitem {
						padding-left: 0px;
						flex-grow: 1;
						font-size:16px;
						height: 65px;
					}

					.navitem:hover .brandfor {
						opacity: 1;
						visibility: visible;
						transition: opacity 0.2s ease-in-out, visibility 0.2s;
					}
					.branditem {
						padding-left: 0px;
						padding-top: 5px;
					}
					.longitem {
						font-size: 12px;
						line-height: 12px;
					}
				}
				@media screen and (min-width: 850px){
					.secondBtn{
						left:10px
					}
				}
				@media screen and (min-width: 970px){
					.secondBtn{
						left:20px
					}
				}
				@media screen and (min-width: 1080px){
					.secondBtn{
						left:30px
					}
				}
				@media screen and (min-width: 1120px){
					.secondBtn{
						left: 30px
					}
					.navitem {
						font-size:18px
					}
					.firstNI{
						font-size:17px
					}
				}
				@media screen and (min-width: 1245px){
					// .secondBtn{
					// 	left:30px
					// }
					.navitem {
						font-size:20px
					}
					.firstNI{
						font-size:19px
					}
				}
				@media screen and (min-width: 1300px){
					// .secondBtn{
					// 	
					// }
				}
				@media screen and (min-width: 1310px){
					.secondBtn{
						left: 40px;
					}
				}
			`}</style>
		</nav>
	);
};

export default Nav;
