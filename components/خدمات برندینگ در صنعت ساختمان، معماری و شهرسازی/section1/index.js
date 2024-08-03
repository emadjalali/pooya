"use client";
import Image from "next/image";
import firstPD from "./pattern/Artboard.png"
import firstPM from "./pattern/ArtboardTwo.png"
import secondtPD from "./pattern/Artboard-2-two.png"
import secondPM from "./pattern/Artboard-2.png"
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function SectionOne() {
	const swiperElRef = useRef(null);
	const nextButtonElRef = useRef(null);

	useEffect(() => {
		// listen for Swiper events using addEventListener
		swiperElRef.current.addEventListener("swiperprogress", (e) => {
			const [swiper, progress] = e.detail;
			console.log(progress);
		});

		swiperElRef.current.addEventListener("swiperslidechange", (e) => {
			console.log("slide changed");
		});
	}, []);

	return (
		<div className="pageSize">
			<div className="section">
			<swiper-container
					ref={swiperElRef}
					css-mode='true'
					loop='true'
					slides-per-view='1'
					navigation='false'
					pagination='true'>
					<swiper-slide>
						<Image
							className='slidesD'
							src={firstPD}
							width={1920}
							height={940}
						/>
						<Image
							className='slidesM'
							src={firstPM}
							width={1920}
							height={940}
						/>
					</swiper-slide>
					<swiper-slide>
					{/* <Image
							className='slidesD'
							src={secondtPD}
							width={1920}
							height={940}
						/>
						<Image
							className='slidesM'
							src={secondPM}
							width={1920}
							height={940}
						/> */}
					</swiper-slide>
				</swiper-container>
				<button
					ref={nextButtonElRef}
					className='slidebuttonprev'
					onMouseDown={(e) => (e.target.style.scale = 0.97)}
					onMouseUp={(e) => (e.target.style.scale = 1)}
					onMouseLeave={(e) => (e.target.style.scale = 1)}
					onClick={() => swiperElRef.current.swiper.slidePrev()}
				/>
				<button
					ref={nextButtonElRef}
					className='slidebuttonnext'
					onMouseDown={(e) => (e.target.style.scale = 0.97)}
					onMouseUp={(e) => (e.target.style.scale = 1)}
					onMouseLeave={(e) => (e.target.style.scale = 1)}
					onClick={() => swiperElRef.current.swiper.slideNext()}
				/>
			</div>
			<style jsx global>{`
				.pageSize {
					position: relative;
					width: 100%;
					padding-top: 50%;
					margin: auto;
					background-color: #0e0a0a;
				}

				.section {
					position: absolute;
					top: 0%;
					width: 100%;
					margin: auto;
					left: 50%;
					transform: translate(-50%);
				}
				.slidesD {
					display: none;
				}
				.slidesM {
					display: block;
				}
				swiper-container {
					width: 100%;
					height: 100%;
				}

				swiper-container::part(bullet) {
					background-color: white;
					margin-bottom: 6.5%;
				}
				swiper-container::part(bullet-active) {
					background-color: white;
					margin-bottom: 6.5%;
				}

				.slidebuttonnext {
					background-color: #404041;
					background-image: url(assets/slide-01.svg);
					width: 30px;
					height: 30px;
					border-radius: 100%;
					position: absolute;
					margin: auto;
					left: 86%;
					top: 93%;
					transform: translate(-50%, -50%);

					z-index: 5;
				}
				.slidebuttonprev {
					background-color: #404041;
					background-image: url(assets/slide-02.svg);
					width: 30px;
					height: 30px;
					border-radius: 100%;
					position: absolute;
					margin: auto;
					left: 13%;
					top: 93%;
					transform: translate(-50%, -50%);
					z-index: 5;
				}
				@media screen and (min-width: 768px) {
					// .pageSize {
					// 	padding-top: 49%;
					// }

					.slidebuttonnext {
						background-color: #404041;
						background-image: url(assets/slide-01.svg);
						width: 30px;
						height: 30px;
						border-radius: 100%;
						position: absolute;
						left: 91%;
						top: 50%;
						z-index: 5;
						opacity: 0.4;
						transition: 0.3s opacity;
					}
					.slidebuttonprev {
						background-color: #404041;
						background-image: url(assets/slide-02.svg);
						width: 30px;
						height: 30px;
						border-radius: 100%;
						position: absolute;
						left: 9%;
						top: 50%;
						z-index: 5;
						opacity: 0.4;
						transition: 0.3s opacity;
					}
					.slidebuttonnext:hover {
						opacity: 1;
					}
					.slidebuttonprev:hover {
						opacity: 1;
					}

					.slidesD {
						display: block;
					}
					.slidesM {
						display: none;
					}
				}
			`}</style>
		</div>
	);
}
