import React, { useRef, useState, useEffect } from "react";
import "./style.less";

import useWindowDimensions from "../../useWindowDimensions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import WOW from "wowjs";
import "swiper/swiper-bundle.css";
// import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import Button from "../../component/Button/Button";

import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
} from "swiper";
//----------------------- images imports ------------------------//

import banner1 from "../../images/lenders/banner1.jpg";
import banner2 from "../../images/lenders/banner2.jpg";
import mbbanner1 from "../../images/lenders/mbbanner1.jpg";
import mbbanner2 from "../../images/lenders/mbbanner2.jpg";

// import rightimg from "../../images/lenders/rightimg.png";
// import mbrightimg from "../../images/lenders/mbrightimg.png";
import lenderrightimg1 from "../../images/lenders/lenderrightimg1.png";
import lenderrightimg2 from "../../images/lenders/lenderrightimg2.png";
import lenderrightimg3 from "../../images/lenders/lenderrightimg3.png";

import graydot from "../../images/lenders/graydot.png";
import greendot from "../../images/lenders/greendot.png";
import verticalline from "../../images/lenders/verticalline.png";

import rightArr from "../../images/rightArr.svg";
import leftArr from "../../images/leftArr.svg";

import cardimg1 from "../../images/lenders/fashionclothing.png";
import cardimg2 from "../../images/lenders/travelholidays.png";
import cardimg3 from "../../images/lenders/laptopstablets.png";
import cardimg4 from "../../images/lenders/cat_fitness_green.png";
import cardimg5 from "../../images/lenders/homeApp-green.png";
import cardimg6 from "../../images/lenders/electronics-green.png";
import cardimg7 from "../../images/lenders/education.png";
import cardimg8 from "../../images/lenders/mob-green.png";
import cardimg9 from "../../images/lenders/watchces.png";
import cardimg10 from "../../images/lenders/homedeco.png";

import amazon from "../../images/lenders/amazon.png";
import decathlon from "../../images/lenders/decathlon.png";
import flipkart from "../../images/lenders/flipkart.png";
import myntra from "../../images/lenders/myntra.png";
import vijaysales from "../../images/lenders/vijaysales.png";

import cardbg from "../../images/lenders/cardbg.svg";
import leftquote from "../../images/lenders/leftquote.svg";
import leftquoteBlur from "../../images/lenders/left-quote.png";

import footerbg from "../../images/lenders/footerbg.png";
import footerrightimg from "../../images/lenders/footerrightimg.png";
import mbfooterbg from "../../images/lenders/mbfooterbg.png";
import bgdesk from "../../images/lenders/bgdesk.png";
import bgmobile from "../../images/lenders/bgmobile.png";
import bg_ipad from "../../images/lenders/bg_ipad.png";

import bottombg_mob from "../../images/lenders/bottombg_mob.png";
import bottombg_desktop from "../../images/lenders/bottombg_desktop.png";

//-----------------------end of images imports ------------------------//

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
    desc: "Start offering EMI & Pay Later solutions across 3800+ merchants across leading categories with your Branding",
    rightImg: lenderrightimg1,
    // mbImg: mbrightimg,
  },
  {
    desc: "Offer Purchase financing to all existing customer segments through Mobile number based Cardless experience",
    rightImg: lenderrightimg2,
    // mbImg: mbrightimg,
  },
  {
    desc: "Secure & frictionless integration with legacy banking systems. Access entire merchant network with Single Integration",
    rightImg: lenderrightimg3,
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
    cardTitle: "Insurance",
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
    img: vijaysales,
  },
  {
    img: amazon,
  },
  {
    img: flipkart,
  },
  {
    img: decathlon,
  },
  {
    img: myntra,
  },
  {
    img: vijaysales,
  },
  {
    img: decathlon,
  },
  {
    img: vijaysales,
  },
  {
    img: amazon,
  },
  {
    img: flipkart,
  },
  {
    img: decathlon,
  },
  {
    img: myntra,
  },
  {
    img: vijaysales,
  },
  {
    img: decathlon,
  },
  {
    img: vijaysales,
  },
  {
    img: amazon,
  },
  {
    img: flipkart,
  },
  {
    img: decathlon,
  },
  {
    img: myntra,
  },
  {
    img: vijaysales,
  },
  {
    img: decathlon,
  },
  {
    img: vijaysales,
  },
  {
    img: amazon,
  },
  {
    img: flipkart,
  },
  {
    img: decathlon,
  },
  {
    img: myntra,
  },
  {
    img: vijaysales,
  },
  {
    img: decathlon,
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

const Lenders = (props) => {
  const { height, width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const indexCount = useRef(0);

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();

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
      grabCursor: true,
      loop: true,
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
        el: ".lendersec5 .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".lendersec5 .right_arrow",
        prevEl: ".lendersec5 .left_arrow",
      },
    });
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
      <div className="img_wrapper" key={i}>
        <img src={merchantImg.img} />
      </div>
    );
  });

  return (
    <>
      <div className="lender_breadcrumb">
        <span className="home_crumb" onClick={() => props.history.push("/")}>
          Home
        </span>
        &nbsp; {">"} &nbsp;Lenders
      </div>

      <section className="l_newsec1 wow fadeIn">
        {width > 1023 ? (
          <div className="newsec1_wrapper">
            <div className="newsec1_swiper swiper-container">
              <div className="swiper-wrapper">{bannerList}</div>
            </div>
            <div className="text_content">
              <div className="text_wrapper">
                <div className="title">Lenders</div>
                <div className="desc">
                  Offer branded Cardless EMI & Pay Later across our omni-channel
                  Merchant Network
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
            <div className="swiper-pagination"></div>
          </div>
        ) : (
          <div className="mb_newsec1_wrapper">
            <div className="mbnewsec1_swiper swiper-container">
              <div className="swiper-wrapper">
                {mbBannerList}
              </div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="mb_container">
              {width < 500 ? (
                <img src={bgmobile} className="bgmobile" />
              ) : (
                <img src={bg_ipad} className="bgmobile" />
              )}
              <div className="mb_text_container">
                <div className="title">Lenders</div>
                <div className="desc">
                  Offer branded Cardless EMI & Pay Later across our omni-channel
                  Merchant Network
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <div className="lenderssec2 wow fadeInUp" data-wow-duration="1.5s"
        data-wow-delay="0.5s">
        {width > 1023 ? (
          <div className="lendersec2_flex wow fadeInUp">
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

      <div className="lenderssec3 wow fadeInUp" data-wow-duration="1.5s"
        data-wow-delay="0.5s">
        <div className="heading_wrapper">
          <div className="title">Multi-category Merchant EMI Network</div>
          <div className="desc">
            Increase stickiness and consumption as users start using their
            cardless credit lines across different categories of merchants
          </div>
        </div>

        <div className="cards_wrapper">
          <div className="card_flex">{lendersSecThreeCards}</div>
        </div>
      </div>

      <div className="lenderssec4 wow fadeInUp" data-wow-duration="1s"
        data-wow-delay="0.5s">
        <div className="heading_wrapper">
          <div className="title">3800+ Merchant Partners</div>
          <div className="desc">
            Plug-in to our network of merchants with ‘Single Integration’
          </div>
        </div>

        <div className="slider">
          <div className="slider_track">{merchantsImgList}</div>
        </div>
      </div>

      {/* <img src={leftquoteBlur} alt="leftquoteBlur" className="leftquote leftquote_blur" /> */}
      {/* <div className="lendersec5 wow fadeInUp">
        <Row className="m-0">
          <Col className="p-0 first_col" lg={4}>
            <img src={leftquote} alt="leftquote" className="leftquote" />

            <div className="quote_content">
              <div className="title">What our Lending Partners say</div>
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

      <div className="lenderssec6 wow fadeInUp">
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
