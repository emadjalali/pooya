import Link from "next/link";
import { useState } from "react";

const Nav = () => {
	const [expand, setExpand] = useState(false);
	return (
		<nav className='bg-[#0e0a0a]  w-full absolute left-0 top-[13vh] z-10'>
			<ul className='nav px-0'>
				<li
					onClick={() => setExpand((prev) => !prev)}
					className='navitem md:hover:bg-orange-600'
					style={{ position: "relative" }}>
					<div>Branding for</div>
					<div className='brandfor '>
						<ul className={` px-0 ${expand ? "showbrand" : "hidebrand"}`}>
							<li className='hover:text-orange-600  branditem'>
								Architects
							</li>
							<li className='hover:text-orange-600  branditem  longitem'>
								constructions companies <br /> & real estate developers
							</li>
						</ul>
					</div>
				</li>
				<li className='hover:bg-orange-600  navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"/SpaceBranding"}>
						{" "}
						Space Branding
					</Link>
				</li>
				<li className='hover:bg-orange-600  navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"/CreativeSolutions"}>
						Creative Solutions
					</Link>
				</li>
				<li className='hover:bg-orange-600  navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"/Consultancy"}>
						Consultancy
					</Link>
				</li>
				<li className='hover:bg-orange-600  navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"/Philosophy"}>
						Philosophy
					</Link>
				</li>
				<li className='hover:bg-orange-600  navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"/FOAL"}>
						FEELING OF A LOOK?
					</Link>
				</li>
				<li className='hover:bg-orange-600 navitem'>
					<Link
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={"/Contact"}>
						Contact
					</Link>
				</li>
			</ul>
			<style jsx>{`
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
				.brandfor {
					position: relative;
					transition: opacity 0.2s ease-in-out, visibility 0.2s;
					background-color: #0e0a0a;
					color: white;
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
					.nav {
						display: flex;
						flex-direction: row;
						text-align: center;
						font-size: 14px;
						height: inherit;
					}
					.navitem {
						padding-left: 0px;
						flex-grow: 1;
					}
					.brandfor {
						position: absolute;
						display: inherit;
						opacity: 0;
						visibility: hidden;
						width: 200%;
						top: 100%;
						background-color: white;
						color: #0e0a0a;
						padding-top: 10px;
						padding-bottom: 10px;
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
