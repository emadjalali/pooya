import pictureM from "./راه-کارهای-خلاق.jpg"
import pictureD from "./راه-کارهای-خلاق-D.jpg"
import pattern from "./pattern.svg"
import Image from "next/image"
import Layout from "@/components/Layout"
import NestedLayout from "@/components/nested-layout-fr"

export default function creativeSolution(){
    return(
        <div>
            {/* <div className="">
                
            </div> */}
            <div className="firstPart">
                <h1 className="title">راهکارهای خلاق حس یک نگاه</h1>
                <div className="pictureM">
                    <Image src={pictureM} style={{width:"100%"}}></Image>
                </div>
                <div className="pictureD">
                    <Image src={pictureD} style={{width:"35%"}}></Image>
                    <Image src={pattern} style={{width:"32%"}}></Image>
                </div>
            </div>
            <div className="secondPart" style={{direction:"rtl"}}>
                <div className="POne">
                   <p className="pD">راهکار به ایده یا مجموعه ایده هایی گفته می شود که برای پاسخگویی به چالش یا دستیابی به اهدافی مشخص طراحی و ارائه می شود.</p>
                   <p>خلاقیت نیز بیشتر از متفاوت بودن یا خاص بودن، نوعی نگرش است، نگرشی هوشمند که هرچه در نتیجه ی آن عمیق می شویم، جذابیت و اثربخشی اش را بیشتر درک میکنیم</p>
                </div>
                <div className="PTwo">
                    <p style={{marginBottom:"30px"}}>ما در حس یک نگاه، راهکارهای خلاق ارائه می کنیم. به صورت اختصاصی برای هر برند. ویژه ی برندهای علاقه مند به ارزش آفرینی و اصالت؛ ویژه ی دسته محدودی از سازندگان، معماران، شرکت های ساختمانی، برندهای تامین کننده و سرمایه گذاران و بهره برداران فضاهای خاص.</p>
                    <p>راهکارهای خلاق برند با هرگونه هدف و در هر میزان از حضور و نفوذ برند در بازار، قابل طراحی است. راهکار خلاق می تواند شامل ایده ای خلاق برای یک کمپین تبلیغاتی باشد یا یک رویداد ویژه برای مخاطبان خاص و یا تغییراتی در بخشی از کسب و کار و یا طراحی خدمتی هوشمندانه با داستانی جذاب یا ترکیبی از فعالیت های هدفمند و ادامه دار خلاق؛ همگی تقویت کننده و هم راستا با اهداف برندینگ و بازاریابی.</p>
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
                .title{
                    margin-top: 80px;
                    margin-bottom: 80px;
                    width: 75%;
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
                    font-size: 23px;
                    width: 75%;
                    font-family: system-ui;
                }
                p{
                    margin-bottom: 0px;
                }
                .PTwo{
                    font-size: 26px;
                    font-weight: 700;
                    width: 75%;
                    margin-top: 50px;
                    margin-bottom: 100px;
                }
                .pictureM{
                    width: 100%;  
                }
                .pictureD{
                    display:none;  
                }
                .pD{
                  margin-bottom: 30px;  
                }
                @media screen and (min-width: 768px) {
                    .title{
                        margin-bottom: 50px;
                        width: 80%;
                        font-size: 25px;
                    }
                    .pictureM{
                        display:none;  
                    } 
                    .pictureD{
                        display: flex;
                        width: 100%;
                        flex-direction: row-reverse;
                        align-items: flex-end;
                        justify-content: flex-end;
                    } 
                    .pD{
                        margin-bottom: 0px;  
                    }
                    .PTwo{
                        font-size: 20px;
                        width: 35%;
                    }
                    .POne{
                        font-size: 17px;
                        width: 35%;
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

creativeSolution.getLayout = function getLayout(page){
    return(
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}

