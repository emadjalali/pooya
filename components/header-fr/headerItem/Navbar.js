import Link from "next/link";
import BtnTwo from "./Btn2"
import { useState } from "react";

const Nav = () => {
	// const [expand, setExpand] = useState(false);
	return (
		<nav className='bg-[#0e0a0a]  w-full absolute left-0 top-[13vh] z-10' style={{direction: ""}}>
			<ul className='nav px-0'>
				<li
					// onClick={() => setExpand((prev) => !prev)}
					className='navitem'
					style={{ position: "relative" , direction: "ltr"}}>
					<div className="firstNI">خدمات برندینگ در صنعت ساختمان، معماری و شهرسازی</div>
					<div className="btn2"><BtnTwo/></div>
				</li>
				<li className='hover:bg-orange-600  navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"#"}>
						{" "}
						برندینگ فضا
					</Link>
				</li>
				<li className='hover:bg-orange-600  navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"#"}>
						مشاوره
					</Link>
				</li>
				<li className='hover:bg-orange-600  navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"#"}>
						dycaba
					</Link>
				</li>
				<li className='hover:bg-orange-600  navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"#"}>
						درباره حس یک نگاه 
					</Link>
				</li>
			</ul>
			<style jsx>{`
				.btn2{
					position: absolute;
					top:30px;
				}
				.firstNI{
					font-size:20px;
					margin-left:35px;
				}
				.nav {
					display: flex;
					flex-direction: column;
					text-align: left;
					font-size: 26px;
					background-color: #0e0a0a;
					height: 100vh;
				}

				.navitem {
					padding-left: 50px;
					padding-top: 20px;
					padding-bottom: 20px;
				}
				.branditem {
					padding-left: 50px;
					padding-top: 20px;
					padding-bottom: 20px;
				}

				@media screen and (max-width: 767px) {
					.showbrand {
						height: 200px;
						transition: height 0.5s, opacity 0.2s ease-in-out,
							visibility 0.2s;
						opacity: 1;
						visibility: visible;
					}
					.hidebrand {
						height: 0px;
						transition: height 0.5s, opacity 0.2s ease-in-out,
							visibility 0.2s;
						opacity: 0;
						visibility: hidden;
					}
				}

				@media screen and (min-width: 768px) {
				.firstNI{
					margin-left:-20px;
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
					}

					.navitem:hover .brandfor {
						opacity: 1;
						visibility: visible;
						transition: opacity 0.2s ease-in-out, visibility 0.2s;
					}
					.branditem {
						padding-left: 0px;
						padding-top: 5px;
						padding-bottom: 5px;
					}
					.longitem {
						font-size: 12px;
						line-height: 12px;
					}
				}
			`}</style>
		</nav>
	);
};

export default Nav;
