import picture from "./اجرای-یکپارچه-برند.jpg"
import pattern from "./pattern.svg"
import Image from "next/image"
import Layout from "@/components/Layout"
import NestedLayout from "@/components/nested-layout-fr"

export default function IntegratedComponents(){
    return(
        <div>
            {/* <div className="">
                
            </div> */}
            <div className="firstPart">
                <h1 className="title">اجرای یکپارچه فرایند برندینگ</h1>
                <Image src={picture} className="picture"></Image>
            </div>
            <div className="secondPart" style={{direction:"rtl", textAlign: "justify", lineHeight: "26px"}}>
                <div className="POne">
                    <p style={{marginBottom:"30px"}}>اگر کشف کردهایم که ما (کسب و کارمان) در این جهان (بازار امروز) چیستیم، برای چه هستیم و چگونه بودنمان معنی پیدا میکند، اکنون وقت زندگی است! وقت حضور و نمایشی تمام قد یا همان «اجرایی یکپارچه برندینگ»؛</p>
                    <p>اجرای فرآیند برندینگ، به زیست منحصر به فرد و سعادتمندی برند می پردازد؛ به پیاده سازی دقیق استراتژی ها، راهکارها و فعالیت های طراحی شده.</p>
                </div>
                <div className="PThree">
                    <p>گروه های اجرایی حس یک نگاه و شرکت های همکار در این بخش، اطمینان حاصل میکنند که مخاطبان هدف، همان مفاهیمی را برداشت میکنند که بیشتر به عنوان استراتژی برند طراحی شده بود، چرا که هدف غایی برندینگ، انطباق آنچه شما به آن باور دارید با آنچه مخاطب شما از شما باور دارد، است و تنها در این حالت است که برند به معنای واقعی محقق می شود. ما این کار را به روش های مختلف پیاده و آن را دائما ارزیابی می کنیم:</p>
                </div>
                <div className="PTwo"> 
                   <p>طراحی نقاط ارتباطی برند</p> 
                   <p>تولید محتوای تخصصی</p> 
                   <p>طراحی و مدیریت وبسایت</p> 
                   <p>مدیریت شبکه های اجتماعی</p> 
                   <p>طراحی و اجرای کمپین های برندینگ و بازاریابی</p> 
                   <p>خرید و مدیریت رسانه</p> 
                   <p>دیجیتال مارکتینگ</p> 
                   <p>طراحی و برگزاری رویدادهای اختصاصی</p> 
                   <p>آموزش منابع انسانی</p> 
                   <p>طراحی اقلام تبلیغاتی برند</p> 
                   <p>فعالیت های ارتباطات یکپارجه برند</p> 
                   <p>مشارکت در خلق فضا و ساختمان های ماندگار تحت نام برند</p> 
                </div>

                <div className="pattern">
                    <Image src={pattern} style={{width:"85%"}}></Image>
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
            </div><style jsx>{`
                .title{
                    margin-top:15%;
                    margin-bottom: 80px;
                    width: 80%;
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
                .POne{
                    margin-top: 60px;
                    font-size: 22px;
                    width: 80%;
                }
                .PTwo{
                    width: 75%;
                    font-size: 25px;
                    font-weight: 700;
                    margin-top: 40px;
                    color: orange;
                    line-height: 25px;

                }

                .PThree{
                    font-size: 28px;
                    font-weight: 700;
                    width: 75%;
                    margin-top: 50px;
                }

                .pattern{
                    width: 100%;
                    margin-bottom: 60px;
                    margin-top: 14%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .picture{
                    width: 100%;  
                }
                .Ptitle{
                    font-size:24px;
                    color:black
                }
                @media screen and (min-width: 768px) {
                    .picture{
                        width: 85%;  
                    }  
                    .PThree{
                        font-size: 23px;
                        width: 85%;
                        font-weight: 800;
                    }
                    .POne{
                        font-size: 18px;
                        width: 85%;
                    }
                    .PTwo{
                        font-weight: 400;
                        color: #ffb733;
                        width: 85%;
                        font-size: 22px;
                    }
                    .Ptitle{
                        font-weight: 400;
                        color: #ffca69;
                        font-size: 18px; 
                    }
                    .pattern{
                        margin-top: 10%;
                        margin-bottom: 5%;
                    }
                    .positionButtoms {
                        display: flex;
                        flex-direction: row-reverse;
                        flex-wrap: nowrap;
                        align-items: flex-end;
                        justify-content: space-around;
                        margin-bottom:-5%;
                    }
                    .buttomTwo{background-color: #939191;}
                    .buttomThree{background-color: #939191;}
                }
            `}</style>
        </div>
    )
}

IntegratedComponents.getLayout = function getLayout(page){
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