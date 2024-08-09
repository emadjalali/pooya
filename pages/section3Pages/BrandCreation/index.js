import picture from "./brandcreation.jpg"
import pattern from "./pattern.svg"
import Image from "next/image"

export default function BrandCreation(){
    return(
        <div>
            {/* <div className="">
                
            </div> */}
            <div className="firstPart">
                <h1 className="title">خلق برند<br/>(طراحی استراتزی برند و هویت برند)</h1>
                <Image src={picture} className="picture"></Image>
            </div>
            <div className="secondPart" style={{direction:"rtl"}}>
                <div className="POne">
                    <p>برند ها مانند انسان ها خلق می شوند. چیستی برند (که در ادبیات تخصصی برند از آن با نام استراتزی برند یاد میکنیم) به طراحی ابعاد مختلف برند می پردازد. ابعاد منطبق بر چرایی کشف شده که هر یک معروف بخشی از اصالت برند است</p>
                </div>
                <div className="PTwo">
                   <p className="Ptitle">طراحی استراتزی اخنصاصی برند:</p> 
                   <p>طراحی جایگاه برند</p> 
                   <p>طراحی چشم انداز و ماموریت برند</p> 
                   <p>تدوین معماری برند</p> 
                   <p>طراحی داستان برند</p> 
                   <p>طراحی ارزش های برند</p> 
                   <p>طراحی شخصیت برند</p> 
                   <p>طراحی تعهدات برند</p> 
                   <p>طراحی جوهره برند</p> 
                </div>
                <div className="PThree">
                <p className="Ptitle">طراحی هویت اخنصاصی و یکپارچه برند:</p> 
                   <p>طراحی نام و تگ لاین برند</p> 
                   <p>طراحی هویت کلامی و لحن برند</p> 
                   <p>طراحی جامع هویت بصری برند</p> 
                   <p>طراحی هویت مفهومی برند</p> 
                </div>
                <div className="pattern">
                    <Image src={pattern} style={{width:"4.5%"}}></Image>
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
                    text-align: end;
                    font-size:30px
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
                    font-size: 28px;
                    font-weight: 700;
                    margin-top: 40px;
                    color: #ffc070;
                }
                p{
                    margin-bottom: 0px;
                }
                .PThree{
                   width: 75%;
                    font-size: 25px;
                    font-weight: 700;
                    margin-top: 40px;
                    color: #ffc070;
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
                    width: 75%;  
                }
                .Ptitle{
                    font-size:24px;
                    color:black
                }
                @media screen and (min-width: 768px) {
                    .picture{
                        width: 30%;  
                    }  
                    .PThree{
                        font-size: 20px;
                        width: 85%;
                        color: black;
                    }
                    .POne{
                        font-size: 20px;
                        width: 85%;
                    }
                    .PTwo{
                        font-size: 20px;
                        width: 85%;
                        color: black;
                    }
                    .Ptitle{
                        font-weight: 500;
                        color: #ffc070 ;
                        font-size: 19px; 
                    }
                    .pattern{
                        margin-top: 10%;
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

// BrandDiscovery.getLayout = function getLayout(page) {
// 	return (
// 		<Layout>
// 			<NestedLayout>{page}</NestedLayout>
// 		</Layout>
// 	);
// };