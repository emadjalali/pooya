import picture from "./picture.jpg"
import pattern from "./pattern.svg"
import patternTwo from "./patternTwo.svg"
import Image from "next/image"
import Layout from "@/components/Layout"
import NestedLayout from "@/components/nested-layout-fr"

export default function BrandBook(){
    return(
        <div>
            {/* <div className="">
                
            </div> */}
            <div className="firstPart">
                <h1 className="titleM">فراتر از برند بوک در صنعت ساختمان<br/>(سند اختصاصی راهنمای جامع برند)</h1>
                <h1 className="titleD">فراتر از برند بوک در صنعت ساختمان(سند اختصاصی راهنمای جامع برند)</h1>
                <Image src={picture} className="picture"></Image>
            </div>
            <div>
                    <Image  className="pattern" src={pattern}></Image>
            </div>
            <div className="secondPart" style={{direction:"rtl" ,textAlign: "justify", lineHeight: "26px"}}>
                <div className="POneD">
                <p>شاید مهمترین خدمتی که در حس یک نگاه به آن می پردازیم، پاسخ به این سوال مهم شما باشد : برند من چگونه تعریف می شود و برای تبدیل شدن به جایگاه رویایی اش چه مسیری باید طی کند؟ نگاه را بر آن داشت تا به تدوین سندی فراتر از یک برند بوک بیندیشد و در نهایت آن  را صرفا به سازمانهایی که اصالت و بلند پروازی را در صنعت ساختمان، معماری و شهرسازی برای برندشان در نظر گرفتند، پیشنهاد می کند.</p>
                </div>
                <div className="POneM">
                    <p style={{marginBottom:"30px"}}>شاید مهمترین خدمتی که در حس یک نگاه به آن می پردازیم، پاسخ به این سوال مهم شما باشد : برند من چگونه تعریف می شود و برای تبدیل شدن به جایگاه رویایی اش چه مسیری باید طی کند؟!</p>
                    <p>اجرای فرآیند برندینگ، به زیست منحصر به فرد و سعادتمندی برند می پردازد؛ به پیاده سازی دقیق استراتژی ها، راهکارها و فعالیت های طراحی شده.</p>
                </div>
                <div className="PThree">
                        <p style={{marginBottom:"30px"}} className="noneP">پاسخ به ایت سوال کلیدی، تیم چند تخصصه در حس یک نگاه را بر آن داشت تا به تدوین سندی فراتر از یک برند بوک بیندیشد و در نهایت آن  را صرفا به سازمانهایی که اصالت و بلند پروازی را در صنعت ساختمان، معماری و شهرسازی برای برندشان در نظر گرفتند، پیشنهاد می کند.</p>
                        <p>راهنمای جامع برند و برندینگ شامل سه بخش اصلی است که هر بخش از فصل های مختلفی تشکیل می شود:</p>
                </div>
                <div>
                        <Image  className="patternTwo" src={patternTwo}></Image>
                </div>
                <div className="PTwo">
                   <p className="Ptitle">استراتژی اختصاصی برند</p> 
                   <p>جایگاه برند</p> 
                   <p>چشم انداز و ماموریت برند</p> 
                   <p>معماری برند</p> 
                   <p>داستان برند</p> 
                   <p>ارزش های برند</p> 
                   <p>شخصیت برند</p> 
                   <p>تعهدات برند</p> 
                   <p>جوهره برند</p> 
                   <p>و المان های اختصاصی هر برند</p> 
                </div>
                <div className="PTwo">
                   <p className="Ptitle">طراحی جامع هویت برند(هویت بصری، کلامی، مفهومی)</p> 
                   <p>طراحی نام و تگ لاین برند</p> 
                   <p>طراحی هویت کلامی و لحن برند</p> 
                   <p>طراحی جامع هویت بصری برند</p> 
                   <p>طراحی هویت مفهومی برند</p> 
                </div>
                <div className="PTwo" style={{marginBottom:"10%"}}>
                   <p className="Ptitle">استراتژی های اختصاصی برندینگ و بازاریابی</p> 
                   <p>تشریح استراتژی کلان کسب و کار</p> 
                   <p>نقشه راه کلان کسب و کار</p> 
                   <p>راهکارهای اختصاصی برندینگ و بازاریابی</p> 
                   <p>کمپین های خلاق تبلیغاتی</p> 
                   <p>باید و نبایدهای برند</p> 
                   <p>استراتژی محتوا در فضای مجازی</p> 
                </div>

            </div>
            <div className="positionButtoms">
                <div>
                    <a className="buttomOne" href="#">دریافت مشاوره رایگان</a>
                </div>
                <div>
                    <a className="buttomTwo"  href="#">مقالات مرتبط</a>
                </div>
                <div>
                    <a className="buttomThree"  href="#">نمونه پروژه ها</a>
                </div>
            </div><style jsx global>{`
                .titleM{
                    margin-top: 80px;
                    margin-bottom: 30px;
                    width: 75%;
                    font-size: 20px;
                }
                .titleD{
                    display:none;
                }
                .buttomOne{
                    background-color: #939191;
                    padding: 9px;
                    color: white;
                    text-decoration: none;
                    width: 161px;
                    display: block;
                } 
                .buttomTwo{
                    background-color: #a3a2a2;
                    padding: 9px;
                    color: white;
                    text-decoration: none;
                    width: 161px;
                    display: block;
                    text-align: center;
                    margin-top: 13px;
                } 
                .buttomThree{
                    background-color: black;
                    padding: 9px;
                    color: white;
                    text-decoration: none;
                    width: 161px;
                    display: block;
                    text-align: center;
                    margin-top: 13px;
                }
                .positionButtoms{
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    align-items: center;
                    margin-bottom: 20%;
                }
                .firstPart{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-wrap: nowrap;
                }
                .secondPart{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-wrap: nowrap;
                }
                .POneD{
                    display:none;
                }
                .POneM{
                    margin-top: 60px;
                    font-size: 22px;
                    width: 75%;
                    font-family: system-ui;
                }
                .PTwo{
                    width: 75%;
                    font-size: 28px;
                    font-weight: 700;
                    margin-top: 40px;
                    color: #f48120;
                    margin-bottom:30px;
                    line-height: 11px;
                }
                p{
                    // margin-bottom: 0px;
                }
                .PThree{
                    font-size: 25px;
                    font-weight: 700;
                    width: 75%;
                    margin-top: 50px;
                }
                .pattern{
                    width: 2.75%;
                    position: absolute;
                    left: 5px;
                     margin-top: -54%;
                }
                .patternTwo{
                    position: absolute;
                    right: 0px;
                    width: 6%;
                    margin-top: -45%;
                }
                .picture{
                    width: 75%;  
                }
                .Ptitle{
                    font-size:25px;
                    color:black
                }
                @media screen and (min-width: 768px) {
                .titleD{
                    display:block;
                    margin-top: 80px;
                    margin-bottom: 30px;
                    width: 75%;
                    font-size: 24px;
                }
                .titleM{
                    display:none;
                }
                    .noneP{
                        display:none;
                    }
                    .picture{
                        width: 30%;  
                    }  
                    .PThree{
                        font-size: 20px;
                        width: 85%;
                    }
                    .POneM{
                        display:none;
                    }
                    .POneD{
                        display:block;
                        font-size: 16px;
                        width: 85%;
                        margin-top: 60px;
                        font-family: system-ui;
                    }
                    .PTwo{
                        font-weight: 400;
                        color: black;
                        width: 85%;
                        font-size: 22px;
                    }
                    .Ptitle{
                        font-weight: 400;
                        color: #f48120;
                        font-size: 22px; 
                    }
                    .pattern{
                        width: 25px;
                        left: 0;
                        margin-top: 0%;
                    }
                    .patternTwo{
                        width: 50px;
                        margin-top: 500px;
                    }
                    .positionButtoms {
                        display: flex;
                        flex-direction: row-reverse;
                        flex-wrap: nowrap;
                        align-items: flex-end;
                        justify-content: space-around;
                    }
                    .buttomTwo{background-color: #939191;}
                    .buttomThree{background-color: #939191;}
                }
            `}</style>
        </div>
    )
}

BrandBook.getLayout = function getLayout(page){
    return(
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}

// BrandDiscovery.getLayout = function getLayout(page) {
// 	return (
// 		<Layout>
// 			<NestedLayout>{page}</NestedLayout>
// 		</Layout>
// 	);
// };