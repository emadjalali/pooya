"use client";

import Nav from "./Navbar";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Btn() {
	const [btnNav, setBtnNav] = useState(false);

	const clickHandler = () => {
		setBtnNav((prove) => !prove);
	};
	useEffect(() => {
		if (btnNav) {
			// When the modal is shown, we want a fixed body
			document.body.style.position = "fixed";
			console.log("document.body.style", document.body.style);
			document.body.style.top = `-${window.scrollY}px`;
		} else {
			console.log("document.body.style", document.body.style);
			// When the modal is hidden...
			const scrollY = document.body.style.top;
			document.body.style.position = "";
			document.body.style.top = "";
			window.scrollTo(0, parseInt(scrollY || "0") * -1);
		}
	}, [btnNav]);

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
