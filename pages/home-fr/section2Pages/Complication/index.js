import picture from "./عارضه-یابی.jpg"
import pattern from "./pattern.svg"
import Image from "next/image"
import Layout from "@/components/Layout"
import NestedLayout from "@/components/nested-layout-fr"

export default function Complication(){
    const handleSubmit = (e) => {
		e.preventDefault();
		alert("درخواست شما با موفقیت ثبت شد");
	};

    return(
        <div>
            <div className="firstPart">
                <h1 className="title">عارضه یابی برند</h1>
                <Image className="picture" src={picture}></Image>
            </div>
            <div className="secondPart" style={{direction:"rtl", textAlign: "justify", lineHeight: "30px"}}>
                <div className="POneD">
                   <p className="pD">گاهی به عنوان مدیران برند آنقدر درگیر جزئیات کسب و کار می شوید که نمیدانید چرا با وجود هزینه هایی نه چندان کم در حوزه برندسازی و بازاریابی، به نتیجه مطلوب نمی رسید.</p>
                   <p>برای روشن شدن دلایل و تحلیل این موضوع، نیاز به بررسی کسب و کار و فعالیت های شما در این کسب و کار از نگاه فرد سوم و متخصص در کسب و کار، برندسازی، بازاریابی دارید</p>
                </div>
                <div className="POneM">
                   <p>گاهی به عنوان مدیران برند آنقدر درگیر جزئیات کسب و کار می شوید که نمیدانید چرا با وجود هزینه هایی نه چندان کم در حوزه برندسازی و بازاریابی، به نتیجه مطلوب نمی رسید. برای روشن شدن دلایل و تحلیل این موضوع، نیاز به بررسی کسب و کار و فعالیت های شما در این کسب و کار از نگاه فرد سوم و متخصص در کسب و کار، برندسازی، بازاریابی دارید.</p>
                </div>
                <div className="PTwo">
                    <p>گروه مشاوران حس یک نگاه با اشراف به صنعت ساختمان، معماری و مفاهیم برندینگ و بازاریابی، پس از دریافت درخواست شما، با برگزاری جلسه(ها)ی مشترک با مدیران برند و بررسی تخصصی کسب و کار شما به تحلیل به نسبت دقیقی از عارضه برند شما در مسیر اصولی برندینگ می رسند و پس از به اشتراک گذاشتن انها، به ارائه راهکارهای اختصاصی برند شما می پردازد.</p>
                </div>
            </div>
            <div style={{textAlign:"center"}}>
                <label className="label">درخواست عارضه یابی برند</label>
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
            </div>
            <div className="pattern">
                <Image src={pattern} style={{width:"3%"}}></Image>
            </div><style jsx>{`
                .label{
                    font-size: 19px;
                    color: #6a6969;
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
                .pattern {
	                display: flex;
                    margin-top: 55px;
                    justify-content: center;
                    margin-bottom: 55px;
				}
                .title{
                    margin-top: 80px;
                    margin-bottom: 80px;
                    width: 75%;
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
                .POneD{display:none}
                .PTwo{
                    font-size: 27px;
                    font-weight: 700;
                    width: 75%;
                    margin-top: 50px;
                    margin-bottom: 100px;
                }
                .picture{
                    width: 100%;  
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
                    .picture{
                        width: 50%;  
                    } 
                    .PTwo{
                        font-size: 18px;
                        width: 50%;
                    }
                    .POneD{
                        display:block;
                        font-size: 15px;
                        width: 50%;
                        margin-top: 50px;
                        font-family: system-ui;
                    }
                    .POneM{display:none}
                    .pattern{
                    margin-top: 65px;
                    margin-bottom: -65px;
                    }
                }
            `}</style>
        </div>
    )
}

Complication.getLayout = function getLayout(page){
    return(
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}

