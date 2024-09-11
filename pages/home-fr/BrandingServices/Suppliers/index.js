import pictureM from "./pictureM.jpg"
import pictureD from "./pictureD.jpg"
import patternD from "./pattern.svg"
import Image from "next/image"
import Layout from "@/components/Layout"
import NestedLayout from "@/components/nested-layout-fr"

export default function Suppliers(){
    return(
        <div>
            <div className="patternPart">
                <div className="pattern">
                    <Image src={patternD} style={{width:"5%"}}></Image>
                </div>
                </div>
            <div className="firstPart">
                <h1 className="title">برندینگ برای تامین کنندگان صنعت ساختمان و معماری</h1>
                <div className="pictureM">
                    <Image  style={{width:"100%"}} src={pictureM}></Image>
                </div>
                <div className="pictureD">
                    <Image src={pictureD}></Image>
                </div>
            </div>
            <div className="secondPart" style={{direction:"rtl", textAlign: "justify", lineHeight: "30px"}}>
                <div className="POne">
                    <p className="PD">آنچه کمک میکند یک ساختمان،«ساختمان» شود، متریال، تکنولوژی، خدمات زیرمجموعه معماری و ساخت و ساز است. اما آنچه بستر این نقش آفزینی را برای یک متریال یا تکنولوژی، ساختمانی فراهم می کند، مجموعه ویژگی هایی منطقی-احساسی و مشهود-نامشهود است که برند نامیده می شود!</p>
                   <p>برند با تعریف اصولی آن، چیزی فراتر از لوگو، تبلیغات دهان پرکن یا حتی کیفیت محصولات و خدمات یک تامین کننده در صنعت ساختمان و معماری است. ما در حس یک نگاه به صورت تخصصی به طراحی، توسعه و اجرای فرآیند برندسازی ویژه تامین کنندگان متریال و خدمات زیرمجموعه صنعت ساخت و ساز می پردازیم.</p>
                </div>
                <div className="PTwo">
                    <p>ما این کار را با شناخت شما و نگرشتان، محصول یا خدماتتان، نقاط ضعف و قوتتان و بررسی بازار و البته در نظر گرفتن صنفتان شروع می کنیم. سپس با توجه به بینش متخصصان حس یک نگاه به شناخت بازار، بازاریابی، بازارسازی و آینده نگری در صنعت ساختمان، جلساتی را پیرامون ابعاد مختلف برند شما برقرار می کنیم تا به صورت اصولی به ارائه خدمات برندسازی ویژه کسب و کار شما بپردازیم:</p>
                </div>
                <div className="PThree">
                    <p>برای خلق برند:طراحی استراتژی برند</p>
                    <p>برای رشد برند: طراحی استراتژی های برندینگ و بازاریابی</p>
                    <p>ودر نهایت اجرای صفر تا صد فرآیند برندینگ منطبق برای استراتژی های طراحی شده</p>
                </div>
                <div className="PFour">
                    <p>ما برای تامین کنندگانی که به اعتبار، اصالت و ماندگاری خود اهمیت می دهند، به طراحی و پیاده سازی فرآیندی می اندیشیم که علاوه بر سود مادی روزافزون در این بازار و بازار پیش رو، لذت های معنوی بسیاری را برای مدیران و مالکان برند به ارمغان بیاورد.</p>
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
                    margin-top: 60px;
                    margin-bottom: 50px;
                    width: 90%;
                    font-size: 20px;
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
                    font-size: 25px;
                    width: 75%;
                    font-family: system-ui;
                }
                .PTwo{
                    font-size: 29px;
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
                    margin-top: 30px;
                    font-size: 25px;
                    width: 75%;
                    font-family: system-ui;
                    margin-bottom: 80px;
                }
                .pictureM{
                    width: 100%;  
                }
                .pictureD{display:none;}
                .pattern {
	                display: none;
				}
                @media screen and (min-width: 768px) {
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
                    .pictureM{display:none;} 
                    .pictureD{
                        display: flex;
                        width: 80%;
                        // flex-wrap: nowrap;
                        // flex-direction: row-reverse;
                        // align-items: stretch;
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
                        font-size: 20px;
                        width: 80%;
                        font-family: '__myFont_c3a675';
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

Suppliers.getLayout = function getLayout(page){
    return(
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}

