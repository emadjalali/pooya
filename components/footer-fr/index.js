/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Tel from "./footerItem/telgram.svg"
import X from "./footerItem/x.svg"

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("درخواست شما با موفقیت ثبت شد");
  };

  return (
    <div style={{fontFamily:"iranYekanRegularNum"}}>
      <div className="container footer-main">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 text-end col-lg-4 mb-5 mb-sm-5 mb-md-0 mb-lg-5 footer-intro-text">
            <div className="d-flex align-items-end justify-content-center h-100">
              <div>
                <div className="myContainer">
                  <div className="pRight">
                    <div>مقالات کاربردی</div>
                    <div>اخبار</div>
                    <div>آموزش های تخصصی</div>
                  </div>
                  <div className="pLeft">
                    <div>برند بوک در صنعت ساختمان</div>
                    <div>طراحی هویت یکپارچه برند</div>
                    <div>دیجیتال مارکتینگ، طراحی وبسایت و مدیریت فضای مجازی</div>
                    <div>استراتژی محتوا در فضای مجازی</div>
                    <div>طراحی و پیاده سازی کمپین های تبلیغاتی</div>
                    <div>برندینگ بین المللی ویژه ی فعالان صنعت ساختمان و معماری
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 text-center">
            <div className="h-100 logoD">
              <div>
                <div className="logo boxTow">
                  <img
                    src="/assets/Untitled-2-66.svg"
                    alt="footer-logo"
                    className="footerLogo"
                  />
                </div>
                <div className="box">
                  <div className="icons">
                    <img
                      src="/assets/Untitled-2-73.svg"
                      width="15%"
                      alt=""
                      className="footer-social-icon"
                    />
                    <Image
                      src={Tel}
                      width="15%"
                      alt=""
                      className="footer-social-icon"
                      style={{width: "22px"}}
                    />
                    <img
                      src="/assets/Untitled-2-75.svg"
                      width="15%"
                      alt=""
                      className="footer-social-icon"
                    />
                    <Image
                      src={X}
                      width="15%"
                      alt=""
                      className="footer-social-icon"
                      style={{width: "22px"}}
                    />
                  </div>
                  <div className="footer-socialAndAddMain socialAndAddMain">
                  <div className="num">021 - 22 72 40 59</div>
                  <div className="">info@feelingofalook.com</div>
                  </div>
                  <div className="address">
                    <p>نیاوران،خیابان مژده،<br/>کوچه قادری،پلاک2،<br/>زنگ5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 text-center mb-3 mb-sm-5 mb-md-0 mb-lg-5">
            <div className="formD boxTow">
              <div>
              <div className="textMid">
                  برای آگاهی از آخرین دستاوردها، پروژه ها، رویدادها
                  <br />و پیشنهادات، عضو خبرنامه حس یک نگاه شوید.
                </div>
                <div>
                  <form className="mt-2" onSubmit={handleSubmit}>
                    <input
                      id="email"
                      name="email"
                      placeholder="ایمیل شما"
                      type="email"
                      className="footer-submit-input"
                    />
                    <button className="footer-submit-button">ارسال</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><style>{`
        .myContainer {
 					display: flex;
          flex-direction: row;
          // align-items: center;
          flex-wrap: nowrap;
          color:gray;
				}
        .pRight{
          font-size: 15px;
          // padding-top:50px;
        }
        .pLeft{
          text-align: end;
          margin-right: 2px;
          font-size: 15px;
        }
        .logo{display: ruby-text;}
        .icons{
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          flex-direction: row-reverse;
          margin-top: 20px;
        }
        .socialAndAddMain{
          color:gray;
          margin-top:20px;
        }
        .textMid{
          text-align-last: justify;
          font-family: "iranyekanBoldnum";
          letter-spacing: -0.5px;
          font-size: 13px;
          margin-top: 30px;
          color: gray;
        }
        .num{
            direction: ltr;
            font-size:24px;
        }
        .formD{
            display: flex;
            align-items: flex-end;
            justify-content: center;
        }
        .logoD{
          display: flex;
          align-items: flex-end;
          justify-content: center;

        }
        .footerLogo{
          width: 30%;
        }
        .address{
          display: none;
        }
        @media screen and (min-width: 768px) {
          .myContainer{
            display: flex;
            flex-wrap: wrap;
            color: #036e96;
          }
          .pLeft{
              direction: ltr;
              font-size: 11px;
              margin-top: 15px;
              
          }
          .box{
              position: absolute;
              left: 10%;
              display: flex;
              flex-wrap: wrap;
              flex-direction: column-reverse;
          }
          .socialAndAddMain{
            font-size: 12px;
            text-align-last: justify;
            color: #f48120;
            margin-top: 0px;
          }
          .num{
            direction: ltr;
            font-size: 10px;
          }
          .formD{
            position: absolute;
            left: 38%;
            align-items: flex-start;
            margin-top:10%;
          }
          .logo{
            text-align: end;
          }
          .logoD{
            align-items: flex-start;
          }
          .footerLogo{
            width: 40%;
          }
          .footer-social-icon{
             width: 55%;
          }
          .address{
            color: #f48120;
            font-size: 14px;
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
