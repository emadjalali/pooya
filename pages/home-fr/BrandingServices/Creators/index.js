import pictureM from "./pictureM.jpg"
import pictureD from "./pictureD.jpg"
import patternD from "./pattern.svg"
import Image from "next/image"
import Layout from "@/components/Layout"
import NestedLayout from "@/components/nested-layout-fr"

export default function Creators(){
    const handleSubmit = (e) => {
		e.preventDefault();
		alert("درخواست شما با موفقیت ثبت شد");
	};
    return(
        <div>
            <div className="patternPart">
                <div className="pattern">
                    <Image src={patternD} style={{width:"5%"}}></Image>
                </div>
            </div>
            <div className="firstPart">
                <h1 className="title">برندینگ برای سازندگان و توسعه دهندگان املاک</h1>
                <div className="pictureM">
                    <Image  style={{width:"100%"}} src={pictureM}></Image>
                </div>
                <div className="pictureD">
                    <Image src={pictureD}></Image>
                </div>
            </div>
            <div className="secondPart" style={{direction:"rtl"}}>
                <div className="POne">
                   <p>حس یک نگاه برای شرکت های ساختمانی، توسعه دهندگان املاک و مستغلات و سازندگانی که کسب و کارشان را فراتر از ساختمان سازی میبینند، برنامه هایی اصولی، نواورانه، اثربخش و مدون طراحی کرده است؛ برای سازندگان یا شرکت های ساختمانی ای که در پی ارزش آفرینی، ماندگاری، منحصر به فرد بودن در کنار منفعت روز افزون مادی و معنوی هستند.</p>
                </div>
                <div  className="PFour">
                    <p>ما در حس یک نگاه، پیش از هرچیز شما را به عنوان یک سازنده معتبر یا هولدینگ ساختمانی، خالق می دانیم؛ خالق ساختمان هایی که شاید تا پایان عمرمان و حتی بعد از آن یادآور جریان زندگی درون آن و خالقانشان باشد. از این رو برندینگ یک سازنده یا توسعه دهنده املاک را تنها در طراحی لوگو، وبسایت یا صفحه اینستاگرام خلاصه نمی کنیم. ما به کمک شما و برای شما برندی اصیل می سازیم.</p>
                </div>
                <div className="PTwo">
                    <p>برای اینکار ابتدا با روش ها و ابزارهای مختلف به توسعه شناخت از شما و یا شرکت ساختمانی شما می پردازیم و سعی در کشف (یا خلق) ماهیت ارزشمند آن می کنیم. سپس و با توجه به نگرش، بینش و تحلیل هایی که نسبت به بازار ساخت و ساز و آینده آن داریم، مراحل زیر را پیش می گیریم:</p>
                </div>
                <div className="PThree">
                    <p>برای خلق برند سازنده:طراحی استراتژی برند</p>
                    <p>برای رشد برند سازنده: طراحی استراتژی های برندینگ و بازاریابی</p>
                    <p>و در نهایت اجرای اصولی فرآیند برندینگ که منطبق بر استراتژی های اختصاصی خواهد بود</p>
                </div>
                <div className="POne" style={{marginTop:"30px"}}>
                   <p>برندینگ برای یک هلدینگ ساختمانی یا شرکت توسعه دهنده پروژه های ساختمانی، به معنای امروزی و اصولی، بیش از هر چیز، یک نگرش یکپارچه در تمامی جزئیات کسب و کار است؛ از اعتقادات مدیران تا هویت بصری، از کمپین های خلاق معرفی ساختمان و فعالیت های سازمان تا مدیریت و رفتار منابع انسانی، از طراحی وبسایتی هوشمندانه و خلاق تا چگونگی مدیریت اجرای پروژه ها، واگذاری و خدمات پس از فروش... همه و همه به صورت یکپارچه و منطبق بر استراتژی های اختصاصی طراحی شده برای برند. ما در حس یک نگاه تمامی این فرایند و دستورالعمل ها را در قالب سندی جامع و اختصاصی به نام«فراتر از برند بوک» طراحی و پیاده سازی می کنیم.</p>
                </div>
                <div className="PFour">
                    <p className="DStyle">برای دریافت مشاوره تخصصی پیرامون خدمات برندینگ ویژه ی سازندگان، هلدینگ های ساختمانی و توسعه دهنگان املاک از این طریق اقدام کنید.</p>
                </div>
            </div>
            <div className="FormPosition" style={{textAlign:"center" , marginBottom:"100px"}}>
                <label className="label">برای دریافت مشاوره و اطلاعات بیشتر،<br/> شماره همراه خود را ارسال کنید.</label>
                <form className='form' onSubmit={handleSubmit}>
					<input
						id='number'
						name='number'
						placeholder='0912'
						type='number'
						className='footer-submit-input'
					/>
					<button style={{backgroundColor:"black"}} className='footer-submit-button'>ارسال</button>
				</form>
            </div>
            <div className="LastPart">
            <div className="patternTwo">
                <Image src={patternD} className="svg"></Image>
            </div>
            <div className="LastP ">
                <p className="PD">مقلات مرتبط:</p>
                <p className="PD"> برندسازی برای سازندگان در حس یک نگاه به چه کسب و کارهایی پیشنهاد می شود؟</p>
                <p>آیا برندسازی ساختمان و سازنده آن از هم جداست؟مسیر برندسازی سازنده و ساختمان هایش چگونه انجام می شود؟</p>
            </div>
            </div><style>{`
                .svg{
                  width: 8%;  
                }
                .title{
                    margin-top: 60px;
                    margin-bottom: 40px;
                    width: 75%;
                    font-size: 27px;
                }
                .label{
                    font-size: 18px;
                    color: black;
                    margin-bottom: 2px;
                    text-align-last: justify;
                    // font-weight: 700;
                    margin-top: 50px;
                }
                .footer-submit-input{
                    direction: ltr;
                }
            	.form{
					display: flex;
					align-items: flex-end;
					justify-content: center;
				}
                .firstPart{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-wrap: nowrap;
                }
                .LastPart{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-wrap: nowrap;
                    margin-bottom: 25%;
                }
                .secondPart{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-wrap: nowrap;
                }
                .POne{
                    margin-top: 60px;
                    font-size: 23px;
                    width: 75%;
                    font-family: system-ui;
                }
                .LastP{
                    margin-top: 60px;
                    font-size: 23px;
                    width: 75%;
                    font-family: system-ui;
                }
                .PTwo{
                    font-size: 26px;
                    font-weight: 700;
                    width: 75%;
                    margin-top: 50px;
                    margin-bottom: 30px;
                }
                .PD{
                    margin-bottom:30px;
                }
                .PThree{
                    font-size: 30px;
                    width: 75%;
                    color: #10566f;
                }
                .PFour{
                    margin-top: 40px;
                    font-size: 25px;
                    width: 75%;
                    font-family: '__myFont_c3a675';
                }
                p{margin-bottom:0px;}
                .pictureM{
                    width: 75%;  
                }
                .pictureD{display:none;}
                .pattern {
	                display: none;
				}
                .patternTwo{
                    width: 75%;
                    margin-top: -6px;
                    margin-bottom: -40px;
                }
                @media screen and (min-width: 768px) {
                    .FormPosition{
                        display:none;
                    }
                    .LastP{
                        display:none;
                    }
                    .title{
                        margin-top:0px;
                        margin-bottom: 50px;
                        width: 80%;
                        font-size: 25px;
                    }
                    .patternPart{
                        display: flex;
                        flex-direction: column;
                        flex-wrap: nowrap;
                        align-items: center;
                    }
                    .pattern{
                        display:block;
                        width: 85%;
                        margin-top: 60px;
                        margin-bottom: 10px;
                    }
                    .patternTwo{
                            width: 80%;
                            margin-top: 60px;
                            margin-bottom: -40px;
                    }
                    .pictureM{display:none;} 
                    .pictureD{
                        display: flex;
                        width: 55%;
                    } 
                    .pD{
                        font-size: 17px;
                        font-family: '__myFont_c3a675';  
                    }
                    .PTwo{
                        font-size: 20px;
                        width: 80%;
                        margin-bottom: 20px;
                    }
                    .POne{
                        font-size: 17px;
                        width: 80%;
                    }
                    .PThree{
                        font-size: 22px;
                        width: 80%;
                    }

                    .PFour{
                        margin-top: 25px;
                        font-size:15px ;
                        width: 80%;
                        font-family: system-ui;
                    }
                    .LastPart{
                        margin-bottom: 0%;
                    }
                    .svg{
                        width: 4%;  
                    }
            `}</style>
        </div>
    )
}

Creators.getLayout = function getLayout(page){
    return(
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}

