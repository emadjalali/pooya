/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Tel from "./footerItem/telgram.svg";
import X from "./footerItem/x.svg";
import In from "./footerItem/in.svg";
import Insta from "./footerItem/insta.svg";

export default function Footer() {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("درخواست شما با موفقیت ثبت شد");
	};

	return (
		<div className='main'>
			<div className=''>
				<div className='Container'>
					<div className='partOne'>
						<div className='myContainer'>
							<div className='pRight'>
								<div>مقالات کاربردی</div>
								<div>اخبار</div>
								<div>آموزش های تخصصی</div>
							</div>
							<div className='pLeft'>
								<div>برند بوک در صنعت ساختمان</div>
								<div>طراحی هویت یکپارچه برند</div>
								<div>
									دیجیتال مارکتینگ، طراحی وبسایت و مدیریت فضای مجازی
								</div>
								<div>استراتژی محتوا در فضای مجازی</div>
								<div>طراحی و پیاده سازی کمپین های تبلیغاتی</div>
								<div>
									برندینگ بین المللی ویژه ی فعالان صنعت ساختمان و
									معماری
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='logo'>
							<img
								src='/assets/Untitled-2-66.svg'
								alt='footer-logo'
								className='footerLogo'
							/>
						</div>
						<div className='box'>
							<div className='icons'>
								<a href='#'>
									<Image
										src={Insta}
										width='15%'
										alt=''
										className='footer-social-icon'
										style={{ width: "22px" }}
									/>
								</a>
								<a href='#'>
									<Image
										src={Tel}
										width='15%'
										alt=''
										className='footer-social-icon'
										style={{ width: "22px" }}
									/>
								</a>
								<a href='#'>
									<Image
										src={In}
										width='15%'
										alt=''
										className='footer-social-icon'
										style={{ width: "22px" }}
									/>
								</a>
								<a href='#'>
									<Image
										src={X}
										width='15%'
										alt=''
										className='footer-social-icon'
										style={{ width: "22px" }}
									/>
								</a>
							</div>
							<div className='socialAndAddMain'>
								<div className='num'>021 - 22 72 40 59</div>
								<div className=''>info@feelingofalook.com</div>
							</div>
							<div className='address'>
								<p>
									نیاوران،خیابان مژده،
									<br />
									کوچه قادری،پلاک2،
									<br />
									زنگ5
								</p>
							</div>
						</div>
					</div>
					<div className='partThree'>
						<div className='textMid'>
							برای آگاهی از آخرین دستاوردها، پروژه ها، رویدادها
							<br />و پیشنهادات، عضو خبرنامه حس یک نگاه شوید.
						</div>
						<div className='formD'>
							<form className='mt-2' onSubmit={handleSubmit}>
								<input
									id='email'
									name='email'
									placeholder='ایمیل شما'
									type='email'
									className='footer-submit-input'
								/>
								<button className='footer-submit-button'>ارسال</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.main {
					height: 100%;
				}
				.Container {
					display: flex;
					justify-content: center;
					padding: 0px 20px 0px 20px;
					flex-wrap: wrap;
					flex-direction: column;
				}
				.myContainer {
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					color: gray;
					justify-content: center;
				}
				.pRight {
					font-size: 12px;
					// padding-top:50px;
				}
				.pLeft {
					text-align: end;
					margin-right: 2px;
					font-size: 12px;
				}
				.logo {
					justify-items: center;
    				display: grid;
					margin-top: 20px;
				}
				.icons {
					display: flex;
					flex-wrap: nowrap;
					justify-content: center;
					flex-direction: row-reverse;
					margin-top: 5px;
				}
				.socialAndAddMain {
					color: gray;
					margin-top: 20px;
					display: flex;
					flex-direction: column;
					flex-wrap: nowrap;
					align-items: center;
				}
				.textMid {
					font-family: "iranyekanBoldnum";
					font-size: 12px;
					margin-top: 35px;
					color: gray;
					text-align-last: justify;
				}
				.num {
					direction: ltr;
					font-size: 24px;
				}
				.formD {
					display: flex;
					align-items: flex-end;
					justify-content: center;
				}
				.logoD {
					display: flex;
					align-items: flex-end;
					justify-content: center;
				}
				.footerLogo {
					width: 90px;
				}
				.address {
					display: none;
				}
				.partThree {
					display: flex;
					flex-direction: column;
					align-items: center;
					flex-wrap: nowrap;
				}
				@media screen and (min-width: 768px) {
					.main {
						height: 220px;
					}
					.Container {
						display: block;
						position: relative;
					}
					.partOne {
						position: absolute;
						bottom: -190px;
						right: 30px;
					}
					.myContainer {
						display: flex;
						color: #036e96;
						flex-wrap: wrap;
						align-items: flex-start;
						flex-direction: column;
					}
					.pLeft {
						direction: ltr;
						font-size: 9px;
						margin-top: 15px;
					}
					.partThree {
						position: absolute;
						left: 37%;
						bottom: -175px;
					}
					.box {
						position: absolute;
						left: 120px;
						bottom: -195px;
						display: flex;
						flex-wrap: wrap;
						flex-direction: column-reverse;
					}
					.socialAndAddMain {
						font-size: 10px;
						color: #f48120;
					}
					.num {
						direction: ltr;
						font-size: 15px;
					}
					.formD {
						width: 200px;
					}
					.logo {
						position: absolute;
						left: 47%;
						bottom: -85px;
					}
					.textMid {
						font-size: 10px;
					}
					.address {
						color: #f48120;
						font-size: 14px;
						display: block;
						text-align: center;
					}
					.socialAndAddMain {
						margin-top: -5px;
					}
				}
				@media screen and (min-width: 1090px) {
					.partThree {
						left: 42%;
					}
					.pLeft {
						font-size: 11px;
					}
				}
			`}</style>
		</div>
	);
}
