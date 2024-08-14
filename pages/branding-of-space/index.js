import Layout from "@/components/Layout"
import picture from "./برندینگ-فضا.jpg"
import pattern from "./برندینگ فضا-03.svg"
import Image from "next/image"
import NestedLayout from "@/components/nested-layout-fr"

export default function BrandCreation(){
    return(
        <div>
            <div className="firstPart">
                <Image src={picture} className="picture"></Image>
            </div>
            <div className="secondPart" style={{direction:"rtl"}}>
                <div className="pOne">
                    <p className="titleD">فضا</p>
                    <p className="titleM">فضا...</p>
                    <p>فضا صرفا یک محیط فیزیکی نیست. فضا محیطی است که می تواند روح داشته باشد، زنده باشد و زندگی خاصی را هدیه دهد. فضا، بستری است با کاربری و ویژگی مشخص که می تواند تجربه ای هوشمندانه،منحصر به فرد، یکپاچه و گیرا را برای مخاطبانی مشخص خلق کند. تجربه ای که گاهی پیش از مرحله طراحس معماری و اجرای یک کاربری،طراحی و برنامه ریزی می شود، دقیقا در همان لحظه ای که شما به عنوان مدیر یا سرمایه گذار به راه اندازی یک کسب و کار ودرنظر گرفتن فضایی درخور برای آن می اندیشید!</p>
                    <p style={{marginTop:"35px"}}>برندسازی یک فضا (با هر کاربری مانند ساختمان، مسکونی،مجتمع تجاری، نمایشگاه،کافه، رستوران و...)فراتر از ساخت یک بنا، طراحی لوگو، انتخاب نام و یا تبلیغ کسب و کار مربوط به آن روی بیلبورد و اینستاگرام است! فرآیندی یکپارچه، جامع و خلاق برای تسخیر ذهن و قلب مخاطب!</p>
                </div>
                <div className="PTwo">
                   <p>ما در حس یک نگاه به برندینگ فضا می پردازیم، به فرآیندی که بیشتر از آنکه به دنبال تبلیغات دهان پرکن باشد،به خلق تجربه ویژه می پردازد که معماری و تبلیغات بخشی از آن است،اما نه شروع کننده آن و نه حتی تمام آن!</p>  
                </div>
                <div className="PThree">
                   <p>ما در حس یک نگاه با تخصص های برندینگ، بازاریابی،بازارشناسی، روانشناسی، معماری و هنر خدمات جامعی را در این خصوص طراحی کرده ایم که در راستای همکاری با سرمایه گذاران و مدیران کسب و کارهای مکان محور، به صورت اختصاصی ارائه می شود؛ از تحقیقات بازار و ایده پردازی تا طراحی یکپارچه معماری و ساخت محیطی منحصر به  فرد برای خدمات و محصولات یک برند، از طراحی استراتژی برند، نام، شعار و هویت بصری برند تا طراحی و اجرای استراتژی های یکپارچه برندینگ و بازاریابی، از مدیریت کامل نقاط ارتباطی برند شما (وبسایت، اینستاگرام و...) تا آموزش منابع انسانی و طراحی راهکارهای خلاق حس یک نگاه برای برندسازی فضا با نگرشی متفاوت و ماندگار؛ همگی به شیوه ای یکپارچه و هوشمندانه برای خلق تجربه ی ویژه ی طراحی شده برای برند.</p> 
                </div>
                <div className="PFour">
                   <p>راهکارهای خلاق برند با هرگونه هدف و در هر میزان از حضور و نفوذ برند در بازار، قابل طراحی است. راهکار خلاق می تواند شامل ایده ای خلاق برای یک کمپین تبلیغاتی باشد یا یک رویداد ویژه برای مخاطبان خاص و یا تغییراتی در بخشی از کسب و کار و یا طراحی خدمتی هوشمندانه با داستانی جذاب یا ترکیبی از فعالیت های هدفمند و ادامه دارِ خلاق؛ همگی تقویت کننده و هم راستا با اهداف برندینگ و بازاریابی.</p> 
                </div>
                <div className="pattern">
                    <Image src={pattern} style={{width:"100%"}}></Image>
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
            </div><style>{`
                .titleD{
                    display: none;
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
                    margin-bottom:20%;
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
                .pOne{
                    margin-top: 60px;
                    font-size: 17px;
                    width: 75%;
                }
                .PTwo{
                    width: 75%;
                    font-size: 22px;
                    font-weight: 600;
                    margin-top: 40px;
                }
                p{
                    margin-bottom: 0px;
                }
                .PThree{
                   width: 75%;
                    font-size: 22px;
                    font-weight: 500;
                    margin-top: 40px;
                }
                .PFour{
                   width: 75%;
                    font-size: 22px;
                    font-weight: 500;
                    margin-top: 40px;
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
                    .titleM{
                        display: none;
                    }
                    .titleD{
                        display: block;
                        font-size: 20px;
                    }
                    .PThree{
                        font-size: 20px;
                        width: 85%;
                        color: black;
                        margin-top: 20px;
                    }
                    .pOne{
                        width: 85%;
                    }
                    .PTwo{
                        font-size: 17px;
                        width: 85%;
                        color: black;
                        margin-top: 80px;
                    }
                    .PFour{
                        display: none;
                    }
                    .pattern{
                        margin-top: 10%;
                        width: 80%;
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

BrandCreation.getLayout = function getLayout(page){
    return(
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}

