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
import Button from "react-bootstrap/Button";

import "./style.less";

import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
} from "swiper";

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
    link: "https://www.linkedin.com/in/ben-davey-7186b7161/?originalSubdomain=uk",
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
    link: "https://www.linkedin.com/in/ramesh-narayanaswamy-276aa9/?originalSubdomain=sg",
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
    fetch("http://13.233.110.14:8080/job-descriptions", {
      mode: "no-cors",
    })
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
  useEffect(() => {
    document.title = "Flexmoney: Careers";
    document.getElementsByTagName("META")[3].content =
      "Leading the Buy Now Pay Later Revolution in India. InstaCred, Flexmoney's Credit Platform, enables Lenders to offer instant cardless finance across its merchant network";

    window.scroll(0, 0);

    try {
      document.getElementById("contactUs").style.display = "block";
    } catch (error) {}

    new WOW.WOW({
      live: false,
    }).init();

    var pastexp_swiper2 = new Swiper(".careersec3_swiper.swiper-container", {
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
      //     nextEl: ".careersec2 .right_arrow",
      //     prevEl: ".careersec2 .left_arrow",
      //   },
      pagination: {
        el: ".careersec2 .swiper-pagination",
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
        el: ".careersec3 .swiper-pagination",
        clickable: true,
      },
    });

    var careersec5_swiper = new Swiper(".careersec5_swiper.swiper-container", {
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
        el: ".careersec5 .swiper-pagination",
        clickable: true,
      },
      //   navigation: {
      //     nextEl: ".careersec5 .right_arrow",
      //     prevEl: ".careersec5 .left_arrow",
      //   },
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
      <section className="careersec1 wow fadeIn">
        <Breadcrumb history={props.history} t2="Careers" />
        <div className="main-head">
          <div className="title">Careers</div>
          <div className="desc">We are recruiting</div>
        </div>
      </section>
      <section className="careersec2 wow fadeInUp" data-wow-duration="2s">
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
              <div className="careersec3_swiper swiper-container">
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

      {/* <section
		className="careersec3 wow fadeInUp"
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
	  </section> */}
      {/* <section
		className="careersec4 wow fadeInUp"
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

      <section className="careersec5 wow fadeIn">
        <Row className="m-0 opening-head">
          <Col className="p-0 firstcol" lg={12}>
            <div className="working-title">Working with Flexmoney </div>
            <div className="working-desc">
              Looking for talented and passionate individuals to join our team
            </div>
          </Col>
        </Row>
        <Row className=" bullets">
          <div>
            <div className="working-img-cont">
              <img src={lamp} alt="" />
            </div>
            <div>
              <div className="working-title">Build the future</div>
              <div className="working-desc">
                Be a part of the team that is revolutionizing the Buy Now Pay
                Later landscape in the county
              </div>
            </div>
          </div>
          <div>
            <div className="working-img-cont">
              <img src={heart} alt="" />
            </div>
            <div>
              <div className="working-title">Open Work culture</div>
              <div className="working-desc">
                Work in a transparent and open culture where All Hands are on
                Deck
              </div>
            </div>
          </div>
          <div>
            <div className="working-img-cont">
              <img src={hands} alt="" />
            </div>
            <div>
              <div className="working-title">Diverse team</div>
              <div className="working-desc">
                Work alongside colleagues with diverse backgrounds and
                experiences ranging from Technology to Finance, from Silicon
                Valley to Singapore
              </div>
            </div>
          </div>
        </Row>
      </section>

      <section className="careersec5 wow fadeIn">
        <Row className="m-0 opening-head openings-container">
          <Col className="p-0 firstcol" lg={12}>
            <div className="working-title">Current Openings </div>
            <div className="working-desc">
              <img src={search} alt="" />
              <input type="text" placeholder="Search jobs, titles, keywords" />
            </div>
          </Col>
        </Row>
        <Row className="">
          <div className="openings-cont">
            {/* <div className="opening">
			  <h2>Project manager</h2>
			  <h4>Job description ></h4>
			  <button>Apply now</button>
			</div> */}
            {openingsList}
          </div>
          {/* <div>
			<div className="working-img-cont">
			  <img src={lamp} alt="" />
			</div>
			<div>
			  <div className="working-title">Build the future</div>
			  <div className="working-desc">
				Be a part of the team that is revolutionizing the Buy Now Pay
				Later landscape in the county
			  </div>
			</div>
		  </div>
		  <div>
			<div className="working-img-cont">
			  <img src={heart} alt="" />
			</div>
			<div>
			  <div className="working-title">Open Work culture</div>
			  <div className="working-desc">
				Work in a transparent and open culture where All Hands are on
				Deck
			  </div>
			</div>
		  </div>
		  <div>
			<div className="working-img-cont">
			  <img src={hands} alt="" />
			</div>
			<div>
			  <div className="working-title">Diverse team</div>
			  <div className="working-desc">
				Work alongside colleagues with diverse backgrounds and
				experiences ranging from Technology to Finance, from Silicon
				Valley to Singapore
			  </div>
			</div>
		  </div> */}
        </Row>
      </section>
      <section className="careersec7 wow fadeIn drop-cv">
        <Row className=" drop-cv-container">
          <div>
            <img src={cvImage} className="img-fluid" />
            <div>
              <h2 className="head">Drop your CV here</h2>
              <h4 className="desc">
                Didn't find what you were looking for? Drop your CV here, we
                will consider your profile for future job postings
              </h4>
              <input type="file" className="cv-file-input"></input>
              <p>Upload docx file, pdf upto 1 mb only</p>
              <button>Submit</button>
            </div>
          </div>
        </Row>
      </section>
      {/* <Button variant="primary" onClick={handleShow}>
		Launch demo modal
	  </Button> */}

      <Modal
        show={descShow}
        onHide={handleDescClose}
        className="job-desc-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="job-desc-head">Job Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5 className="job-desc-resp-head">Job Role & Responsibilities</h5>
            <div>
              <p className="job-desc-sub-head">Core Responsibilities:</p>
              <p className="job-desc-sub-desc">{parse(jobDescInView)}</p>
              {/*<p className="job-desc-sub-head">Additional Responsibilities:</p>
               <p className="job-desc-sub-desc">
                Analyze data to identify key leverage points to increase
                conversion, engagement and retention of the product Develop a
                product roadmap, design wireframes, write requirements, and work
                in
              </p> */}
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
		  <Button variant="secondary" onClick={handleClose}>
			Close
		  </Button>
		  <Button variant="primary" onClick={handleClose}>
			Save Changes
		  </Button>
		</Modal.Footer> */}
      </Modal>

      <Modal
        show={applyShow}
        onHide={handleApplyClose}
        className="job-apply-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="job-apply-head">Apply Now</Modal.Title>
        </Modal.Header>
        <Modal.Body className="job-apply-body">
          <div className="job-apply-body-cont">
            <form
              id="apply-form"
              action="http://127.0.0.1:8080/job-apply"
              enctype="multipart/form-data"
              method="post"
            >
              <input type="hidden" name="job_title" value={jobApplyInView} />
              <div className="name">
                <input name="name" placeholder="Name" type="text" />
              </div>
              <div className="email">
                <input name="email" placeholder="Email" type="text" />
              </div>
              <div className="contact">
                <input
                  name="contact_number"
                  placeholder="Contact number"
                  type="text"
                />
              </div>
              <div className="company">
                <input
                  name="company_name"
                  placeholder="Company Name"
                  type="text"
                />
              </div>
              <div className="career">
                <input
                  name="career_summary"
                  placeholder="Career Summary/message"
                  type="text"
                />
              </div>
              <div className="resume">
                <p>Resume* (Upload docx file, pdf upto 1 mb only)</p>
                <label className="file">
                  <input
                    type="file"
                    id="file"
                    aria-label="File browser example"
                    name="resume"
                  />
                  <span className="file-custom"></span>
                </label>
              </div>
              <div className="submit">
                <button type="submit" onClick={handleApplySubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
		  <Button variant="secondary" onClick={handleClose}>
			Close
		  </Button>
		  <Button variant="primary" onClick={handleClose}>
			Save Changes
		  </Button>
		</Modal.Footer> */}
      </Modal>
      <svg width="0" height="0">
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
      <svg width="0" height="0">
        <defs>
          <clipPath id="myCurve2" clipPathUnits="objectBoundingBox">
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M576.83 441.94L194.82 441.94L194.82 115.06L391.22 116.76"
              id="b5xL3XXJPw"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M576.83 441.94C564.55 434.98 556.86 430.63 553.79 428.89C464.69 378.41 406.14 287.33 397.22 185.32C396.42 176.18 394.42 153.32 391.22 116.76"
              id="b6Ej1WFgz"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default AboutUs;
