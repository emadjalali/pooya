import picture from "./picture.jpg"
import patternD from "./pattern.svg"
import patternTwo from "./patternTwo.svg"
import Image from "next/image"
import Layout from "@/components/Layout"
import NestedLayout from "@/components/nested-layout-fr"

export default function City(){
    return(
        <div>
            <div className="patternPart">
                <div className="patternOne">
                    <Image src={patternD} style={{width:"5%"}}></Image>
                </div>
                </div>
            <div className="firstPart">
                <h1 className="title">برندینگ شهری</h1>
                <Image src={picture} className="picture"></Image>
                {/* <div className="pictureM">
                    <Image  style={{width:"100%"}} src={pictureM}></Image>
                </div>
                <div className="pictureD">
                    <Image src={pictureD}></Image>
                </div> */}
            </div>
            <div className="secondPart" style={{direction:"rtl"}}>
                <div className="POne">
                    <p style={{marginBottom:"30px"}}>برند یک شهر ، همه آن چیزی است که شهروندان، ساکنین و مخاطبان شهر از آن در ذهن و قلب خود دارند. اگر مدیر، مسئول شهری یا تصمیم گیرنده شهر یا بخشی از آن هستید، از خود این سوال را بپرسید:</p>
                    <p className="PD">آیا فعالیت هایی که تا کنون در شهر رقم زده اید، موجب شده است که در باور شهروندان یا گردشگران، آن چیزی شکل بگیرد که برایش برنامه ریزی و تلاش کرده اید؟!</p>
                    <p>برندینگ شهری (یا برندسازی شهری) مجموعه فعالیت هایی است که به مرور موجب می شود مخاطبان شهر، حتی با شنیدن نام آن شهر ، همان تصویر و احساس منحصر به فردی را تجربه کنند که برایش از سال ها پیش برنامه ریزی کرده ایم؛ چه برسد به این که آنجا اوقاتی را سپری کنند!</p>
                </div>
                <div className="PTwo">
                    <p>برند شهری همین قدر کمال گرایانه، پیچیده و حیاتی است! اما بی شک اقدامات خرد، کوچک و محدود نیز، مهم و اثربخش است. ما در حس یک نگاه به ارائه خدمات تخصصی برندینگ شهری در مقیاس شهر، محله، خیابان، مجتمع و فضا می پردازیم</p>
                </div>
                <div className="PThree">
                    <p className="FirstLine">خدماتی از قبیل:</p>
                    <p>طراحی برنامه جامع استراتژیک برندسازی شهری(یا فضاهای شهری)</p>
                    <p>طراحی و اجرای راهکارهای خلاق برندسازی شهری </p>
                    <p>طراحی هویت شهری یا فضاهای شهر</p>
                    <p>طراحی و بازآفرینی فضاهای شهر</p>
                    <p>رویدادهای خلاق شهری</p>
                    <p>هنر شهری</p>
                    <p>طراحی مبلمان شهری</p>
                    <p>طراحی منظر شهری با رویکرد یکپارچه برند</p>
                    <p>مستندسازی و ساخت مستندهای شهری</p>
                    <p>تبلیغات و ارتباطات یکپارچه برند برای شهری و فضاهای شهری</p>
                    <p>مشاوره و آموزش مباحث برندینگ شهری ویژه مدیران و مسئولان دغدغه مند شهر</p>
                </div>
                {/* <div className="PFour">
                    <p>ما برای تامین کنندگانی که به اعتبار، اصالت و ماندگاری خود اهمیت می دهند، به طراحی و پیاده سازی فرآیندی می اندیشیم که علاوه بر سود مادی روزافزون در این بازار و بازار پیش رو، لذت های معنوی بسیاری را برای مدیران و مالکان برند به ارمغان بیاورد.</p>
                </div> */}
            </div>
            <div className="patternTwo">
                <Image src={patternTwo} style={{width:"30%"}}></Image>
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
            </div><style>{`
                .title{
                    margin-top: 60px;
                    width: 75%;
                    font-size: 30px;
                }
                .buttomOne{
                    background-color: #939191;
                    padding: 9px;
                    color: white;
                    text-decoration: none;
                    width: 161px;
                    display: block;
                    text-align: center;
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
                .FirstLine{
                    color:black;
                }
                p{margin-bottom:0px;}
                .picture{
                    width: 90%;  
                }
                .patternOne {
	                display: none;
				}
                .patternTwo {
	                width: 100%;
                    margin-bottom: 50px;
                    margin-top: 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
				}
                @media screen and (min-width: 768px) {
                    .title{
                        margin-top:0px;
                        width: 80%;
                        font-size: 27px;
                    }
                    .patternPart{
                        display: flex;
                        flex-direction: column;
                        flex-wrap: nowrap;
                        align-items: center;
                    }
                    .patternOne{
                        display:block;
                        width: 85%;
                        margin-top: 60px;
                        margin-bottom: 10px;
                    }
                    .picture{
                        width: 70%;
                    }
                    .patternTwo {
                        display: none;
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
                        margin-bottom: 50px;
                    }
                    .FirstLine{
                        font-size:20px;
                        color: #2687a9;
                        font-family: system-ui;
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

City.getLayout = function getLayout(page){
    return(
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}

