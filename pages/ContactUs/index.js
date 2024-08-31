import Layout from "@/components/Layout"
import NestedLayout from "@/components/nested-layout-fr-two"
import Image from "next/image";
import patternD from "./patternD.svg"
import patternM from "./patternM.svg"
import phone from "./phone.svg"
import tel from "./tel.svg"
import In from "./in.svg"
import X from "./X.svg"
import WU from "./WU.svg"
import email from "./email.svg"
import Insta from "./insta.svg"

export default function ContactUs(){
    const handleSubmit = (e) => {
		e.preventDefault();
		alert("درخواست شما با موفقیت ثبت شد");
	};

    return(
        <div>
            <div>
                <div className="FirstPart">
                <div className="title">
                    <h1>تماس با ما</h1>
                </div>
                <form className="FormsPosition" onSubmit={handleSubmit}>
					<input
						id='name'
						name='name'
						placeholder='نام'
						type='name'
						className='form'
					/><br/>
                    <input
						id='tel'
						name='tel'
						placeholder='شماره همراه'
						type='tel'
						className='form'
					/><br/>
                    <input
						id='email'
						name='email'
						placeholder='ایمیل'
						type='email'
						className='form'
					/><br/>
                    <select className="select" placeholder='زمینه فعالیت'>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select><br/>
                    <textarea className="textArea" placeholder='مختصری از خودتان،کسب و کارتان و نیاز فعلی'></textarea>
                    <button className="button">درخواست مشاوره رایگان/اطلاعات بیشتر</button>
					{/* <button style={{backgroundColor:"black"}} className='footer-submit-button'>ثبت</button> */}
				</form>
                </div>
                <div>
                    <div style={{display:" flex", flexDirection: "column", alignItems: "center"}}><Image src={patternD} className="patternD"></Image></div>
                    <div className="footer">
                        <div className="NumDivs">
                            <div className="NumEn">
                                <p style={{paddingLeft:"7px", marginRight:"-20px" , direction:"ltr" , fontSize:"20px"}}>021-22 72 4059</p>
                                <Image style={{width:"%"}} src={phone}></Image>
                            </div>
                            <div className="NumFr">
                                <p style={{paddingLeft:"10px" , direction:"ltr" , fontSize:"20px"}}>0936 128 34 61</p>
                                <Image style={{width:"%" , marginLeft:"1px"}} src={tel}></Image>
                                <Image style={{width:"%"}} src={WU}></Image>
                            </div>
                        </div>
                        <div className="Address">
                            <p>نیاوران،خیابان مژده،<br/>کوچه قادری،پلاک2،<br/>زنگ 5</p>
                        </div>
                        <div className="IconDives">
                            <div className="email">
                                <p style={{fontSize:"17px" , marginLeft:"5px"}}>info@feelingofalook.com</p>
                                <Image style={{width:"%"}} src={email}></Image>
                            </div>
                            <div className="Icons">
                                <Image style={{width:"%" , marginLeft:"5px"}} src={X}></Image>
                                <Image style={{width:"%" , marginLeft:"5px"}} src={In}></Image>
                                <Image style={{width:"%" , marginLeft:"5px"}} src={Insta}></Image>
                            </div>
                        </div>
                    </div>
                    <div className="patternM"><Image src={patternM} style={{width:"85%"}}></Image></div>
                </div>
            </div><style>{`
                .title{
                    width: 290px;
                }
                .FirstPart{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }
                .form{
                    width: 160%;
                    height: 30px;
                    margin-bottom: -20px;
                    text-align: end;
                    direction: ltr;
                    padding: 5px;
                    border: none;
                    background-color: rgb(238, 238, 238);
                }
                .select{
                    width: 160%;
                    height: 30px;
                    margin-top: 30px;
                    text-align: end;
                    direction: ltr;
                    padding: 5px;
                    border: none;
                    background-color: rgb(238, 238, 238);
                }
                .textArea{
                    width: 160%;
                    height: 120px;
                    margin-top: 30px;
                    text-align: end;
                    direction: ltr;
                    padding: 5px;
                    border: none;
                    background-color: rgb(238, 238, 238);
                }
                .button{
                    padding: 8px 10px 8px 10px;
                    background-color: #ff7d00;
                    display: block;
                    color: white;
                    margin-top: 25px;
                    font-size: 12px;
                }
                .FormsPosition{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .patternD{
                    display:none
                }
                .fotter{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .NumEn{
                    display: flex;
                    align-items: flex-start;
                    flex-direction: row;
                    justify-content: center;
                    margin-top: 70px;
                }
                .NumFr{
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    margin-top: -16px;
                }
                .NumDivs{
                    display: flex;
                    flex-direction: column;
                    // align-items: flex-start;
                }
                .Address{
                    text-align: center;
                    font-size: 25px;
                    margin-top: 30px;
                }
                .email{
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    margin-top: 60px;
                }
                .Icons{
                    display: flex;
                    justify-content: center;
                    margin-top: -10px;
                    margin-bottom: 0px;
                }
                .patternM{
                    margin: 50px 0px 80px 0px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                @media screen and (min-width: 768px) {
                   .FirstPart{
                      width:55%
                   }
                    .patternD{
                        display: block;
                        margin: 50px 0px 80px 0px;
                        width: 980px;

                    }
                    .patternM{
                        display:none
                    }
                    .footer{
                        display: flex;
                        flex-direction: row-reverse;
                        align-items: flex-end;
                        justify-content: space-around;
                        margin-bottom: 50px;
                    }
                    .NumDivs{
                        align-items: flex-end;
                    }
                    .IconDives{
                        display: flex;
                        flex-direction: column-reverse;
                        align-items: center;
                    }
                    .Icons{margin-bottom: -45px;}
                    .Address{width: 245px;}
                }
            `}</style>  
        </div>
    )
}

ContactUs.getLayout = function getLayout(page){
    return(
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}
