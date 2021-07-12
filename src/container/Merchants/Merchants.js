import React, { useRef, useState, useEffect } from "react";
import "./style.less";

import useWindowDimensions from "../../useWindowDimensions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import WOW from "wowjs";
import "swiper/swiper-bundle.css";
// import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import Button from "../../component/Button/Button";
import CounterContainerItem from "../../component/CounterContainerItem/CounterContainer";

import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
} from "swiper";
//----------------------- images imports ------------------------//
import bannerimg from "../../images/merchants/bannerimg.png";
import tabbannerimg from "../../images/merchants/tabbannerimg.png";
import banapproved1 from "../../images/merchants/banapproved1.jpg";
import mbbanapproved1 from "../../images/merchants/mbbanapproved1.jpg";

// import rightimg from "../../images/merchants/rightimg.png";
// import mbrightimg from "../../images/merchants/mbrightimg.svg";
import merchantsrightimg1 from "../../images/merchants/merchants1.png";
import merchantsrightimg2 from "../../images/merchants/merchants2.png";
import merchantsrightimg3 from "../../images/merchants/merchants3.png";

import graydot from "../../images/merchants/graydot.png";
import greendot from "../../images/merchants/greendot.png";
import verticalline from "../../images/merchants/verticalline.png";

import rightArr from "../../images/rightArr.svg";
import leftArr from "../../images/leftArr.svg";

import cardimg1 from "../../images/merchants/fashionclothing.png";
import cardimg2 from "../../images/merchants/travelholidays.png";
import cardimg3 from "../../images/merchants/laptopstablets.png";
import cardimg4 from "../../images/merchants/cat_fitness_green.png";
import cardimg5 from "../../images/merchants/homeApp-green.png";
import cardimg6 from "../../images/merchants/electronics-green.png";
import cardimg7 from "../../images/merchants/education.png";
import cardimg8 from "../../images/merchants/mob-green.png";
import cardimg9 from "../../images/merchants/watchces.png";
import cardimg10 from "../../images/merchants/homedeco.png";

import amazon from "../../images/merchants/amazon.png";
import decathlon from "../../images/merchants/decathlon.png";
import flipkart from "../../images/merchants/flipkart.png";
import myntra from "../../images/merchants/myntra.png";
import vijaysales from "../../images/merchants/vijaysales.png";

import icici from "../../images/merchants/icici.png";
import hdfc from "../../images/merchants/hdfc.png";
import kodak from "../../images/merchants/kodak.png";
import feederal from "../../images/merchants/feederal.png";
import homecredit from "../../images/merchants/homecredit.png";
import idfc from "../../images/merchants/idfc.png";

import people2 from "../../images/merchants/merchant_s5_people.svg";
import cityscape from "../../images/merchants/merchant_s5_city.svg";

import cardbg from "../../images/merchants/cardbg.svg";
import leftquote from "../../images/merchants/leftquote.svg";
// import leftquoteBlur from "../../images/merchants/left-quote.png";

import footerbg from "../../images/merchants/footerbg.png";
import footerrightimg from "../../images/merchants/footerrightimg.png";
import mbfooterbg from "../../images/merchants/mbfooterbg.png";
import bottombg_mob from "../../images/lenders/bottombg_mob.png";
import bottombg_desktop from "../../images/lenders/bottombg_desktop.png";

//-----------------------end of images imports ------------------------//

import banner1 from "../../images/merchants/banner1.jpg";
import banner2 from "../../images/merchants/banner2.jpg";
import mbbanner1 from "../../images/merchants/mbbanner1.jpg";
import mbbanner2 from "../../images/merchants/mbbanner2.jpg";
import bgdesk from "../../images/careers/bgdesk.png";
import bgmobile from "../../images/merchants/bgmobile.png";
import bg_ipad from "../../images/merchants/bg_ipad.png";
// import bg_ipad from "../../images/careers/bg_ipad_1.png";

import slider1mob from "../../images/merchants/merchants_banner1_mob.jpg";
import sec2logo1 from "../../images/careers/sec2logo1.png";
import sec2logo2 from "../../images/careers/sec2logo2.png";
import sec2logo3 from "../../images/careers/sec2logo3.png";

Swiper.use([
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
]);

const sectionOnebannerDataArr = [
  {
    img: banner1,
    mbimg: mbbanner1,
  },
  {
    img: banner2,
    mbimg: mbbanner2,
  },
];
const sectionTwoDataArr = [
  {
    desc: "Get access to 25M+ pre-approved users across 6 Banks & NBFC with a Single Integration",
    rightImg: merchantsrightimg1,
    // mbImg: mbrightimg,
  },
  {
    desc: "Increase Conversion & Order Value with our Smart Eligibility Check API",
    rightImg: merchantsrightimg2,
    // mbImg: mbrightimg,
  },
  {
    desc: "Issue new credit lines to users to complete the transaction. Fully Digital and Paperless experience that takes less than 5 minutes",
    rightImg: merchantsrightimg3,
    // mbImg: mbrightimg,
  },
];
const sectionThreeCardDataArr = [
  {
    img: cardimg1,
    cardTitle: "Fashion & Clothing",
  },
  {
    img: cardimg2,
    cardTitle: "Travel & Holidays",
  },
  {
    img: cardimg3,
    cardTitle: "Laptops & Tablets",
  },
  {
    img: cardimg4,
    cardTitle: "Fitness & Personal Care",
  },
  {
    img: cardimg5,
    cardTitle: "Electronics & Appliances",
  },
  {
    img: cardimg6,
    cardTitle: "Laptops & Tablets",
  },
  {
    img: cardimg7,
    cardTitle: "Education",
  },
  {
    img: cardimg8,
    cardTitle: "Mobiles",
  },
  {
    img: cardimg9,
    cardTitle: "Watches & Accessories",
  },
  {
    img: cardimg10,
    cardTitle: "Home & Furnishing",
  },
];
const sectionFourImgArr = [
  {
    img: icici,
  },
  {
    img: hdfc,
  },
  {
    img: kodak,
  },
  {
    img: feederal,
  },
  {
    img: homecredit,
  },
  {
    img: idfc,
  },
  {
    img: icici,
  },
  {
    img: hdfc,
  },
  {
    img: kodak,
  },
  {
    img: feederal,
  },
  {
    img: homecredit,
  },
  {
    img: idfc,
  },
  {
    img: icici,
  },
  {
    img: hdfc,
  },
  {
    img: kodak,
  },
  {
    img: feederal,
  },
  {
    img: homecredit,
  },
  {
    img: idfc,
  },
  {
    img: icici,
  },
  {
    img: hdfc,
  },
  {
    img: kodak,
  },
  {
    img: feederal,
  },
  {
    img: homecredit,
  },
  {
    img: idfc,
  },
  {
    img: icici,
  },
  {
    img: hdfc,
  },
  {
    img: kodak,
  },
  {
    img: feederal,
  },
  {
    img: homecredit,
  },
  {
    img: idfc,
  },
];
const sectionFiveLendersDataArr = [
  {
    img: amazon,
    name: "John Don",
    designation: "Founder & CEO, Flipkart",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
  {
    img: decathlon,
    name: "John Don",
    designation: "Founder & CEO, Flipkart",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
  {
    img: flipkart,
    name: "John Don",
    designation: "Founder & CEO, Flipkart",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
  {
    img: myntra,
    name: "John Don",
    designation: "Founder & CEO, Flipkart",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
  {
    img: vijaysales,
    name: "John Don",
    designation: "Founder & CEO, Flipkart",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
];

var newcareersec1_swiper = new Swiper(".newsec1_swiper.swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".newsec1_swiper .swiper-pagination",
    clickable: true,
  },
});
var mbnewsec1_swiper = new Swiper(".mbnewsec1_swiper.swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".mbnewsec1_swiper .swiper-pagination",
    clickable: true,
  },
});

const Lenders = (props) => {
  const { height, width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const indexCount = useRef(0);
  var swiperOptions = {
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    speed: 1000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
  };
  useEffect(() => {
    document.title =
      "Flexmoney: Merchants - Grow your business with Instant EMI from a network of reputed Lenders";
    document.getElementsByTagName("META")[3].content =
      "Get access to 25M+ pre-approved users across 6 Banks & NBFC with a Single Integration";

    new WOW.WOW({
      live: false,
    }).init();

    window.scroll(0, 0);

    var newcareersec1_swiper = new Swiper(".newsec1_swiper.swiper-container", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".newsec1_wrapper .swiper-pagination",
        clickable: true,
      },
    });
    var mbnewsec1_swiper = new Swiper(".mbnewsec1_swiper.swiper-container", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".mbnewsec1_swiper .swiper-pagination",
        clickable: true,
      },
    });

    // setInterval for section 2
    setInterval(() => {
      if (indexCount.current <= 2) {
        indexCount.current++;
      }
      if (indexCount.current > 2) {
        indexCount.current = 0;
      }
      setIndex(indexCount.current);
    }, 2500);
    // end of setInterval for section 2
    var mblenderssec2_swiper = new Swiper(
      ".mblenderssec2_swiper.swiper-container",
      {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoHeight: false,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".mblenderssec2_swiper .swiper-pagination",
          clickable: true,
        },
      }
    );

    var lendersec5_swiper = new Swiper(".lendersec5_swiper.swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      grabCursor: true,
      autoHeight: false,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        767: {
          slidesPerView: 1.4,
        },
        1280: {
          slidesPerView: 1.5,
        },
        1365: {
          slidesPerView: 1.6,
        },

        1533: {
          slidesPerView: 1.6,
        },
        1919: {
          slidesPerView: 1.5,
        },
      },
      pagination: {
        el: ".m_lendersec5 .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".m_lendersec5 .right_arrow",
        prevEl: ".m_lendersec5 .left_arrow",
      },
    });

    // var element = document.querySelector(".m_lenderssec4 .slider_track");
    // element.animate(
    //   {
    //     transform: ["translateX(0)", "translateX(calc(-10.813em * 24))"], // move by 500px
    //   },
    //   {
    //     delay: 500,
    //     duration: 20000,
    //     iterations: Infinity,
    //   }
    // );

    var swiper_container_free_mode = new Swiper(
      ".m_lenderssec4 .swiper-container-free-mode",
      swiperOptions
    );
  }, []);

  const bannerList = sectionOnebannerDataArr.map((bannerData, i) => (
    <div className="swiper-slide" key={i}>
      <img src={bannerData.img} className="slider_img" />
    </div>
  ));

  const mbBannerList = sectionOnebannerDataArr.map((mbbannerData, i) => (
    <div className="swiper-slide" key={i}>
      <img src={mbbannerData.mbimg} className="mb_slider_img" />
    </div>
  ));

  const secTwoTimelineList = sectionTwoDataArr.map((data, i) => (
    <div
      className="desc_wrapper"
      style={
        index === i
          ? {
              backgroundColor: "#ffffff",
              border: "1px dashed #7EFFAC",
              fontWeight: "bold",
            }
          : null
      }
      key={i}
      // onClick={() => setIndex(i)}
    >
      {index === i ? (
        <img src={greendot} className="dot_circle" />
      ) : (
        <img src={graydot} className="dot_circle" />
      )}

      <div className="desc">{data.desc}</div>
    </div>
  ));

  const sectionTwoMbCarouselList = sectionTwoDataArr.map((data, i) => (
    <div className="swiper-slide" key={i}>
      <div className="mbdesc">{data.desc}</div>
      <img src={data.rightImg} className="mbrightimg" />
    </div>
  ));

  const lendersList = sectionFiveLendersDataArr.map((lenderPartner, i) => {
    return (
      <div key={i} className="swiper-slide">
        <div className="partner_wrapper">
          <img src={lenderPartner.img} className="partner_img" />
          <div className="partner_content">
            <div className="partner_name">{lenderPartner.name}</div>
            <div className="partner_designation">
              {lenderPartner.designation}
            </div>
            <div className="partner_desc">{lenderPartner.desc}</div>
          </div>
        </div>
      </div>
    );
  });

  const lendersSecThreeCards = sectionThreeCardDataArr.map((lenderCard, i) => {
    return (
      <div className="lender_card d-f f-c a-c j-c" key={i}>
        <img src={lenderCard.img} className="lender_card_img" />
        <div className="card_title">{lenderCard.cardTitle}</div>
      </div>
    );
  });

  const merchantsImgList = sectionFourImgArr.map((merchantImg, i) => {
    return (
      // <div className="img_wrapper" key={i}>
      //   <img src={merchantImg.img} />
      // </div>
      <div
        className="swiper-slide"
        key={i}
        // style={{ backgroundImage: `url(${merchantImg.img})` }}
      >
        <img src={merchantImg.img} className="freemode_fluid" />
      </div>
    );
  });

  return (
    <>
      <div className="lender_breadcrumb">
        <span className="home_crumb" onClick={() => props.history.push("/")}>
          Home
        </span>
        &nbsp; {">"} &nbsp;Merchants
      </div>

      <section className="m_newsec1 wow fadeIn">
        {width > 1023 ? (
          <div className="newsec1_wrapper">
            {/* <div className="newsec1_swiper swiper-container">
              <div className="swiper-wrapper">{bannerList}</div>
            </div> */}
            <div className="newsec1_swiper">
              <img src={banapproved1} className="slider_img" />
            </div>
            <div className="text_content">
              <div className="text_wrapper">
                <div className="title">Merchants</div>
                <div className="m1_desc">
                  Grow your business with Instant EMI from a network of reputed
                  Lenders
                </div>
                <div className="lenders_btn">
                  <Button
                    onClick={() => props.history.push("contactus")}
                    title="Contact Us"
                  />
                </div>
              </div>
              <img src={bgdesk} className="greenbgcut" />
            </div>
            {/* <div className="swiper-pagination"></div> */}
          </div>
        ) : (
          <div className="mb_newsec1_wrapper wow fadeIn">
            {/* <div className="mbnewsec1_swiper swiper-container">
              <div className="swiper-wrapper">{mbBannerList}</div>
              <div className="swiper-pagination"></div>
            </div> */}
            <div className="mbnewsec1_swiper">
              <img src={mbbanapproved1} className="mb_slider_img" />
            </div>
            <div className="mb_container">
              {width < 500 ? (
                <img src={bgmobile} className="bgmobile" />
              ) : (
                <img src={bg_ipad} className="bgmobile" />
              )}
              <div className="mb_text_container">
                <div className="title">Merchants</div>
                <div className="m1_desc">
                  Grow your business with Instant EMI from a network of reputed
                  Lenders
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <div
        className="m_lenderssec2 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="0.5s"
      >
        {width > 1023 ? (
          <div className="lendersec2_flex">
            <div className="flex_left">
              <img src={verticalline} className="verticalline" />
              {secTwoTimelineList}
            </div>
            <div className="flex_right">
              <img
                src={sectionTwoDataArr[index].rightImg}
                className="rightimg"
              />
            </div>
          </div>
        ) : (
          <div className="mblenderssec2 wow fadeInUp">
            <div className="mblenderssec2_swiper swiper-container">
              <div className="swiper-wrapper">{sectionTwoMbCarouselList}</div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        )}
      </div>

      <div
        className="m_lenderssec4 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="0.5s"
      >
        <div className="heading_wrapper">
          <div className="title">Our Lending Partners</div>
        </div>

        {/* <div className="slider">
          <div className="slider_track">{merchantsImgList}</div>
        </div> */}
        <div className="swiper-container swiper-container-free-mode">
          <div class="swiper-wrapper">{merchantsImgList}</div>
        </div>
      </div>

      <div
        className="merchant_section_4 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="0.5s"
      >
        <div className="ms4_content">
          <div className="ms4_heading">
            <div className="title">Consumers on our Network</div>
          </div>

          <div className="ms4_counting_num">
            <div className="ms4_cn_left">
              <img className="ms4_img_left" src={people2} alt="" />
              <CounterContainerItem colorClass="cw" span="M+" count="25" />
              <p>Credit Lines</p>
            </div>

            <div className="ms4_cn_middle">across</div>

            <div className="ms4_cn_right">
              <img className="ms4_img_right" src={cityscape} alt="" />
              <CounterContainerItem colorClass="cw" span="+" count="100" />
              <p>Cities</p>
            </div>
          </div>

          <div className="ms4_counting_num1">
            <div className="ms4_cn_left">
              <p>Credit Lines</p>
            </div>
            <div className="ms4_cn_right  ">
              <p>Cities</p>
            </div>
          </div>
        </div>
      </div>

      {/* <img src={leftquoteBlur} alt="leftquoteBlur" className="leftquote leftquote_blur" /> */}
      {/* <img src={leftquote} alt="leftquote" className="leftquote" /> */}
      {/* <div className="m_lendersec5 wow fadeIn">
        <Row className="m-0">
          <Col className="p-0 first_col" lg={4}>
            <img src={leftquote} alt="leftquote" className="leftquote" />

            <div className="quote_content">
              <div className="title">What our Merchant Partners say</div>
              <div className="desc">
                Hear from those who have been with us in our journey
              </div>
            </div>
          </Col>
          {width > 1023 ? (
            <Col className="p-0 d-f j-c a-c second_col" lg={1}>
              <div className="d-f f-c arrows_wrapper">
                <div>
                  <img className="left_arrow" src={leftArr} />
                </div>
                <div>
                  <img className="right_arrow" src={rightArr} />
                </div>
              </div>
            </Col>
          ) : null}

          <Col className="p-0 third_col" lg={7}>
            <div className="lendersec5_swiper swiper-container">
              <div className="swiper-wrapper">{lendersList}</div>
              <div className="swiper-pagination"></div>
            </div>
          </Col>
        </Row>
      </div> */}

      <div className="m_lenderssec6 wow fadeIn">
        <div className="lenderssec6_wrapper">
          {width > 1023 ? (
            <img src={bottombg_desktop} className="footerbg fluid" />
          ) : (
            <img src={bottombg_mob} className="mbfooter_bg fluid" />
          )}
          {width > 1023 ? (
            <img src={footerrightimg} className="footer_right_img" />
          ) : null}
          <div className="text_wrapper">
            <h3 className="title">Reach out for more!</h3>
            <p className="desc">
              Reach out and our experienced team will help you with the best
              solution to help you grow your business
            </p>
            <button
              className="lenderssec6_btn d-f j-c a-c"
              onClick={() => props.history.push("/contactus")}
            >
              GET IN TOUCH WITH US
            </button>
          </div>
        </div>
      </div>

      {/* <div className="lenderssec7 wow fadeIn"></div> */}
    </>
  );
};

export default Lenders;
