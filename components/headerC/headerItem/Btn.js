"use client";

import Nav from "./Navbar";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Btn() {
	const [btnNav, setBtnNav] = useState(false);

	const clickHandler = () => {
		setBtnNav((prove) => !prove);
	};

	return (
		<div>
			<i onClick={clickHandler}>
				{btnNav == false ? (
					<IoIosArrowDown />
				) : (
					<IoIosArrowUp style={{ color: "orange" }} />
				)}
			</i>
			<div className={`${btnNav ? "navshow" : "navhide"}`}>
				<Nav />
			</div>

			<style jsx>{`
				.navshow {
					opacity: 1;
					visibility: visible;
					transition: opacity 0.4s, visibility 0.4s;
				}
				.navhide {
					opacity: 0;
					visibility: hidden;
					transition: opacity 0.3s, visibility 0.3s;
				}
			`}</style>
		</div>
	);
}

export default Btn;
