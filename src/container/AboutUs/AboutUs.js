import React, { useRef, useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import WOW from "wowjs";
import "swiper/swiper-bundle.css";
import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import TitleItem from "../../component/TitleItem/TitleItem";
import rightArr from "../../images/rightArr.svg";
import leftArr from "../../images/leftArr.svg";
import "./style.less";

import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
} from "swiper";

import bannerimg from "../../images/aboutus/bannerimg.png";

import img1 from "../../images/aboutus/img1.png";
import img2 from "../../images/aboutus/img2.png";
import img3 from "../../images/aboutus/img3.png";
import img4 from "../../images/aboutus/img4.png";

import img5 from "../../images/aboutus/img5.png";
import img6 from "../../images/aboutus/img6.png";
import img7 from "../../images/aboutus/img7.png";
import img8 from "../../images/aboutus/img8.png";

import img9 from "../../images/aboutus/img9.png";
import img10 from "../../images/aboutus/img10.png";
import img11 from "../../images/aboutus/img11.png";
import img12 from "../../images/aboutus/img12.png";

import mbimg1 from "../../images/aboutus/mbimg1.png";
import mbimg2 from "../../images/aboutus/mbimg2.png";
import mbimg3 from "../../images/aboutus/mbimg3.png";
import mbimg4 from "../../images/aboutus/mbimg4.png";

import mbimg5 from "../../images/aboutus/mbimg5.png";
import mbimg6 from "../../images/aboutus/mbimg6.png";
import mbimg7 from "../../images/aboutus/mbimg7.png";
import mbimg8 from "../../images/aboutus/mbimg8.png";

import mbimg9 from "../../images/aboutus/mbimg9.png";
import mbimg10 from "../../images/aboutus/mbimg10.png";
import mbimg11 from "../../images/aboutus/mbimg11.png";
import mbimg12 from "../../images/aboutus/mbimg12.png";

import alex from "../../images/aboutus/alex.png";
import ambarish from "../../images/aboutus/ambarish.png";
import beerud from "../../images/aboutus/beerud.png";
import ben from "../../images/aboutus/ben.png";
import mike from "../../images/aboutus/mike.png";
import ramesh from "../../images/aboutus/ramesh.png";

import aashish from "../../images/aboutus/aashish.png";
import arun from "../../images/aboutus/arun.png";
import chellakrishna from "../../images/aboutus/chellakrishna.png";
import jigar from "../../images/aboutus/jigar.png";
import ksujit from "../../images/aboutus/ksujit.png";
import kunal from "../../images/aboutus/kunal.png";

import nipun from "../../images/aboutus/nipun.png";
import prasad from "../../images/aboutus/prasad.png";
import priyankar from "../../images/aboutus/priyankar.png";
import pulkit from "../../images/aboutus/pulkit.png";
import saurin from "../../images/aboutus/saurin.png";
import yezdi from "../../images/aboutus/yezdi.png";
import rajeev from "../../images/aboutus/rajeev.png";
import rishad from "../../images/aboutus/rishad.png";

import useWindowDimensions from "../../useWindowDimensions";
import TeamMemberItem from "../../component/TeamMemberItem/TeamMemberItem";
import AdvisorItem from "../../component/AdvisorItem/AdvisorItem";

Swiper.use([
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
]);

const arry2 = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const arry3 = [
  mbimg1,
  mbimg2,
  mbimg3,
  mbimg4,
  mbimg5,
  mbimg6,
  mbimg7,
  mbimg8,
  mbimg9,
  mbimg10,
  mbimg11,
  mbimg12,
];

const teamArr = [
  {
    img: yezdi,
    name: "Yezdi Lashkari",
    designation: "Founder & CEO",
    url: "https://www.linkedin.com/in/yezdilashkari/",
  },
  {
    img: priyankar,
    name: "Priyankar Srinivas ",
    designation: "Chief Business Officer",
    url: "https://www.linkedin.com/in/priyankar-mukund-srinivas-5213881/",
  },
  {
    img: arun,
    name: "Arun Ganapathy",
    designation: "SVP - Head of Operations",
    url: "https://www.linkedin.com/in/wwwlinkedinarunganapathy/",
  },
  {
    img: nipun,
    name: "Nipun Dave",
    designation: "VP - Head of Engineering",
    url: "https://www.linkedin.com/in/nipundave/",
  },
  {
    img: kunal,
    name: "Kunal Shah",
    designation: "VP - Head Product",
    url: "https://www.linkedin.com/in/shahkunaln/",
  },
  {
    img: jigar,
    name: "Jigar Tanna",
    designation: "Lead - Engineering",
    url: "https://www.linkedin.com/in/jigar-tanna-504817a/",
  },
  {
    img: pulkit,
    name: "Pulkit Puri",
    designation: "Head - Merchant Acquisition",
    url: "https://www.linkedin.com/in/pulkit-puri/",
  },
  {
    img: saurin,
    name: "Saurin Sanjanwala",
    designation: "Head Marketing & Portfolio",
    url: "https://www.linkedin.com/in/saurin-sanjanwala-a058a15/",
  },
  {
    img: aashish,
    name: "Aashish Pareek",
    designation: "Zonal Head - Lender Relations",
    url: "https://www.linkedin.com/in/aashishpareek/",
  },
  {
    img: chellakrishna,
    name: "Chella Krishna",
    designation: "Head - Payment Operations & Settlement",
    url: "https://www.linkedin.com/in/chellakrishnan-p-78994440/",
  },
  {
    img: ksujit,
    name: "K Sujit Nair",
    designation: "Zonal Head - Lender Relations",
    url: " https://www.linkedin.com/in/k-sujit-nair-93714314/",
  },
  {
    img: prasad,
    name: "Prasad Gawde",
    designation: "Director of Engineering",
    url: "https://www.linkedin.com/in/gawdeprasad07/",
  },
];

const advisorArr = [
  {
    name: "Alex Garden",
    designation: "Chairman & CEO, Zume Inc, (former) President Zynga Studios",
    link: "https://www.linkedin.com/in/agarden/ ",
    img: alex,
  },
  {
    name: "Ambarish Malpani",
    designation:
      "Successful Technologist & Serial Entrepreneur, multiple exits (including 1 IPO)",
    link: "https://www.linkedin.com/in/ambarish/	 ",
    img: ambarish,
  },
  {
    name: "Beerud Sheth",
    designation:
      "CEO & Co-Founder GupShup; Founding CEO eLance (NASDAQ: UPWK) ",
    link: "https://www.linkedin.com/in/beerud/",
    img: beerud,
  },
  {
    name: "Ben Davey ",
    designation:
      "Chief Investment Officer EFIC1 (SPAC focused on Fintech and Fin Svcs), (former) CEO Barclays Ventures, Group Head of Strategy, Barclays ",
    link:
      "https://www.linkedin.com/in/ben-davey-7186b7161/?originalSubdomain=uk",
    img: ben,
  },
  {
    name: "Mike Smith",
    designation:
      "(former) Chief Product and Technology Officer, Barclays Ventures, Director, Amazon Ad Platform, CTO Corbis",
    link: "https://www.linkedin.com/in/mikesmith9/?originalSubdomain=uk ",
    img: mike,
  },
  {
    name: "Rajeev Dewal",
    designation:
      "Founder Dewal & Co, Head Legal RBL, Head Legal & Compliance Capital First, Head Compliance Barclays Corporate-India, Head Legal & Compliance Tata AIG, Head Legal Standard Chartered Bank",
    link: "https://www.linkedin.com/in/rajeevdewal/",
    img: rajeev,
  },
  {
    name: "Ramesh Narayanaswamy",
    designation:
      "Group CTO Aditya Birla Capital, (former) Group CTO & CIOO CIMB Group, Group CIO SingPost, Global Head of Retail Banking Technology Soln Delivery, Standard Chartered Group",
    link:
      "https://www.linkedin.com/in/ramesh-narayanaswamy-276aa9/?originalSubdomain=sg",
    img: ramesh,
  },
  {
    name: "Rishad Byramjee",
    designation:
      "MD & Group CEO, Casby Logistics, Board of Directors, Centrum Group",
    link: "https://www.linkedin.com/in/rishad-byramjee-b8667319/",
    img: rishad,
  },
];

const AboutUs = (props) => {
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    document.title =
      "Flexmoney: About Us - Meet the team building Point of Sale Credit Infrastructure for the Internet";
    document.getElementsByTagName("META")[3].content =
      "Leading the Buy Now Pay Later Revolution in India. InstaCred, Flexmoney's Credit Platform, enables Lenders to offer instant cardless finance across its merchant network";

    window.scroll(0, 0);

    try {
      document.getElementById("contactUs").style.display = "block";
    } catch (error) {}

    new WOW.WOW({
      live: false,
    }).init();

    var pastexp_swiper2 = new Swiper(".abtsec3_swiper.swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,

      autoplay: {
        delay: 5000,
      },

      breakpoints: {
        1921: {
          slidesPerView: "2",
          coverflowEffect: {
            rotate: 0,
            stretch: 510,
            depth: 320,
            modifier: 1,
            slideShadows: true,
          },
        },
        1680: {
          slidesPerView: "1.5",
          coverflowEffect: {
            rotate: 0,
            stretch: 698,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          },
        },
        1520: {
          slidesPerView: "1.5",
          coverflowEffect: {
            rotate: 0,
            stretch: 490,
            depth: 450,
            modifier: 1,
            slideShadows: true,
          },
        },
        1440: {
          slidesPerView: "1.55",
          coverflowEffect: {
            rotate: 0,
            stretch: 450,
            depth: 420,
            modifier: 1,
            slideShadows: true,
          },
        },

        1366: {
          slidesPerView: "1.55",
          coverflowEffect: {
            rotate: 0,
            stretch: 448,
            depth: 368,
            modifier: 1,
            slideShadows: true,
          },
        },
        1280: {
          slidesPerView: "1.55",
          coverflowEffect: {
            rotate: 0,
            stretch: 450,
            depth: 290,
            modifier: 1,
            slideShadows: true,
          },
        },
        1024: {
          slidesPerView: "1.7",
          coverflowEffect: {
            rotate: 0,
            stretch: 270,
            depth: 370,
            modifier: 1,
            slideShadows: true,
          },
        },
      },

      navigation: {
        nextEl: ".abtsec2 .right_arrow",
        prevEl: ".abtsec2 .left_arrow",
      },
      pagination: {
        el: ".abtsec2 .swiper-pagination",
        clickable: true,
      },
    });

    var ourteam_swiper = new Swiper(".ourteam_swiper.swiper-container", {
      slidesPerView: 2.5,
      loop: true,

      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        835: {
          slidesPerView: 4.5,
        },
        481: {
          slidesPerView: 2.5,
        },
      },
      pagination: {
        el: ".abtsec3 .swiper-pagination",
        clickable: true,
      },
    });

    var abtsec5_swiper = new Swiper(".abtsec5_swiper.swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoHeight: false,
      autoplay: {
        delay: 5000,
      },

      breakpoints: {
        767: {
          spaceBetween: 0,
          slidesPerView: 1.6,
        },
      },
      pagination: {
        el: ".abtsec5 .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".abtsec5 .right_arrow",
        prevEl: ".abtsec5 .left_arrow",
      },
    });
  }, []);

  const advisorList = advisorArr.map((item, i) => {
    return (
      <div key={i} className="swiper-slide">
        <AdvisorItem
          img={item.img}
          title={item.name}
          desc={item.designation}
          link={item.link}
        />
      </div>
    );
  });

  const teamArrList = teamArr.map((item, i) => {
    return (
      <div key={i} className="swiper-slide">
        <TeamMemberItem
          img={item.img}
          url={item.url}
          name={item.name}
          designation={item.designation}
        />
      </div>
    );
  });

  const list2 = arry2.map((item, i) => {
    return (
      <div key={i} className="swiper-slide">
        <div className="our_effect_img">
          <img src={item} className="img-fluid" />
        </div>
      </div>
    );
  });

  const list3 = arry3.map((item, i) => {
    return (
      <div key={i} className="swiper-slide">
        <div className="our_effect_img">
          <img src={item} className="img-fluid" />
        </div>
      </div>
    );
  });

  return (
    <>
      <section className="abtsec1 wow fadeIn">
        <Breadcrumb history={props.history} t2="About Us" />
        <div className="title">About Us</div>
        <div className="desc">
          Meet the team building Point of Sale Credit Infrastructure for the
          Internet
        </div>

        <div className="imageContainer">
          <img src={bannerimg} className="img-fluid" />
        </div>
      </section>
      <section className="abtsec2 wow fadeInUp" data-wow-duration="2s">
        <div className="title">
          Our mission is to <span>Simplify</span> and <span>Democratize</span>{" "}
          Consumer Finance for India
        </div>
        <div className="desc">
          We're hiring!{" "}
          <span
            className="c-p"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/flexmoney-technologies-pvt-ltd/jobs/",
                "_blank"
              )
            }
          >
            Click here
          </span>{" "}
          to start applying
        </div>

        <Row className="m-0">
          <Col lg={12} className="p-0">
            <div className="d-f j-c ">
              {width <= 834 ? null : (
                <div className="d-f a-c">
                  <div>
                    <img className="left_arrow" src={leftArr} />
                  </div>
                </div>
              )}
              <div className="abtsec3_swiper swiper-container">
                <div className="swiper-wrapper">
                  {width > 480 ? list2 : list3}
                </div>
              </div>
              {width <= 834 ? null : (
                <div className="d-f a-c">
                  <div>
                    <img className="right_arrow" src={rightArr} />
                  </div>
                </div>
              )}
            </div>
            <div className="swiper-pagination"></div>
          </Col>
        </Row>
      </section>

      <section
        className="abtsec3 wow fadeInUp"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
      >
        <div className="ourTeamContainer">
          <div className="title">Team</div>
          <div className="swiper-container ourteam_swiper">
            <div className="swiper-wrapper">{teamArrList}</div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      {/* <section
        className="abtsec4 wow fadeInUp"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
      >
        <TitleItem black title="Institutional Investors" />

        <div className="investorContainer d-f">
          <div className="inverstorItem">
            <div className="imgcontainer d-f  j-c a-c">
              <div>
                {" "}
                <img
                  onClick={() =>
                    window.open("https://www.pravegavc.com/", "_blank")
                  }
                  src={pravega}
                  className="fluid c-p"
                />
              </div>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </div>
          </div>
          <div className="line"></div>
          <div className="inverstorItem">
            <div className="imgcontainer d-f  j-c a-c">
              <div>
                <img
                  onClick={() =>
                    window.open("https://z5capital.com/", "_blank")
                  }
                  src={z5}
                  className="fluid c-p"
                />
              </div>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </div>
          </div>
        </div>
      </section> */}

      <section className="abtsec5 wow fadeIn">
        <Row className="m-0">
          <Col className="p-0 firstcol" lg={4}>
            <div className="title">Investors and Advisors </div>
            <div className="desc">
              We are fortunate to have the backing of a number of deeply
              experienced individual investors and advisors in our journey
            </div>
          </Col>
          {width > 1023 ? (
            <Col className="p-0 d-f j-c f-c a-c" lg={1}>
              <div className="d-f f-c">
                <div>
                  <img className="left_arrow" src={leftArr} />
                </div>
                <div>
                  <img className="right_arrow" src={rightArr} />
                </div>
              </div>
            </Col>
          ) : null}
          <Col className="p-0" lg={7}>
            <div className="abtsec5_swiper swiper-container">
              <div className="swiper-wrapper">{advisorList}</div>
              <div className="swiper-pagination"></div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default AboutUs;
