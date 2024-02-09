/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("درخواست شما با موفقیت ثبت شد");
  };

  return (
    <>
      <div className="container footer-main">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 text-end col-lg-4 mb-5 mb-sm-5 mb-md-0 mb-lg-5 footer-intro-text">
            <div className="d-flex align-items-end justify-content-center h-100">
              <div>
                <div className="footer-intro-title">
                  <div>مقالات کاربردی</div>
                  <div>اخبار</div>
                  <div>آموزش های تخصصی</div>
                </div>
                <div className="footer-intro-detail">
                  <div>برند بوک در صنعت ساختمان</div>
                  <div>طراحی هویت یکپارچه برند</div>
                  <div>دیجیتال مارکتینگ، طراحی وبسایت و مدیریت فضای مجازی</div>
                  <div>استراتژی محتوا در فضای مجازی</div>
                  <div>طراحی و پیاده سازی کمپین های تبلیغاتی</div>
                  <div>
                    برندینگ بین المللی ویژه ی فعالان صنعت ساختمان و معماری
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 text-center mb-5 mb-sm-5 mb-md-0 mb-lg-5">
            <div className="d-flex align-items-end justify-content-center h-100">
              <div>
                <div>
                  <img
                    src="/assets/Untitled-2-66.svg"
                    alt="footer-logo"
                    className="footer-logo"
                  />
                </div>
                <div className="footer-text-mid">
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
          <div className="col-12 col-sm-12 col-md-4 text-center mb-3 mb-sm-5 mb-md-0 mb-lg-5">
            <div className="d-flex align-items-end justify-content-center h-100">
              <div>
                <div className="footer-add">
                  نیاوران، خیابان مژده،
                  <br />
                  کوچه قادری، پلاک 2،
                  <br />
                  زنگ 5
                </div>
                <div className="footer-socialAndAddMain">
                  <div className="dirltr footer-tel mt-3">
                    021 - 22 72 40 59
                  </div>
                  <div className="footer-email">info@feelingofalook.com</div>
                  <div>
                    <img
                      src="/assets/Untitled-2-73.svg"
                      width="15%"
                      alt=""
                      className="footer-social-icon"
                    />
                    <img
                      src="/assets/Untitled-2-74.svg"
                      width="15%"
                      alt=""
                      className="footer-social-icon"
                    />
                    <img
                      src="/assets/Untitled-2-75.svg"
                      width="15%"
                      alt=""
                      className="footer-social-icon"
                    />
                    <img
                      src="/assets/Untitled-2-76.svg"
                      width="15%"
                      alt=""
                      className="footer-social-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
