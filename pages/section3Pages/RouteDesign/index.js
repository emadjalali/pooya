import picture from "./RouteDesign.jpg"
import pattern from "./pattern.svg"
import Image from "next/image"
import NestedLayout from "@/components/nested-layout-fr"
import Layout from "@/components/Layout"

export default function RouteDessign(){
    return(
        <div>
            {/* <div className="">
                
            </div> */}
            <div className="firstPart">
                <h1 className="title">طراحی مسیر رشد برند<br/>(استراتزی های برندینگ و بازاریابی)</h1>
                <Image src={picture} className="picture"></Image>
            </div>
            <div className="secondPart" style={{direction:"rtl"}}>
                <div className="POne">
                    <p>برندی که خلق شده است. نیازمند مسیر و شیوه ای برای رشد و ارتباط با جهان پیرامون و مخاطبینش است. مسیری منطبق بر اصالت طراحی شده برند که با راهکار ها و جزئیاتی دقیق ، چیستی و چرایی ارزشمندش را در ذهن و قلب مخاطبان ثبت میکند. اینکه هرکجا چگونه حضور داشته باشد و چگونه تعامل کند تا در ذهن و قلب مخاطبانش رسوخ کند. چیزی است که تحت عنوان استراتژی های برندینگ و بازاریابی در این مرحله به صورت اختصاصی توسط کارگروه استراتژی هاب برندینگ و بازاریابی طراحی میشود.</p>    
                </div>
                <div className="PTwo">
                   <p>طراحی و تشریح استراتژی کلان کسب و کار</p> 
                   <p>تدوین نقشه راه کلان کسب و کار</p> 
                   <p>طراحی راهکارهای اختصاصی برندینگ و بازاریابی</p> 
                   <p>طراحی کمپین های خلاق تبلیغاتی</p> 
                   <p>تدوین باید و نباید های برند</p> 
                   <p>طراحی استراتژی محتوا در فضای مجازی</p> 
                   <p>طراحی ساحتار فروش و بازاریابی در سازمان ها</p> 
                   <p>طراحی سناریو های معرفی برند، رائه، فروش و...</p> 
                </div>
                <div className="pattern">
                    <Image src={pattern} style={{width:"5%"}}></Image>
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
                    // text-align: end;
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
                .POne{
                    margin-top: 60px;
                    font-size: 25px;
                    width: 75%;
                }
                .PTwo{
                    width: 75%;
                    font-size: 18px;
                    font-weight: 900;
                    margin-top: 40px;
                    color: orange;
                }
                p{
                    margin-bottom: 0px;
                }
                .PThree{
                    font-size: 25px;
                    font-weight: 700;
                    width: 75%;
                    margin-top: 50px;
                }
                .pattern{
                    width: 75%;
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
                @media screen and (min-width: 500px) {
                    .PTwo{
                        font-size: 22px; 
                    }
                }
                @media screen and (min-width: 600px) {
                    .PTwo{
                        font-size: 25px; 
                    }
                }
                @media screen and (min-width: 768px) {
                    .picture{
                        width: 80%;  
                    }  
                    .POne{
                        font-size: 19px;
                        width: 90%;
                    }
                    .PTwo{
                        font-weight: 400;
                        color: #ffb733;
                        width: 90%;
                        font-size: 17px;
                    }
                    .Ptitle{
                        font-weight: 400;
                        color: #ffca69;
                        font-size: 18px; 
                    }
                    .pattern{
                        margin-top: 5%;
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

RouteDessign.getLayout = function getLayout(page){
    return(
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout> 
    )
}