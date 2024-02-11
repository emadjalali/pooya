"use client";
import { useState } from "react";

export default function Form() {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail("");
	};

	return (
		<div className='md:w-[166px] lg:w-[200px] text-[0px]'>
			<form onSubmit={handleSubmit} className='lg:max-w-[238px]'>
				<input
					type='email'
					placeholder='your email'
					className='emailplaceholder text-[11px] lg:text-[14px]'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					style={{
						display: "inline-block",
						border: "0px solid #ccc",
						backgroundColor: "#eeebeb",
						width: "100%",
						// marginBottom: "-5px",
					}}
				/>
				<br />
				<button
					className='text-[10px] lg:text-[12px] font-bold bg-orange-500 text-white border-0 py-1 px-1'
					type='submit'
					name='email'
					disabled={!email}
					style={{ cursor: "pointer", width: "100%" }}>
					Subscribe to feeling of a look
				</button>
			</form>
			<style jsx global>{`
				::-webkit-input-placeholder {
					text-align: center;
				}
			`}</style>
		</div>
	);
}
