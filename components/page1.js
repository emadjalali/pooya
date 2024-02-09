/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page1() {
  const router = useRouter();
  const page = router && router.pathname ? router.pathname.substring(1) : "";
  const [dropDown0, setDropDown0] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <div>
        <img src="/assets/slideshow.jpg" width="100%" alt="slideShow" />
      </div>

      <div className="container mt-5 page1-main">
        <div className="row p-5">
          <div className="col-4 p-2 p-sm-3 p-md-4 p-lg-5">
            <img src="/assets/home-1.jpg" width="100%" alt="home-1" />
            {/* <div className="page1-mid-text">اجرای صفر تا صد فرآیند برندینگ</div> */}
            <img
              src="/assets/Untitled-2-05.svg"
              width="100%"
              alt="home-1"
              className="mt-3"
            />
          </div>
          <div className="col-4 p-2 p-sm-3 p-md-4 p-lg-5">
            <img src="/assets/home-2.jpg" width="100%" alt="home-1" />
            {/* <div className="page1-mid-text">
              تولید محتوای تخصصی و اختصاصی در صنعت ساختمان و معماری
            </div> */}
            <img
              src="/assets/Untitled-2-06.svg"
              width="100%"
              alt="home-1"
              className="mt-3"
            />
          </div>
          <div className="col-4 p-2 p-sm-3 p-md-4 p-lg-5">
            <img src="/assets/home-3.jpg" width="100%" alt="home-1" />
            {/* <div className="page1-mid-text">سند اختصاصی راهنمای جامع برند</div> */}
            <img
              src="/assets/Untitled-2-07.svg"
              width="100%"
              alt="home-1"
              className="mt-3"
            />
          </div>
          <div className="col-4 p-2 p-sm-3 p-md-4 p-lg-5">
            <img src="/assets/home-4.jpg" width="100%" alt="home-1" />
            {/* <div className="page1-mid-text">پرسش و پاسخ های تخصصی</div> */}
            <img
              src="/assets/Untitled-2-08.svg"
              width="100%"
              alt="home-1"
              className="mt-3"
            />
          </div>
          <div className="col-4 ">
            <div className="d-flex w-100 h-100 justify-content-center align-items-center">
              <img
                src="/assets/Untitled-2-52.svg"
                alt="home-1"
                className="page1-cross"
              />
            </div>
          </div>
          <div className="col-4 p-2 p-sm-3 p-md-4 p-lg-5">
            <img src="/assets/home-5.jpg" width="100%" alt="home-1" />
            {/* <div className="page1-mid-text">
              همکاری با سازندگان و سرمایه گذاران برای خلق پروژ های ماندگار
            </div> */}
            <img
              src="/assets/Untitled-2-10.svg"
              width="100%"
              alt="home-1"
              className="mt-3"
            />
          </div>
          <div className="col-4 p-2 p-sm-3 p-md-4 p-lg-5">
            <img src="/assets/home-6.jpg" width="100%" alt="home-1" />
            {/* <div className="page1-mid-text">راهکارهای خلاق حس یک نگاه</div> */}
            <img
              src="/assets/Untitled-2-11.svg"
              width="100%"
              alt="home-1"
              className="mt-3"
            />
          </div>
          <div className="col-4 p-2 p-sm-3 p-md-4 p-lg-5">
            <img src="/assets/home-7.jpg" width="100%" alt="home-1" />
            {/* <div className="page1-mid-text text-center">طراحی تجربه</div> */}
            <img
              src="/assets/Untitled-2-12.svg"
              width="100%"
              alt="home-1"
              className="mt-3"
              height="16.3"
            />
          </div>
          <div className="col-4 p-2 p-sm-3 p-md-4 p-lg-5">
            <img src="/assets/home-8.jpg" width="100%" alt="home-1" />
            {/* <div className="page1-mid-text">عارضه یابی برند</div> */}
            <img
              src="/assets/Untitled-2-13.svg"
              width="100%"
              alt="home-1"
              className="mt-3"
              height="16.3"
            />
          </div>
        </div>
      </div>

      <div className="page1-main-part2 pb-5">
        <div className="page1-main-part2-parent pt-5">
          <div className="pt-5 page1-main-part2-text-type">
            حس یک نگاه مشخصا به چه می پردازد؟
          </div>
          <div>
            <img
              src="/assets/Untitled-2-25.svg"
              width="10%"
              alt="MID"
              className="page1-main-part2-text my-5"
            />
          </div>
          <div className="page1-main-part2-text-type">
            به چرایی، چیستی، چگونگی و زندگی برندها
            <br />
            در صنعت ساختمان، معماری و شهرسازی
          </div>
          <div>
            <img
              src="/assets/Untitled-2-23.svg"
              width="10%"
              alt="MID"
              className="page1-main-part2-text my-5"
            />
          </div>
          <div>
            <img
              src="/assets/Untitled-2-32.svg"
              width="100%"
              alt="MID"
              className="page1-main-part2-text"
            />
          </div>
          <div>
            <img
              src="/assets/Untitled-2-25.svg"
              width="10%"
              alt="MID"
              className="page1-main-part2-text my-5"
            />
          </div>
          <div>
            <img
              src="/assets/Untitled-2-34.svg"
              width="100%"
              alt="MID"
              className="page1-main-part2-text"
            />
          </div>
          <div>
            <img
              src="/assets/Untitled-2-23.svg"
              width="10%"
              alt="MID"
              className="page1-main-part2-text my-5"
            />
          </div>
          <div>
            <img
              src="/assets/Untitled-2-36.svg"
              width="100%"
              alt="MID"
              className="page1-main-part2-text"
            />
          </div>
          <div>
            <img
              src="/assets/Untitled-2-25.svg"
              width="10%"
              alt="MID"
              className="page1-main-part2-text my-5"
            />
          </div>
          <div className="mb-5">
            <img
              src="/assets/Untitled-2-38.svg"
              width="100%"
              alt="MID"
              className="page1-main-part2-text"
              style={{ paddingLeft: "33%" }}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 position-relative d-flex w-100">
        <div className="w-100">
          <img src="/assets/Untitled-2-63.svg" width="100%" alt="DONE" />
        </div>
        <div
          className="position-absolute d-flex justify-content-center align-items-center"
          style={{ top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <img
            src="/assets/Untitled-2-57.svg"
            width="20%"
            alt="DONE"
            className="page1-main-part2-text"
          />
        </div>
      </div>
    </>
  );
}
