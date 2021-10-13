import React, { useRef, useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import WOW from "wowjs";
import "swiper/swiper-bundle.css";

import uniqid from "uniqid";

import "./style.less";

import Button from "../../component/Button/Button";

import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
} from "swiper";
import CounterContainerItem from "../../component/CounterContainerItem/CounterContainer";

import InstaCredLogo from "../../images/homepage/InstaCredLogo.svg";
import topbannergirl from "../../images/homepage/topbannergirl.png";
import federal from "../../images/homepage/federal.png";
import homecredit from "../../images/homepage/homecredit.png";
import hdfc from "../../images/homepage/hdfc.png";
import icici from "../../images/homepage/icici.png";
import idfc from "../../images/homepage/idfc.png";
import kotak from "../../images/homepage/kotak.png";

import amazon from "../../images/homepage/amazon.png";
import decathlon from "../../images/homepage/decathlon.png";
import flipkart from "../../images/homepage/flipkart.png";
import myntra from "../../images/homepage/myntra.png";
import sangeetha from "../../images/homepage/sangeetha.png";
import tatacliq from "../../images/homepage/tatacliq.png";
import vijaysales from "../../images/homepage/vijaysales.png";
import bharatbooking from "../../images/homepage/bharatbooking.png";
import bigc from "../../images/homepage/bigc.png";
import curefit from "../../images/homepage/curefit.png";
import dell from "../../images/homepage/dell.png";
import duroflex from "../../images/homepage/duroflex.png";
import emibaba from "../../images/homepage/emibaba.png";
import khoslaelectronics from "../../images/homepage/khoslaelectronics.png";
import kurlon from "../../images/homepage/kurlon.png";
import lot from "../../images/homepage/lot.png";
import pai from "../../images/homepage/pai.png";
import poorvika from "../../images/homepage/poorvika.png";
import qrs from "../../images/homepage/qrs.png";
import royaloak from "../../images/homepage/royaloak.png";
import sastiticket from "../../images/homepage/sastiticket.png";
import urbanladder from "../../images/homepage/urbanladder.png";
import via from "../../images/homepage/via.png";

import zebrs from "../../images/homepage/zebrs.png";
import zefo from "../../images/homepage/zefo.png";

import people from "../../images/homepage/people.svg";
import city from "../../images/homepage/city.svg";
import lendersbg from "../../images/homepage/lendersbg.png";
import lendersleftimg from "../../images/homepage/lendersleftimg.png";
import merchantrightimg from "../../images/homepage/merchantrightimg.png";
import emi from "../../images/homepage/emisvg.svg";
import l2 from "../../images/homepage/l2.svg";
import l3 from "../../images/homepage/l3.svg";
import m1 from "../../images/homepage/m1.svg";
import m2 from "../../images/homepage/m2.svg";
import m3 from "../../images/homepage/m3.svg";

import lastsecbg from "../../images/homepage/lastsecbg.png";
import merchantsbg from "../../images/homepage/merchantsbg.png";

import TitleItem from "../../component/TitleItem/TitleItem";
import TestominalItem from "../../component/TestominalItem/TestominalItem";

import lendersbg834 from "../../images/homepage/lendersbg834.png";
import lendersbg1024 from "../../images/homepage/lendersbg1024.png";

import bottom834 from "../../images/homepage/bottom834.png";

import merchantsbg834 from "../../images/homepage/merchantsbg834.png";

import lendersbg480 from "../../images/homepage/lendersbg480.png";

import merchantsbg480 from "../../images/homepage/merchantsbg480.png";

import bottom480 from "../../images/homepage/bottom480.png";

import useWindowDimensions from "../../useWindowDimensions";
Swiper.use([
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
]);

const merchantsArr = [
  { img: urbanladder },
  { img: via },
  { img: vijaysales },
  { img: zebrs },
  { img: zefo },
  { img: amazon },
  { img: bharatbooking },
  { img: bigc },
  { img: curefit },
  { img: decathlon },
  { img: dell },
  { img: duroflex },
  { img: emibaba },
  { img: flipkart },
  { img: khoslaelectronics },
  { img: kurlon },
  { img: lot },
  { img: myntra },
  { img: pai },
  { img: poorvika },
  { img: qrs },
  { img: royaloak },
  { img: sangeetha },
  { img: sastiticket },
  { img: tatacliq },

  { img: urbanladder },
  { img: via },
  { img: vijaysales },
  { img: zebrs },
  { img: zefo },
  { img: amazon },
  { img: bharatbooking },
  { img: bigc },
  { img: curefit },
  { img: decathlon },
  { img: dell },
  { img: duroflex },
  { img: emibaba },
  { img: flipkart },
  { img: khoslaelectronics },
  { img: kurlon },
  { img: lot },
  { img: myntra },
  { img: pai },
  { img: poorvika },
  { img: qrs },
  { img: royaloak },
  { img: sangeetha },
  { img: sastiticket },
  { img: tatacliq },
];

const lendersArr = [
  { img: federal },
  { img: homecredit },
  { img: hdfc },
  { img: idfc },
  { img: icici },
  { img: kotak },
  { img: federal },
  { img: homecredit },
  { img: hdfc },
  { img: idfc },
  { img: icici },
  { img: kotak },
  { img: federal },
  { img: homecredit },
  { img: hdfc },
  { img: idfc },
  { img: icici },
  { img: kotak },
  { img: federal },
  { img: homecredit },
  { img: hdfc },
  { img: idfc },
  { img: icici },
  { img: kotak },

  { img: federal },
  { img: homecredit },
  { img: hdfc },
  { img: idfc },
  { img: icici },
  { img: kotak },
  { img: federal },
  { img: homecredit },
  { img: hdfc },
  { img: idfc },
  { img: icici },
  { img: kotak },
  { img: federal },
  { img: homecredit },
  { img: hdfc },
  { img: idfc },
  { img: icici },
  { img: kotak },
  { img: federal },
  { img: homecredit },
  { img: hdfc },
  { img: idfc },
  { img: icici },
  { img: kotak },
  { img: homecredit },
  { img: hdfc },
];

const testominalArr = [
  {
    desc: "Very much satisfied with the service.I will definetly recommend to other people who don’t have credit card & still want to purchase on EMI. The repayment of EMI is also very easy as it automatically gets debited from the account.",
    name: "- Arabinda",
    male: true,
  },
  {
    desc: "Service is very hassle free. No need of documents and we get an instant credit which can be used for EMI purchase. I will defintely use it again.",
    name: "- Srimanta",
    male: true,
  },
  {
    desc: "This is not my first EMI purchase. I have done it before with my credit card but in comparison with that the Instacred Cardless EMI purchase is more comfortable and easy.",
    name: "- Sonia",
    male: false,
  },
  {
    desc: "Happy with the service. I will prefer Instacred for my EMI purchase in comparison with a Credit Card. To avail a credit card it's a time consuming task and here I got the credit instantly. ",
    name: "- Sunil",
    male: true,
  },
  {
    desc: "Good option for EMI purchase. Less hectic and very few steps to complete the purchase. I will prefer Instacred over a credit card EMI purchase.",
    name: "- Augustine",
    male: true,
  },
  {
    desc: "Very good service. Easy to complete the purchase and would like to do more purchase across different categories available.",
    name: "- Manjula",
    male: false,
  },
  {
    desc: "Happy with such a easy EMI service available. Very hassle free to complete the purchase and would also recommend to others",
    name: "- Ankur",
    male: true,
  },
  {
    desc: "Very easy in terms of completing my EMI purchase. No requirement of card details for the purchase. All you need is mobile number and will definitely use it again.",
    name: "- Latif",
    male: true,
  },
  {
    desc: "Happy and want to do more purchases in future. Easy and understanding steps to complete the EMI purchase online without any card requirement.",
    name: "- Joyson",
    male: true,
  },
  {
    desc: "Service is good. Very convenient to do the EMI purchase just with the mobile number.",
    name: "- Elabanta",
    male: true,
  },
  {
    desc: "Less steps and easy to complete the purchase. No card requirement and hassle free service. Interest rate is high, please help with that.",
    name: "- Stephan",
    male: true,
  },
  {
    desc: "Very good and helpful product. Bought my first few products on EMI and the process was so simple and easy. The direct debit from bank a/c makes life simple and hassle free.",
    name: "- Christoper",
    male: true,
  },
  {
    desc: "It was a good experience and I like to buy anything with InstaCred",
    name: "- Prabhakar",
    male: true,
  },
  {
    desc: "Have credit Card from banks as well and compared to them it is very easy to use, repayment is directly from bank account which is the biggest advantage.",
    name: "- Ragani",
    male: false,
  },
  {
    desc: "Great option to buy things online. Very simple EMIs and simple to get. Thank you for giving this credit scheme",
    name: "- Shibu",
    male: true,
  },
  {
    desc: "Like it. Works good. First time buying mobile phone on EMI, very easy and simple to use.",
    name: "- Jeeve",
    male: true,
  },
  {
    desc: "I was very surprised and happy! And it help me to buy my favorite things with out ready cash! Thank You ",
    name: "Ajeesh",
    male: true,
  },
];

const HomePage = (props) => {
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    window.scroll(0, 0);

    try {
      document.getElementById("contactUs").style.display = "block";
    } catch (error) {}

    document.title =
      "Flexmoney - Simplifying and Democratizing Consumer Finance in India";
    document.getElementsByTagName("META")[3].content =
      "Leading the Buy Now Pay Later Revolution in India. InstaCred, Flexmoney's Credit Platform, enables Lenders to offer instant cardless finance across its merchant network";

    // document.title="Flexmoney"

    new WOW.WOW({
      live: false,
    }).init();

    var title2_swiper = new Swiper(".title_swiper", {
      slidesPerView: "1",
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      loop: true,
      autoplay: {
        delay: 4000,
      },
    });

    var testominal_swiper = new Swiper(".testominal_swiper.swiper-container", {
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      spaceBetween: 0,
      slidesPerView: "1.3",

      breakpoints: {
        1921: {
          slidesPerView: "3.5",
        },
        835: {
          slidesPerView: "3",
        },
        834: {
          slidesPerView: "2",
        },
        768: {
          slidesPerView: "2",
        },
        767: {
          slidesPerView: "1.25",
        },
      },

      navigation: {
        nextEl: ".homesec6 .right_arrow",
        prevEl: ".homesec6 .left_arrow",
      },
      pagination: {
        el: ".homesec6 .swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  const logoList = lendersArr.map((item, i) => {
    return (
      <div className="swiper-slide">
        <img src={item} className="img-fluid" />
      </div>
    );
  });

  const lenderLogoList = lendersArr.map((item, i) => {
    return (
      <div key={i} className="slide slidemarginright">
        <div className="d-f">
          <div>
            <img src={item.img} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    );
  });
  const merchantLogoList = merchantsArr.map((item, i) => {
    return (
      <div key={i} className="slide slidemarginright">
        <div className="d-f">
          <div>
            <img src={item.img} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    );
  });

  const tesominalList = testominalArr.map((item, i) => {
    return (
      <div key={i} className="swiper-slide">
        <TestominalItem male={item.male} desc={item.desc} name={item.name} />
      </div>
    );
  });

  return (
    <>
      <section className="homesec1 wow fadeIn">
        <Row className="row ">
          <Col lg={8} md={10} className="p-0 firstcol">
            <div className="swiper-container title_swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div style={{ paddingBottom: "0" }} className="title1">
                    Leading the
                  </div>
                  <div className="whiteborder">
                    <div className="title2">Buy now, pay later</div>
                  </div>
                  <div className="title1">Revolution</div>
                </div>
                <div className="swiper-slide">
                  <div style={{ marginTop: "0" }} className="whiteborder">
                    <div className="title2">ENABLING LENDERS &amp;</div>
                  </div>
                  <div className="whiteborder">
                    <div className="title2">MERCHANTS TO OFFER</div>
                  </div>
                  <div className="title1">
                    Instant, Cardless Checkout Finance
                  </div>
                </div>
                <div className="swiper-slide ">
                  <div className="w-f">
                    <div style={{ marginTop: "0" }} className="whiteborder">
                      <div className="title2">FULFILLING THE</div>
                    </div>
                  </div>
                  <div className="whiteborder">
                    <div className="title2">ASPIRATIONS OF</div>
                  </div>

                  <div className="title1">
                    India’s Digital Consumer Generation
                  </div>
                </div>
              </div>
            </div>

            <div className="desc ">
              <span>InstaCred ™</span>, Flexmoney’s 360° Instant Cardless Credit
              Platform, enables trusted Banks and Lenders to easily offer
              lender-branded, instant “cardless” checkout finance across a
              Network of Merchant Points of Sale
            </div>
            <Button
              onClick={() => props.history.push("contactus")}
              title="Know More"
            />
          </Col>

          {width < 1024 ? (
            width < 480 ? (
              <div className="w-f t-c">
                <img
                  src={topbannergirl}
                  className="topbannergirlmob fluid wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="1s"
                />
              </div>
            ) : (
              <img
                src={topbannergirl}
                className="topbannergirl wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="1s"
              />
            )
          ) : (
            <img src={topbannergirl} className="topbannergirl wow fadeIn" />
          )}
        </Row>
      </section>
      <section
        className="homesec2 wow fadeInUp"
        data-wow-duration="2s"
        data-wow-delay="1.5s"
      >
        <div className="d-f a-c titlecontainer">
          <div>
            <img src={InstaCredLogo} className="instalogo" />
          </div>
          <div className="title">Network</div>
        </div>
        <div className="desc">
          The InstaCred ™ Network Platform enables ANY Lender or Merchant to
          offer 360° Instant Consumer Credit (EMI or “Pay Later”) at EVERY Point
          of Sale. The top merchants and brands in the country use InstaCred™ to
          offer their customers the widest selection of instant checkout finance
          options:
        </div>

        {width > 834 ? (
          <>
            <Row className="m-0">
              <Col className="p-0 d-f" lg={3}>
                <div className="d-f f-c numbercontainer">
                  <div className="numberText">4800+</div>
                  <div className="numberdesc">Top Merchants</div>
                </div>
              </Col>

              <Col className="p-0 d-f" lg={9}>
                <div className="slider">
                  <div className="slide-track">{merchantLogoList}</div>
                </div>
              </Col>
            </Row>

            <Row className="m-0">
              <Col className="p-0 d-f" lg={3}>
                <div className="d-f f-c numbercontainer">
                  <div className="numberText">6</div>
                  <div className="numberdesc">Lending Partners</div>
                </div>
              </Col>

              <Col className="p-0 d-f" lg={9}>
                <div className="slider">
                  <div className="slide-track"> {lenderLogoList}</div>
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <Row className="m-0">
            <Col className="p-0" lg={2}>
              <div className="d-f f-c numbercontainer">
                <div className="numberText">4800+</div>
                <div className="numberdesc">Top Merchants</div>
              </div>
              <div className="slider">
                <div className="slide-track">{merchantLogoList}</div>
              </div>
            </Col>
            <Col className="p-0 secondcol">
              <div className="d-f f-c numbercontainer">
                <div className="numberText">6</div>
                <div className="numberdesc">Lending Partners</div>
              </div>
              <div className="slider">
                <div className="slide-track">{lenderLogoList}</div>
              </div>
            </Col>
          </Row>
        )}
      </section>
      <section className="homesec3 wow  fadeIn ">
        <div
          data-wow-duration="2s"
          data-wow-delay="0.5s"
          className="title wow fadeInUp"
        >
          Consumers on our Network
        </div>

        <Row
          className="m-0   wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          <Col lg={5} className="p-0">
            <CounterContainerItem img={people} span="M+" count="25" />
            <div className="countertitle">
              <span>InstaCred™ </span> Credit Lines
            </div>
          </Col>
          <Col lg={2} className="p-0 d-f j-c a-c">
            <div className="acrosstext">across</div>
          </Col>
          <Col lg={5} className="p-0 lastcol">
            <CounterContainerItem img={city} span="+" count="100" />
            <div className="countertitle">Cities</div>
          </Col>
        </Row>
      </section>
      <section className="homesec4 p-r wow fadeIn">
        <img
          src={
            width > 1024
              ? lendersbg
              : width < 835
              ? width < 481
                ? lendersbg480
                : lendersbg834
              : lendersbg1024
          }
          className="fluid"
        />
        <div className="content">
          <TitleItem
            title=" for Lenders"
            span1="InstaCred™"
            desc="Offer Branded, Instant Cardless Credit at ANY Merchant Point of Sale."
          />
          <Row className="m-0">
            <Col lg={6} className="p-0 mblenderleftimg">
              <img
                src={lendersleftimg}
                className="fluid wow slideInUp leftbannerimg"
              />
            </Col>
            <Col className="p-0" lg={6}>
              <div
                className="lenderitem d-f wow  fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <div>
                  <img src={emi} />
                </div>
                <div className="itemdesc">
                  Offer Instant EMI and “Pay Later” digital credit lines to
                  existing and new customers with your branding
                </div>
              </div>
              <div
                className="lenderitem d-f wow  fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="1.5s"
              >
                <div>
                  <img src={l2} />
                </div>
                <div className="itemdesc">
                  Plug & Play Integration with your existing systems and
                  processes
                </div>
              </div>
              <div
                className="lenderitem d-f wow  fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="2s"
              >
                <div>
                  <img src={l3} />
                </div>
                <div className="itemdesc">
                  INSTANT AVAILABILITY of your Branded Credit Line across a
                  Large and Growing Multi-Category Merchant Network
                </div>
              </div>
              <div
                className=" wow  fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="2.4s"
              >
                <Button
                  onClick={() => props.history.push("lenders")}
                  title="Know More"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="homesec5 p-r wow fadeIn">
        <img
          src={
            width > 834
              ? merchantsbg
              : width < 481
              ? merchantsbg480
              : merchantsbg834
          }
          className="fluid"
        />
        <div className="content">
          <TitleItem
            black
            title=" for Merchants"
            span1="InstaCred™"
            desc="Offer the broadest set of Instant Checkout Finance Options (EMI and “Pay Later”) from a network of TRUSTED LENDERS"
          />
          <Row className="m-0">
            <Col className="p-0" lg={6}>
              <div
                className="lenderitem d-f wow  fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <div>
                  <img src={m1} />
                </div>
                <div className="itemdesc">
                  Offer Instant Cardless Checkout Finance (EMI and “Pay Later”)
                  to All Your Shoppers via a Single Integration
                </div>
              </div>
              <div
                className="lenderitem d-f wow  fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="1.5s"
              >
                <div>
                  <img src={m2} />
                </div>
                <div className="itemdesc">
                  SMART APIs to Check Credit Eligibility across InstaCred’s
                  large (25 M+) and growing pre-approved user base
                </div>
              </div>
              <div
                className="lenderitem d-f wow  fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="2s"
              >
                <div>
                  <img src={m3} />
                </div>
                <div className="itemdesc">
                  Access InstaCred’s FULL LENDER NETWORK to provide the Best
                  Financing Options to your Customers
                </div>
              </div>
              <div
                className=" wow  fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="2s"
              >
                <Button
                  onClick={() => props.history.push("merchants")}
                  title="Know More"
                />
              </div>
            </Col>
            <Col lg={6} className="p-0 mblenderleftimg">
              <img
                src={merchantrightimg}
                className="wow slideInUp fluid leftbannerimg"
              />
            </Col>
          </Row>
        </div>
      </section>

      <section
        className="homesec6 wow  fadeInUp "
        data-wow-duration="1.5s"
        data-wow-delay="0.5s"
      >
        <TitleItem black title="Shoppers love " span2="InstaCred™" />

        <div className="testominalcontainer">
          <div className="d-f a-c">
            <div>
              {width > 1023 ? (
                <svg
                  id="left-arrow"
                  className="left_arrow c-p us-none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.26"
                  height="49.804"
                  viewBox="0 0 29.26 49.804"
                >
                  <g
                    id="Group_3162"
                    data-name="Group 3162"
                    transform="translate(0)"
                  >
                    <path
                      id="Path_25913"
                      data-name="Path 25913"
                      d="M102.272,22.959,124.436.8a2.73,2.73,0,0,1,3.853,0l1.632,1.632a2.728,2.728,0,0,1,0,3.853L111.31,24.892l18.632,18.632a2.731,2.731,0,0,1,0,3.854l-1.632,1.631a2.73,2.73,0,0,1-3.853,0L102.272,26.825a2.749,2.749,0,0,1,0-3.866Z"
                      transform="translate(-101.478)"
                      fill="#216a33"
                    />
                  </g>
                </svg>
              ) : null}
            </div>
            <div className="swiper-container testominal_swiper">
              <div className="swiper-wrapper">{tesominalList}</div>
              <div className="swiper-pagination"></div>
            </div>

            <div>
              {width > 1023 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.26"
                  className="right_arrow c-p us-none"
                  height="49.804"
                  viewBox="0 0 29.26 49.804"
                >
                  <g id="right-arrow" transform="translate(-0.001)">
                    <g
                      id="Group_3162"
                      data-name="Group 3162"
                      transform="translate(0.001)"
                    >
                      <path
                        id="Path_25913"
                        data-name="Path 25913"
                        d="M129.943,22.959,107.78.8a2.73,2.73,0,0,0-3.853,0l-1.632,1.632a2.728,2.728,0,0,0,0,3.853l18.611,18.611L102.274,43.523a2.731,2.731,0,0,0,0,3.853l1.632,1.631a2.73,2.73,0,0,0,3.853,0l22.184-22.183a2.749,2.749,0,0,0,0-3.866Z"
                        transform="translate(-101.478)"
                        fill="#216a33"
                      />
                    </g>
                  </g>
                </svg>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="homesec7 wow  fadeIn p-r">
        <img
          src={width > 834 ? lastsecbg : width < 481 ? bottom480 : bottom834}
          className="fluid"
        />
        <div className="content">
          <Row className="m-0">
            <Col lg={8} className="p-0">
              <div className="title">
                Activate Your{" "}
                <span style={{ fontStyle: "italic" }}>InstaCred™</span> Credit
                Line
              </div>
              <div className="desc">
                Enjoy the Convenience of a fully digital, Cardless EMI Shopping
                Experience at all your Favourite Merchants and Brands, from some
                of the most trusted Banks and Consumer Finance Lenders in India
              </div>
              <div className="desc1">
                Check your InstaCred™ Credit Line Eligibility
              </div>
              <Button
                onClick={() =>
                  window.open(
                    "https://instacred.me/new-user-activation?utm_source=FMwebsite",
                    "_blank"
                  )
                }
                title="Check Now"
              />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default HomePage;
