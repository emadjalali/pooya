import picture from "./کشف-برند.jpg"
import pattern from "./pattern.svg"
import Image from "next/image"

export default function BrandDiscovery(){
    return(
        <div>
            {/* <div className="">
                
            </div> */}
            <div className="firstPart">
                <h1 className="title">کشف برند</h1>
                <Image src={picture} className="picture"></Image>
            </div>
            <div className="secondPart" style={{direction:"rtl"}}>
                <div className="POne">
                    <p>در حس یک نگاه، پیش از هر چیز به شیوه ای ساختارمند (و البته چالش بر انگیز) به شناخت انسان با یک سازمان می پردازیم، به این شناخت عمق می دهیم سپس از دل آن مفاهیمی منحصر به فرد استخراج میکنیم؛ مفاهیمی که فلسفه ی وجودی برند یک فرد یا یک سازمان را شکل می دهند</p>
                </div>
                <div className="PTwo">
                   <p className="Ptitle">در مرحله کشف برند ، از این سه ابزار استفاده می شود:</p> 
                   <p>پرسشنامه اخنصاصی حس یک نگاه برای کشف برند</p> 
                   <p>ازمون های استاندارد روانشناسی برند</p> 
                   <p>جلسه های حضوری/آنلان باکارگروه استراتزی یرند</p> 
                </div>
                <div className="PThree">
                    <p>  کشف برند یا  Brand Discovery، در واقع به چرایی منحصر به فرد یک فرد یا سازمان می پردازد و مهمترین دستاورد برای شروع طراحی استراتزی بزند (یا همان چیستی برند) به حساب می اید </p>
                </div>
                <div className="pattern">
                    <Image src={pattern} style={{width:"4%"}}></Image>
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
                    }
                    .POne{
                        font-size: 20px;
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
                        margin-top: 15%;
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