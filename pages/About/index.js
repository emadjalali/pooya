import pattern from "./pattern.svg"
import Image from "next/image"
import Layout from "@/components/Layout"
import NestedLayout from "@/components/nested-layout-fr"

export default function About(){

    return(
        <div>
            <div className="firstPart">
                <h1 className="title">درباره ی حس یک نگاه</h1>
            </div>
            <div className="secondPart" style={{direction:"rtl" ,textAlign: "justify"}}>
                <div className="POne">
                  <p>حس یک نگاه در فصل مشترک معماری و برندینگ عمیق شده است، بنابراین طبیعی است که معماران، سازندگان، تامین کنندگان متریال های ساختمانی،توسعه دهنگان املاک و مستغلات، شهر و تصمیم گیرندگان شهری، کسب و کارهای نوآور و در یک عبارت کسب و کارهای علاقه مند به ارزش آفرینی و اصالت در صنعت ساختمان، معماری و شهرسازی بخش مهمی از مخاطبان حس یک نگاه را تشکیل دهند.</p>
                </div>
                <div className="PTwo">
                   <p className="pD">اما حس یک نگاه برای کسب و کارهای مکان محور یا برندهایی که مفهوم«فضا» برای کسب و کارشان حائز  اهمیت است (مانند کافه، رستوران، گالری و نمایشگاه، فروشگاه ها، مراکز فرهنگی، هنری، سرمایه گذاران و بهره برداران پروژه های تجاری، مسکونی، تفریحی، هتل، فضاهای شهری و خاص) خدمات ویژه ای را تحت عنوان برندینگ فضا ارائه می کند.</p>
                   <p>خدمات حس یک نگاه به صورت پریمیوم و اختصاصی و در پنج دسته کلی، به شیوه ای ساختار مند و کاملا اختصاصی ارائه می شود:</p>
                </div>
                <div className="PThree">
                    <p style={{marginBottom:"-8px"}}>کشف برند</p>
                    <p style={{marginBottom:"-8px"}}>خلق برند(طراحی استراتژی برند)</p>
                    <p style={{marginBottom:"-8px"}}>رشد برند(طراحی استراتژی های برندینگ و بازاریابی)</p>
                    <p style={{marginBottom:"-8px"}}>اجرای صفر تا صد فرآیند برندینگ</p>
                    <p style={{marginBottom:"-8px"}}>مشاوره تخصصی</p>
                </div>
                <div className="PFour">
                   <p>حس یک نگاه گروهی متشکل از انسان های عاشق، هوشمند، متخصص و با تجربه در حوزه های برندسازی، بازاریابی، معماری، شهرسازی، روانشناسی، تبلیغات، گرافیک و هنر است. ما در حس یک نگاه به افراد و سازمان ها، کمک میکنیم برندی اصیل بسازند و آن را توسعه دهند. ما برندینگ را با مفاهیم «کشف»، «خلق»، «زندگی» و «ماندگاری» معنی می کنیم. خلق موجودی که خود میتواند تا ابد خلق کند!</p>
                </div>
            </div>
            <div className="patternM">
                <Image src={pattern} style={{width:"75%"}}></Image>
            </div>
            <div className="patternD">
                <Image src={pattern} style={{width:"80%"}}></Image>
            </div><style>{`
                .patternM {
	                width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 100px;
				}
                .patternD{ display: none;}
                .title{
                    margin-top: 60px;
                    width: 75%;
                    font-size: 28px;
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
                    margin-top: 45px;
                    font-size: 21px;
                    width: 75%;
                    font-family: system-ui;
                }
                .PFour{
                    margin-top: 40px;
                    margin-bottom: 100px;
                    font-size: 19px;
                    width: 75%;
                    font-family: system-ui;
                }
                .PTwo{
                    font-size: 23px;
                    font-weight: 700;
                    width: 75%;
                    margin-top: 50px;
                    margin-bottom: 40px;
                    line-height: 30px;
                }
                .PThree{
                    font-size: 23px;
                    width: 75%;
                    color: black
                }

                // p{margin-bottom:-10px}
                @media screen and (min-width: 768px) {
                    .PTwo{
                        font-size: 18px;
                        width: 80%;
                        margin-bottom: 0px;
                    }
                    .pD{
                        margin-bottom: 30px;  
                    }
                    .POne{
                        width: 80%;
                        font-size: 17px;
                    }
                    .PThree{
                        width: 80%;
                        font-size: 19px;
                    }
                    .PFour{
                        width: 80%;
                        font-size: 16px;
                    }
                    .title{
                        width: 80%;
                        font-size: 30px;
                    }
                    .patternD {
	                    width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: -60px;
				    }
                    .patternM{ display: none;}
                }
            `}</style>
        </div>
    )
}

About.getLayout = function getLayout(page){
    return(
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}

