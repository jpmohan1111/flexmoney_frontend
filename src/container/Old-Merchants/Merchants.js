import React, { useRef, useEffect, useState } from "react";
import parse from "html-react-parser";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import WOW from "wowjs";
import "swiper/swiper-bundle.css";
import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import TitleItem from "../../component/TitleItem/TitleItem";
import rightArr from "../../images/rightArr.svg";
import leftArr from "../../images/leftArr.svg";
import Modal from "react-bootstrap/Modal";
import Button from "../../component/Button/Button";
import CounterContainerItem from "../../component/CounterContainerItem/CounterContainer";

import "./style.less";

import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
} from "swiper";
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

import vertical_carousal from "../../images/lenders/vertical_carousal.png";

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

import TestominalItem from "../../component/TestominalItem/TestominalItem";

import lendersbg834 from "../../images/homepage/lendersbg834.png";
import lendersbg1024 from "../../images/homepage/lendersbg1024.png";

import bottom834 from "../../images/homepage/bottom834.png";

import merchantsbg834 from "../../images/homepage/merchantsbg834.png";

import lendersbg480 from "../../images/homepage/lendersbg480.png";

import merchantsbg480 from "../../images/homepage/merchantsbg480.png";

import bottom480 from "../../images/homepage/bottom480.png";

import img1 from "../../images/careers/img1.jpeg";
import search from "../../images/careers/search.png";
import cvImage from "../../images/careers/cvImage.png";

import img2 from "../../images/careers/img2.jpeg";
import img3 from "../../images/careers/img3.jpeg";
import img4 from "../../images/careers/img4.jpeg";

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

import lamp from "../../images/careers/lamp.png";
import heart from "../../images/careers/heart.png";
import hands from "../../images/careers/hands.png";

import useWindowDimensions from "../../useWindowDimensions";
import TeamMemberItem from "../../component/TeamMemberItem/TeamMemberItem";
import LenderItem from "../../component/LenderItem/LenderItem";

import people2 from "../../images/merchants/people.png";
import cityscape from "../../images/merchants/cityscape.png";
import banner from "../../images/careers/banner.png";
import bannermobile from "../../images/careers/mobilebanner.png";
const arry2 = [
  banner,
  banner,
  banner,
  banner,
  banner,
  //   img1,
  //   img2,
  //   img3,
  //   img4,
  //   img5,
  //   img6,
  //   img7,
  //   img8,
  //   img9,
  //   img10,
  //   img11,
  //   img12,
];

const arry3 = [bannermobile, bannermobile, bannermobile, bannermobile];
Swiper.use([
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
]);

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
    name: "John Doe",
    designation: "Founder & CEO, Flipkart",
    link: "https://www.linkedin.com/in/agarden/ ",
    img: alex,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
  {
    name: "John Doe",
    designation: "Founder & CEO, Flipkart",
    link: "https://www.linkedin.com/in/agarden/ ",
    img: alex,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
  {
    name: "John Doe",
    designation: "Founder & CEO, Flipkart",
    link: "https://www.linkedin.com/in/agarden/ ",
    img: alex,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
  {
    name: "John Doe",
    designation: "Founder & CEO, Flipkart",
    link: "https://www.linkedin.com/in/agarden/ ",
    img: alex,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
  {
    name: "John Doe",
    designation: "Founder & CEO, Flipkart",
    link: "https://www.linkedin.com/in/agarden/ ",
    img: alex,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
  {
    name: "John Doe",
    designation: "Founder & CEO, Flipkart",
    link: "https://www.linkedin.com/in/agarden/ ",
    img: alex,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
  {
    name: "John Doe",
    designation: "Founder & CEO, Flipkart",
    link: "https://www.linkedin.com/in/agarden/ ",
    img: alex,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
  {
    name: "John Doe",
    designation: "Founder & CEO, Flipkart",
    link: "https://www.linkedin.com/in/agarden/ ",
    img: alex,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.",
  },
];

const openingsArr = [
  {
    name: "Project manager",
  },
  {
    name: "VP - Head of Product",
  },
  {
    name: "VP - Head of Product",
  },
  {
    name: "VP - Head of Product",
  },
  {
    name: "VP - Head of Product",
  },
  {
    name: "VP - Head of Product",
  },
];
const AboutUs = (props) => {
  const { height, width } = useWindowDimensions();
  const [applyShow, setApplyShow] = useState(false);
  const [descShow, setDescShow] = useState(false);
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [jobDescInView, setJobDescInView] = useState("");
  const [jobApplyInView, setJobApplyInView] = useState("");

  const handleDescClose = () => setDescShow(false);
  const handleApplyClose = () => setApplyShow(false);
  const handleDescShow = (description) => {
    setJobDescInView(description);

    setDescShow(true);
  };
  const handleApplyShow = (title) => {
    setJobApplyInView(title);
    setApplyShow(true);
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8080/job-descriptions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJobDescriptions(data.items);
      });
  }, []);

  const getVal = (selector) => {
    let elm = document.querySelector(selector);
    return elm.value;
  };
  const handleApplySubmit = (evt) => {
    // console.log(evt);
    // evt.preventDefault();
    return;
    let reqData = {
      name: getVal('.job-apply-body-cont input[name="name"]'),
      email: getVal('.job-apply-body-cont input[name="email"]'),
      contact_number: getVal('.job-apply-body-cont input[name="contact"]'),
      company_name: getVal('.job-apply-body-cont input[name="company_name"]'),
      career_summary: getVal(
        '.job-apply-body-cont input[name="career_summary"]'
      ),
      resume_file: document.querySelector("#file").files[0],
    };
    console.log(reqData);
    let formData = new FormData();
    formData.append("name", getVal('.job-apply-body-cont input[name="name"]'));
    formData.append(
      "email",
      getVal('.job-apply-body-cont input[name="email"]')
    );
    formData.append(
      "contact_number",
      getVal('.job-apply-body-cont input[name="contact"]')
    );
    formData.append(
      "company_name",
      getVal('.job-apply-body-cont input[name="company_name"]')
    );
    formData.append(
      "career_summary",
      getVal('.job-apply-body-cont input[name="career_summary"]')
    );
    formData.append("resume_file", document.querySelector("#file").files[0]);
    console.log(formData);
    let formData2 = new FormData(document.getElementById("apply-form"));
    fetch("http://127.0.0.1:8080/job-apply", {
      method: "post",
      headers: {
        // "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
        "Content-Type": "multipart/form-data",
      },
      //   body: JSON.stringify(reqData),
      body: formData2,
    }).then((res) => {
      console.log(res);
    });
  };
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
  useEffect(() => {
    document.title = "Flexmoney: Merchants";
    document.getElementsByTagName("META")[3].content =
      "Leading the Buy Now Pay Later Revolution in India. InstaCred, Flexmoney's Credit Platform, enables Lenders to offer instant cardless finance across its merchant network";

    window.scroll(0, 0);

    try {
      document.getElementById("contactUs").style.display = "block";
    } catch (error) {}

    new WOW.WOW({
      live: false,
    }).init();

    var pastexp_swiper2 = new Swiper(".merchantsec3_swiper.swiper-container", {
      //   effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,

      //   autoplay: {
      //     delay: 5000,
      //   },

      //   breakpoints: {
      //     1921: {
      //       slidesPerView: "2",
      //       coverflowEffect: {
      //         rotate: 0,
      //         stretch: 510,
      //         depth: 320,
      //         modifier: 1,
      //         slideShadows: true,
      //       },
      //     },
      //     1680: {
      //       slidesPerView: "1.5",
      //       coverflowEffect: {
      //         rotate: 0,
      //         stretch: 698,
      //         depth: 300,
      //         modifier: 1,
      //         slideShadows: true,
      //       },
      //     },
      //     1520: {
      //       slidesPerView: "1.5",
      //       coverflowEffect: {
      //         rotate: 0,
      //         stretch: 490,
      //         depth: 450,
      //         modifier: 1,
      //         slideShadows: true,
      //       },
      //     },
      //     1440: {
      //       slidesPerView: "1.55",
      //       coverflowEffect: {
      //         rotate: 0,
      //         stretch: 450,
      //         depth: 420,
      //         modifier: 1,
      //         slideShadows: true,
      //       },
      //     },

      //     1366: {
      //       slidesPerView: "1.55",
      //       coverflowEffect: {
      //         rotate: 0,
      //         stretch: 448,
      //         depth: 368,
      //         modifier: 1,
      //         slideShadows: true,
      //       },
      //     },
      //     1280: {
      //       slidesPerView: "1.55",
      //       coverflowEffect: {
      //         rotate: 0,
      //         stretch: 450,
      //         depth: 290,
      //         modifier: 1,
      //         slideShadows: true,
      //       },
      //     },
      //     1024: {
      //       slidesPerView: "1.7",
      //       coverflowEffect: {
      //         rotate: 0,
      //         stretch: 270,
      //         depth: 370,
      //         modifier: 1,
      //         slideShadows: true,
      //       },
      //     },
      //   },

      //   navigation: {
      //     nextEl: ".merchantsec2 .right_arrow",
      //     prevEl: ".merchantsec2 .left_arrow",
      //   },
      pagination: {
        el: ".merchantsec2 .swiper-pagination",
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
        el: ".merchantsec3 .swiper-pagination",
        clickable: true,
      },
    });

    var merchantsec5_swiper = new Swiper(
      ".merchantsec5_swiper.swiper-container",
      {
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
          el: ".merchantsec5 .swiper-pagination",
          clickable: true,
        },
        //   navigation: {
        //     nextEl: ".merchantsec5 .right_arrow",
        //     prevEl: ".merchantsec5 .left_arrow",
        //   },
      }
    );
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
        el: ".abtsec5_swiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".merchantsec6 .right_arrow",
        prevEl: ".merchantsec6 .left_arrow",
      },
    });
  }, []);

  const advisorList = advisorArr.map((item, i) => {
    return (
      <div key={i} className="swiper-slide">
        <LenderItem
          img={item.img}
          title={item.name}
          desc={item.designation}
          description={item.description}
          link={item.link}
        />
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

  const openingsList = jobDescriptions.map((item, i) => {
    return (
      <div key={i} className="opening">
        <div className="title">{item.title}</div>
        <div className="desc" onClick={() => handleDescShow(item.description)}>
          Job description >
        </div>
        <button onClick={() => handleApplyShow(item.title)}>Apply now</button>
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
      <section className="merchantsec1 wow fadeIn">
        <Breadcrumb history={props.history} t2="Careers" />
        <div className="main-head">
          <div className="title">Merchants</div>
          <div className="desc">
            Grow your business with Instant EMI <br /> from a network of reputed
            Lenders
          </div>
        </div>
      </section>
      <section className="merchantsec2 wow fadeInUp" data-wow-duration="2s">
        <Row className="m-0">
          <Col lg={12} className="p-0">
            <div className="d-f j-c ">
              {/* {width <= 834 ? null : (
				<div className="d-f a-c">
				  <div>
					<img className="left_arrow" src={leftArr} />
				  </div>
				</div>
			  )} */}
              <div className="merchantsec3_swiper swiper-container">
                <div className="swiper-wrapper">
                  {width > 480 ? list2 : list3}
                </div>
              </div>
              {/* {width <= 834 ? null : (
				<div className="d-f a-c">
				  <div>
					<img className="right_arrow" src={rightArr} />
				  </div>
				</div>
			  )} */}
            </div>
            <div className="swiper-pagination"></div>
          </Col>
        </Row>
      </section>
      <section className="merchantsecVertical wow fadeIn">
        <div className="merchantsecVertical--cont">
          <div className="item">
            Get access to 25M+ Pre-Approved users across 6 Banks & NBFC with
            Single Integration
          </div>
          <div className="item">
            Increase Conversion & Order Value with our Smart Eligibility Check
            API
          </div>
          <div className="item">
            Issue new credit lines to users to complete the transaction. Fully
            Digital and Paperless experience that takes less than 5 minutes
          </div>
        </div>
        <div className="img--cont">
          <img src={vertical_carousal} alt="" />
        </div>
      </section>

      <section className="merchantsec5 wow fadeIn">
        <Row className="merchants">
          <div className="merchant-partner">
            <div className="merchant-partner__head">Our Lending Partners</div>
          </div>
          <div className="slider-cont">
            <div className="slider">
              <div className="slide-track">{merchantLogoList}</div>
            </div>
          </div>
        </Row>

        <Row className="consumers">
          <div className="consumers-partner">
            <div className="consumers-partner__head">
              Consumers on our Network
            </div>
            <img className="left" src={people2} alt="" />
            <img className="right" src={cityscape} alt="" />
            <div className="consumers-partner__desc">
              <div className="consumers-partner__desc_25m">
                {/* <p>25M</p>*/}
                <CounterContainerItem colorClass="cw" span="M+" count="28" />
                <p>Credit Lines</p>
              </div>
              <div className="across">across</div>
              <div className="consumers-partner__desc_100plus">
                <CounterContainerItem colorClass="cw" span="+" count="100" />
                <p>Cities</p>
              </div>
            </div>
          </div>
        </Row>
      </section>

      <section className="merchantsec6 wow fadeIn">
        <Row className="m-0">
          <Col className="p-0 firstcol" lg={4}>
            <div className="title">
              What our Merchant <br /> Partners say
            </div>
            <div className="desc">
              Hear from those who have been with us in our journey
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

      <section className="merchantsec7 wow  fadeIn p-r">
        <img
          src={width > 834 ? lastsecbg : width < 481 ? bottom480 : bottom834}
          className="fluid"
        />
        <div className="content">
          <Row className="m-0">
            <Col lg={10} className="p-0">
              <div className="title">Reach out for more!</div>
              <div className="desc">
                Reach out and our experienced team will help you with the best
                solution to help you grow your business
              </div>
              <Button
                onClick={() =>
                  window.open(
                    "https://instacred.me/new-user-activation?utm_source=FMwebsite",
                    "_blank"
                  )
                }
                title="GET IN TOUCH WITH US"
              />
            </Col>
          </Row>
        </div>
      </section>
      <svg width="0" height="0" className="curveSvg">
        <defs>
          <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,1
								  L 0,0
								  L 1,0
								  L 1,1
								  C .65 .8, .35 .8, 0 1
								  Z"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default AboutUs;
