import picture from "./خلق-پروژه-ماندگار.jpg"
// import pattern from "./pattern.svg"
import Image from "next/image"
import Layout from "@/components/Layout"
import NestedLayout from "@/components/nested-layout-fr"

export default function CreateProject(){
    const handleSubmit = (e) => {
		e.preventDefault();
		alert("درخواست شما با موفقیت ثبت شد");
	};

    return(
        <div>
            <div className="firstPart">
                <h1 className="title">خلق پروژه های ماندگار و برندسازی ساختمان,<br/>(طراحی و توسعه معماری با رویکرد یکپارچه ی برند)</h1>
                <Image className="picture" src={picture}></Image>
            </div>
            <div className="secondPart" style={{direction:"rtl"}}>
                <div className="POneD">
                   <p className="pD">ساختمان، محصول عجیبی است. مهمترین محصول صنعت ساختمان که حاصل همکاری افراد، برندها، محصولات، خدمات، نگرشها، ارزش ها، اقتصاد، فرهنگ، جامعه و بسیاری المان های مشهود و نامشهود است.</p>
                   <p>برندسازی محصولی با این مولفه ها(به معنای اصولی و اصیل)، نگرشی را فراتر از انتخاب یک نام جذاب، نمای چشم گیر، برگزاری رویداد افتتاحیه و یا معرفی ساختمان در ژورنال ها و رسانه ها می طلبد؛ به خصوص اگر بپذیریم که ساختمان زنده است و علاوه بر جسم، روح و جان دارد! ما بر این باوریم که در کنار کیفیت، ظاهر، منطقه و... ، عوامل مشهود و نامشهود مشخصی در انتخاب مخاطب امروز برای خرید یک ساختمان یا مشارکت و سرمایه گذاری تاثیر می گذارد. عواملی فراتر از قیمت که ما در حس یک نگاه به آنها دست یافته ایم؛ عواملی پیچیده اما ساده</p>
                </div>
                <div className="POneM">
                  <p>ساختمان، محصول عجیبی است. مهمترین محصول صنعت ساختمان که حاصل همکاری افراد، برندها، محصولات، خدمات، نگرشها، ارزش ها، اقتصاد، فرهنگ، جامعه و بسیاری المان های مشهود و نامشهود است. برندسازی محصولی با این مولفه ها(به معنای اصولی و اصیل)، نگرشی را فراتر از انتخاب یک نام جذاب، نمای چشم گیر، برگزاری رویداد افتتاحیه و یا معرفی ساختمان در ژورنال ها و رسانه ها می طلبد؛ به خصوص اگر بپذیریم که ساختمان زنده است و علاوه بر جسم، روح و جان دارد! ما بر این باوریم که در کنار کیفیت، ظاهر، منطقه و... ، عوامل مشهود و نامشهود مشخصی در انتخاب مخاطب امروز برای خرید یک ساختمان یا مشارکت و سرمایه گذاری تاثیر می گذارد. عواملی فراتر از قیمت که ما در حس یک نگاه به آنها دست یافته ایم؛ عواملی پیچیده اما ساده!</p>
                </div>
                <div className="PTwo">
                    <p>فرآیند برندسازی ساختمان (مسکونی، تجاری، فرهنگا، تفریحی و...) پیش از شروع طراحی معماری شروع می شود! فرآیندی یکپارچه و هوشمندانه که طراحی معماری را نیز به عنوان بخش مهمی از مفهومی کلان در بردارد، مفهومی که به آن«برند یک ساختمان» می گوییم:</p>
                </div>
                <div className="PThree">
                    <p>طراحی استراتژی اختصاصی برند ساختمان(؟)</p>
                    <p>طراحی جامع معماری با رویکرد یکپارچه(؟)</p>
                    <p>طراحی هویت بصری و کلامی ساختمان</p>
                    <p>طراحی نام، لوگو، نشانه، راهنما و...</p>
                    <p>طراحی گرافیک محیطی</p>
                    <p>طراحی استراتژی های اختصاصی برندینگ</p>
                    <p>تولید محتوای تخصصی از تمامی فرآیند برندینگ</p>
                    <p>طراحی ایونت های تجربه محور،کمپین های تبلیغاتی هدفمند و...</p>
                    <p>طراحی و مدیریت نقاط ارتباطی برند (اینستاگرام، وبسایت و...)</p>
                    <p>طراحی سناریو فروش و بهره برداری</p>
                </div>
                <div className="PFour">
                   <p>برندینگ ساختمان در حس یک نگاه به طراحی تجربه ای یکپارچه می پردازد، طوری که مخاطب، آن را با ذهن و قلبش بخواند.</p>
                </div>
            </div>
            <div style={{textAlign:"center" , marginBottom:"100px"}}>
                <label className="label">دریافتِ مشاوره تخصصی برندینگ ساختمان</label>
                <form className='form' onSubmit={handleSubmit}>
					<input
						id='number'
						name='number'
						placeholder='0912'
						type='number'
						className='footer-submit-input'
					/>
					<button style={{backgroundColor:"black"}} className='footer-submit-button'>ثبت</button>
				</form>
            </div><style>{`
                .label{
                    font-size: 16px;
                    color: black;
                    margin-bottom: 10px;
                }
                .footer-submit-input{
                    direction: ltr;
                }
            	.form{
					display: flex;
					align-items: flex-end;
					justify-content: center;
				}
                // .pattern {
	            //     display: flex;
                //     margin-top: 55px;
                //     justify-content: center;
                //     margin-bottom: 55px;
				// }
                .title{
                    margin-top: 50px;
                    margin-bottom: 25px;
                    width: 75%;
                    font-size: 24px;
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
                .POneM{
                    margin-top: 60px;
                    font-size: 25px;
                    width: 75%;
                    font-family: system-ui;
                }
                .PFour{
                    margin-top: 40px;
                    margin-bottom: 100px;
                    font-size: 23px;
                    width: 75%;
                    font-family: system-ui;
                }
                .POneD{display:none}
                .PTwo{
                    font-size: 30px;
                    font-weight: 700;
                    width: 75%;
                    margin-top: 50px;
                    margin-bottom: 40px;
                }
                .PThree{
                    font-size: 32px;
                    width: 75%;
                    color: #00566f
                }
                .picture{
                    width: 75%;  
                }
                // .pD{
                //   margin-bottom: 30px;  
                // }
                p{margin-bottom:0px}
                @media screen and (min-width: 768px) {
                    .title{
                        margin-bottom: 50px;
                        width: 80%;
                        font-size: 25px;
                    }
                    .picture{
                        width: 60%;  
                    } 
                    .PTwo{
                        font-size: 18px;
                        width: 60%;
                    }
                    .POneD{
                        display:block;
                        font-size: 15px;
                        width: 60%;
                        margin-top: 50px;
                        font-family: system-ui;
                    }
                    .POneM{display:none}
                    .PThree{
                        width: 60%;
                        font-size: 18px;
                    }
                    .PFour{
                        width: 60%;
                        font-size: 14px;
                    }
                    .title{

                        margin-bottom: 18px;
                        width: 60%;
                        font-size: 18px;
                    }
                    .label{
                        font-size: 15px;
                        margin-bottom: 0px;
                    }
                    // .pattern{
                    // margin-top: 65px;
                    // margin-bottom: -65px;
                    // }
                }
            `}</style>
        </div>
    )
}

CreateProject.getLayout = function getLayout(page){
    return(
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}

