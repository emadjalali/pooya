import picture from './picture.jpg';
import pattern from './pattern.svg';
import Image from 'next/image';
import Layout from '@/components/Layout';
import NestedLayout from '@/components/nested-layout-fr';

export default function Architects() {
  return (
    <div>
      <div className="firstPart">
        <div className="topPart">
          <h1 className="title">برندسازی برای معماران</h1>
          <div className="picture">
            <Image style={{ width: '100%' }} src={picture}></Image>
          </div>
        </div>
        <div className="bottomPart">
          <p className="label">داستان از اینجا شروع می شود.</p>
          <div className="pattern">
            <Image src={pattern}></Image>
          </div>
        </div>
      </div>
      <div className="secondPart" style={{ direction: 'rtl' }}>
        <div className="POne">
          <p>
            این سوال ها، ریشه های یک برند اصیل در حرفه معماری است. ریشه هایی منحصر به فرد برای هر
            معمار. برندینگ برای یک معمار از همینجا شروع می شود. همین قدر پیچیده، مهم و جذاب.
          </p>
        </div>
        <div className="PTwo">
          <p className="PD">
            ما در حس یک نگاه پیش از هرچیز خط فکری شما را به عنوان یک معمار کشف می کنیم و برای این
            کار در اندیشه و نگرشتان به زندگی، کسب و کار، ساختمان، شهر، انسان، جامعه و ... عمیق می
            شویم. ما جوهره منحصر به فردبرند شما را کشف و بعد از آن به خلق و مخابره ابعاد متمایز و
            ارزشمند آن می پردازیم تا مخاطبانی مشخص را آگاه و عاشق کنیم.
          </p>
          <p>
            این فرآیند در چهار مرحله چالش برانگیز و منطبق بر اصول برندسازی و بازاریابی انجام می شود:
          </p>
        </div>
        <div className="PThree">
          <p>کشف برند که به چرایی و فلسفه ی وجودی برند معمار می پردازد.</p>
          <p>
            خلق برند یا «طراحی استراتژی برند» که به بیان چیستی منحصر به فرد برند معمار از ابعاد
            مختلف می پردازد.
          </p>
          <p>
            رشد برند یا «طراحی استراتژی برندینگ و بازاریابی» که به جزئیات و چگونگی فعالیت های
            ارتباطی برند با جهان پیرامون می پردازد.
          </p>
          <p>
            زندگی برند یا «اجرای یکپارچه برندینگ» که به پیاده سازی دقیق استراتژی ها، بررسی بازخورد و
            اصلاح آن می پردازد.
          </p>
        </div>
        <div className="PFour">
          <p>
            آنچه شما به عنوان یک معمار، مدیر و مالک یک آتلیه معماری نیاز دارید شاید بخشی از این
            فرایند باشد. مشاوران حس یک نگاه پس از آشنایی با شما و برندتان پیشنهادهایی تخصصی در این
            حوزه ارائه می کنند.
          </p>
        </div>
      </div>
      <div className="positionButtoms">
        <div>
          <a className="buttomOne" href="#">
            دریافت مشاوره رایگان
          </a>
        </div>
        <div>
          <a className="buttomTwo" href="#">
            مقالات مرتبط
          </a>
        </div>
        <div>
          <a className="buttomThree" href="#">
            نمونه پروژه ها
          </a>
        </div>
      </div>
      <style jsx>{`
        .title {
          margin-top: 60px;
          margin-bottom: 20px;
          width: 85%;
          font-size: 30px;
        }
        .buttomOne {
          background-color: #939191;
          padding: 9px;
          color: white;
          text-decoration: none;
          width: 161px;
          display: block;
          text-align: center;
        }
        .buttomTwo {
          background-color: #a3a2a2;
          padding: 9px;
          color: white;
          text-decoration: none;
          width: 161px;
          display: block;
          text-align: center;
          margin-top: 13px;
        }
        .buttomThree {
          background-color: black;
          padding: 9px;
          color: white;
          text-decoration: none;
          width: 161px;
          display: block;
          text-align: center;
          margin-top: 13px;
        }
        .positionButtoms {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          align-items: center;
          margin-bottom: 20%;
        }
        .firstPart {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: nowrap;
        }
        .secondPart {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: nowrap;
        }
        .topPart {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: start;
        }
        .bottomPart {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .POne {
          margin-top: 60px;
          font-size: 23px;
          width: 75%;
          font-family: system-ui;
        }
        .label {
          width: 75%;
          font-family: system-ui;
          font-size: 15px;
          margin-bottom: 6px;
        }
        .PTwo {
          font-size: 26px;
          font-weight: 700;
          width: 75%;
          margin-top: 50px;
          margin-bottom: 30px;
        }
        .PD {
          margin-bottom: 30px;
        }
        .PThree {
          font-size: 30px;
          width: 75%;
          color: #10566f;
        }
        .PFour {
          margin-top: 30px;
          font-size: 23px;
          width: 75%;
          font-family: system-ui;
          margin-bottom: 80px;
        }
        p {
          margin-bottom: 0px;
        }
        .picture {
          width: 85%;
          margin-bottom: 70px;
        }
        .pattern {
          width: 75%;
        }
        @media screen and (min-width: 768px) {
          .title {
            margin-top: 0px;
            margin-bottom: 50px;
            width: 25%;
            font-size: 25px;
            margin-left: 10px;
          }
          .label {
            width: 55%;
            font-family: '__myFont_c3a675';
            font-size: 17px;
            margin-bottom: 6px;
          }
          .topPart {
            width: 100%;
            margin-top: 50px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            margin-bottom: 60px;
            text-align: end;
          }
          .picture {
            width: 50%;
          }
          .bottomPart {
            text-align: justify;
          }
          .pattern {
            display: block;
            width: 95%;
            margin-bottom: 10px;
          }
          .PD {
            font-size: 17px;
          }
          .PTwo {
            font-size: 20px;
            width: 80%;
            margin-bottom: 20px;
          }
          .POne {
            font-size: 17px;
            width: 80%;
          }
          .PThree {
            font-size: 22px;
            width: 80%;
          }
          .PFour {
            font-size: 20px;
            width: 80%;
            font-family: '__myFont_c3a675';
          }
          .positionButtoms {
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: nowrap;
            align-items: flex-end;
            justify-content: space-around;
          }
          .buttomTwo {
            background-color: #939191;
          }
          .buttomThree {
            background-color: #939191;
          }
        }
      `}</style>
    </div>
  );
}

Architects.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
