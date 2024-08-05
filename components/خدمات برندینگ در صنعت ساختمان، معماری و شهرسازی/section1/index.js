"use client";
import Image from "next/image";

import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
register();

// import Swiper styles
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
		<div className='pageSize'>
			<div className='section' style={{ direction: "ltr" }}>
				{/* <!-- Additional required wrapper --> */}
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
							src='/Artboard-1D.png'
							width={1920}
							height={940}
						/>
						<Image
							className='slidesM'
							src='/Artboard-1M.png'
							width={900}
							height={1500}
						/>
					</swiper-slide>
					<swiper-slide>
						<Image
							className='slidesD'
							src='/Artboard-2D.png'
							width={1920}
							height={940}
						/>
						<Image
							className='slidesM'
							src='/Artboard-2M.png'
							width={900}
							height={1500}
						/>
					</swiper-slide>
					<swiper-slide>
						<Image
							className='slidesD'
							src='/'
							width={1920}
							height={940}
						/>
						<Image
							className='slidesM'
							src='/Artboard-3M.png'
							width={900}
							height={1500}
						/>
					</swiper-slide>
					<swiper-slide>
						<Image
							className='slidesD'
							src='/'
							width={1920}
							height={940}
						/>
						<Image
							className='slidesM'
							src='/Artboard-4M.png'
							width={900}
							height={1500}
						/>
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
					padding-top: 167%;
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

				.feeling {
					position: absolute;
					margin: 0 auto;
					left: 50%;
					transform: translate(-50%);
					top: 91%;
					z-index: 5;
					max-width: 16%;
				}
				@media screen and (min-width: 768px) {
					.pageSize {
						padding-top: 49%;
					}

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

					.feeling {
						position: absolute;
						margin: 0 auto;
						left: 50%;
						transform: translate(-50%);
						top: 87%;
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
