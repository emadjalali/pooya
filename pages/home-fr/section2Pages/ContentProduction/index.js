import picture from "./picture.jpg"
import patternM from "./patternM.svg"
import patternOneD from "./patternOneD.svg"
import patternTwoD from "./patternTwoD.svg"
import Image from "next/image"
import Layout from "@/components/Layout"
import NestedLayout from "@/components/nested-layout-fr"

export default function ContentProduction(){
    return(
        <div>
            {/* <div className="">
                
            </div> */}
            <div className="firstPart">
                <h1 className="title">تولید محتوای تخصصی و اختصاصی</h1>
                <div className="pictureM">
                    <Image  style={{width:"100%"}} src={picture}></Image>
                </div>
                <div className="pictureD">
                    <Image src={patternOneD} style={{width:"30%"}}></Image>
                    <Image src={picture}  style={{width:"40%"}}></Image>
                    <Image src={patternTwoD} style={{width:"30%"}}></Image>
                </div>
            </div>
            <div className="secondPart" style={{direction:"rtl"}}>
                <div className="POne">
                   <p>در برندسازی، تنها یک تعریف برای محتوای خوب وجود دارد؛ محتوای خوب، محتوایی است که ازطرفی بیانگر جایگاه منحصر به فرد، هویت و ارزش های برنامه ریزی شده برند باشد و از طرفی دیگر مخاطب برند، با آن ارتباطی عمیق برقرار کند.</p>
                </div>
                <div className="PTwo">
                    <p className="pD">ما در حس یک نگاه، محتوای خوب تهیه می کنیم! محتوای تخصصی و اختصاصی ویژه ی صنعت ساختمان، معماری و البته فضاهای خاص.</p>
                    <p>حس یک نگاه با بهره مندی از گروه ها و منابع انسانی متخصص به تولید محتوای اختصاصی برای برند شما می پردازد. همکاران ما در واحد تولید محتوا با درک معماری، فضا و برندینگ و با تخصص های عکاسی، فیلمبرداری، گرافیک، تدوین، کپی رایتینگ و... به تولید انواع محتوای عکس، فیلم، متن، گرافیک و... با رویکردی حرفه ای و منطبق بر اهداف و جایگاه برند شما می پردازند.</p>
                </div>
                <div className="PThree">
                    <p>ویلا، ساختمان و مجتمع های مسکونی، تجاری، فرهنگی، هتل و...</p>
                    <p>پروژه های ارزشمند معماری</p>
                    <p>فضاهای خاص کست و کارها(کافه، رستوران، گالری، فروشگاه و فضاهای خاص)</p>
                    <p>شهر</p>
                    <p>محصولات و تکونولوژی های ساختمانی و معماری</p>
                </div>
                <div className="PTwo">
                    <p>اینکه برند شما به چه نوع محتواهایی و با چه سناریو و اهدافی نیاز دارد، چیزهایی است که به صورت اختصاصی برای ساخمان، فضا و برند شما برنامه ریزی می شود، بنابراین پیشنهاد می کنیم پیش از تولید محتوا نیم نگاهی به طراحی استراتژی برند/ استراتژی های برندیگ و بازاریابی داشته باشید و یا با مشاوران حس یک نگاه برای تولید محتوای منطبق با برندتان تماس بگیرید.</p>
                </div>
            </div>
            <div className="patternM">
                <Image src={patternM} style={{width:"100%"}}></Image>
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
                    margin-bottom: 50px;
                    width: 80%;
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
                .pD{
                    margin-bottom:30px;
                    font-size:26px;
                }
                .PThree{
                    font-size: 30px;
                    width: 75%;
                    color: gray;
                }
                p{margin-bottom:0px;}
                .pictureM{
                    width: 100%;  
                }
                .pictureD{display:none;}
                .patternM{margin-bottom: 60px;}
                @media screen and (min-width: 768px) {
                    .title{
                        margin-bottom: 50px;
                        width: 80%;
                        font-size: 25px;
                    }
                    .patternM{
                        display:none;  
                    }
                    .pictureM{display:none;} 
                    .pictureD{
                        display: flex;
                        width: 100%;
                        flex-wrap: nowrap;
                        flex-direction: row-reverse;
                        align-items: stretch;
                    } 
                    .pD{
                        font-size: 17px;
                        font-family: '__myFont_c3a675';  
                    }
                    .PTwo{
                        font-size: 20px;
                        width: 80%;
                        margin-bottom:60px;
                    }
                    .POne{
                        font-size: 17px;
                        width: 80%;
                    }
                    .PThree{
                        font-size: 22px;
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

ContentProduction.getLayout = function getLayout(page){
    return(
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}

