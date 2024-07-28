"use client";
import { IoIosCall } from "react-icons/io";
import { useState } from "react";

function Phone() {
	const [phone, setPhone] = useState(false);

	const clickHandler = () => {
		setPhone((prove) => !prove);
	};

	return (
		<div
			className='flex'
			style={{
				position: "absolute",
				// left: "30px",
				top: "-10px",
			}}>
			<span
				onClick={clickHandler}
				style={{
					position: "absolute",
					left: "0px",
					top: "0px",
					zIndex: "10",
				}}>
				{phone == false ? (
					<IoIosCall style={{ color: "white" }} />
				) : (
					<IoIosCall style={{ color: "orange" }} />
				)}
			</span>
			{phone && (
				<span
					className='text-[8px] md:text-[14px] lg:text-[14px]'
					style={{
						color: "orange",
						position: "absolute",
						left: "20px",
						top: "-5px",
						letterSpacing: "0px",
						wordSpacing: "-1px",
						width: "100px",
						fontFamily:"iranYekanRegularNum",
						direction:"ltr"
						// position: "absolute",
						// left: "5%",
						// top: "30px",
					}}>
					021 - 22 790 797
				</span>
			)}
		</div>
	);
}

export default Phone;
