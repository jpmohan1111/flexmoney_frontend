import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
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
// import Button from "react-bootstrap/Button";
import Button from "../../component/Button/Button";
import InputText from "../../component/InputText/InputText";
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
import banner from "../../images/careers/banner.png";
import bannermobile from "../../images/careers/mobilebanner.png";
import search from "../../images/careers/search.png";
import upload from "../../images/careers/upload.png";
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

// -----------------------vijay image imports start----------------
import banner1 from "../../images/careers/banner1.jpg";
import banner2 from "../../images/careers/banner2.jpg";
import banner3 from "../../images/careers/banner3.jpg";
import mbbanner1 from "../../images/careers/mbbanner1.jpg";
import mbbanner2 from "../../images/careers/mbbanner2.jpg";
import mbbanner3 from "../../images/careers/mbbanner3.jpg";

import bgdesk from "../../images/careers/bgdesk.png";
import bgmobile from "../../images/careers/bgmobile.png";
import bg_ipad from "../../images/careers/bg_ipad_1.png";
import slider1mob from "../../images/careers/slider1mob.png";
import ipadbanner from "../../images/careers/ipadbanner.jpg";

import sec2logo1 from "../../images/careers/sec2logo1.png";
import sec2logo2 from "../../images/careers/sec2logo2.png";
import sec2logo3 from "../../images/careers/sec2logo3.png";
import uploadcv from "../../images/careers/uploadcv.jpg";
import uploadcvmob from "../../images/careers/uploadcvmob.jpg";

// -----------------------vijay image imports end ----------------

Swiper.use([
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
]);

const arry2 = [banner, banner, banner, banner, banner];

const arry3 = [bannermobile, bannermobile, bannermobile, bannermobile];

const sectionOnebannerDataArr = [
  {
    img: banner1,
    mbimg: mbbanner1,
  },

  {
    img: banner2,
    mbimg: mbbanner2,
  },
  {
    img: banner3,
    mbimg: mbbanner3,
  },
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
const Careers = (props) => {
  const { height, width } = useWindowDimensions();
  const [applyShow, setApplyShow] = useState(false);
  const [descShow, setDescShow] = useState(false);
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [jobDescInView, setJobDescInView] = useState("");
  const [jobApplyInView, setJobApplyInView] = useState("");
  const [loading, setloading] = useState(false);
  const [dropCvFileName, setDropCvFileName] = useState("");
  const [dropApplyFileName, setDropApplyFileName] = useState("");

  const [name, setname] = useState("");
  const [nameerr, setnameerr] = useState("");
  const [emailId, setemailId] = useState("");
  const [emailIderr, setemailIderr] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumbererr, setPhoneNumbererr] = useState("");
  const [fileerr, setFileerr] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [subject, setsubject] = useState("");
  const [cvapplyFile, setCvapplyFile] = useState([]);
  const [nofileErr, setNofileErr] = useState("");

  const [totalJobDescCount, setTotalJobDescCount] = useState(0);
  const [currJobDescPage, setCurrJobDescPage] = useState(1);
  const [jobSearchVal, setJobSearchVal] = useState("");

  const [fileSizealert, setFileSizealert] = useState("");
  const [fileSizealertDrop, setFileSizealertDrop] = useState("");
  const [showApplySuccesstxt, setShowApplySuccesstxt] = useState(false);

  const [nojobsFoundErr, setNojobsFoundErr] = useState(false);
  const fetchJobDesc = (pageNum) => {
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/job-descriptions?count=5&page=${pageNum}`,
      {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9,hi;q=0.8,th;q=0.7,la;q=0.6",
          "sec-ch-ua":
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJobDescriptions(data.items);

        setTotalJobDescCount(data.totalCount);
        setCurrJobDescPage(pageNum);
      });
  };
  const jobDescListPageClick = (e, num) => {
    const pageNum = num || e.selected + 1;

    if (pageNum < 1 || pageNum > totalJobDescCount) return;

    fetchJobDesc(pageNum);
  };
  const dropCvFileChosen = (e) => {
    if (!e.target.files[0]) return;
    setFileerr("");
    console.log(e.target.files[0].name);
    let fileName = e.target.files[0].name;
    let dot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(dot, fileName.length).toLowerCase();
    setDropCvFileName(e.target.files[0].name);
    setNofileErr("");
    if (!["pdf", "doc", "docx"].includes(extFile)) {
      //   setFileSizealert("File format not valid");
      setFileSizealertDrop("File format not valid");
      return;
    }

    setNofileErr("");
    if (e.target.files[0].size > 1000000) {
      setFileSizealert("file size more than 1 MB!");
      setFileerr("");
    } else {
      setFileSizealertDrop("");
    }
  };
  const handleJobApplyFileChosen = (e) => {
    if (!e.target.files[0]) return;
    setFileerr("");
    console.log(e.target.files[0].name);
    console.log(e.target.files[0].size);
    let fileName = e.target.files[0].name;
    let dot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(dot, fileName.length).toLowerCase();
    setDropApplyFileName(e.target.files[0].name);
    setNofileErr("");
    if (!["pdf", "doc", "docx"].includes(extFile)) {
      setFileSizealert("File format not valid");
      return;
    }

    if (e.target.files[0].size > 1000000) {
      setFileSizealert("file size more than 1 MB!");
      setFileerr("");
      setNofileErr("");
    } else setFileSizealert("");
  };

  const handleDescClose = () => setDescShow(false);
  const handleApplyClose = () => setApplyShow(false);
  const handleDescShow = (description) => {
    setJobDescInView(description);

    setDescShow(true);
  };
  useEffect(() => {
    if (!applyShow) {
      setDropApplyFileName("");
      setFileSizealert("");
      setnameerr("");
      setemailIderr("");
      setPhoneNumbererr("");
      setNofileErr("");
    }
  }, [applyShow]);

  const handleApplyShow = (title) => {
    setJobApplyInView(title);
    setApplyShow(true);
  };
  const handleJobSearch = (evt) => {
    setJobSearchVal(evt.target.value);
    if (evt.target.value == "") {
      fetchJobDesc(1);
      return;
    }
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    setJobSearchVal(evt.target.value);

    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/job-search?search=${evt.target.value}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setJobDescriptions(result.items);
        if (result.items.length == 0) setNojobsFoundErr(true);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    fetchJobDesc(currJobDescPage);
    window.scroll(0, 0);
  }, []);

  const getVal = (selector) => {
    let elm = document.querySelector(selector);
    return elm.value;
  };
  const handleApplySubmit = (evt) => {
    var formIsValid = true;
    let reqData = {
      name: getVal('.job-apply-body-cont input[name="name"]'),
      email: getVal('.job-apply-body-cont input[name="email"]'),
      contact_number: getVal(
        '.job-apply-body-cont input[name="contact_number"]'
      ),
      company_name: getVal('.job-apply-body-cont input[name="company_name"]'),
      career_summary: getVal(
        '.job-apply-body-cont input[name="career_summary"]'
      ),
      resume_file: document.querySelector("#upload").files[0],
    };
    console.log(reqData);
    let formData = new FormData();
    formData.append("name", getVal('.job-apply-body-cont input[name="name"]'));
    formData.append(
      "job_title",
      getVal('.job-apply-body-cont input[name="job_title"]')
    );
    formData.append(
      "email",
      getVal('.job-apply-body-cont input[name="email"]')
    );
    formData.append(
      "contact_number",
      getVal('.job-apply-body-cont input[name="contact_number"]')
    );
    formData.append(
      "company_name",
      getVal('.job-apply-body-cont input[name="company_name"]')
    );
    formData.append(
      "career_summary",
      getVal('.job-apply-body-cont input[name="career_summary"]')
    );
    formData.append("resume_file", document.querySelector("#upload").files[0]);
    console.log(formData);
    // let formData2 = new FormData(document.getElementById("apply-form"));

    if (!name) {
      formIsValid = false;
      setnameerr("*Please enter your name.");
    } else {
      setnameerr("");
    }

    if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        setnameerr("*Please enter alphabet characters only.");
      }
    }

    if (typeof emailId !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(emailId)) {
        formIsValid = false;
        setemailIderr("*Please enter valid email-Id.");
      } else {
        setemailIderr("");
      }
    }

    if (typeof phoneNumber !== "undefined") {
      if (!phoneNumber.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        setPhoneNumbererr("*Please enter valid mobile number.");
      } else {
        setPhoneNumbererr("");
      }
    }

    if (fileSizealert != "") {
      formIsValid = false;
      setFileerr("*Please upload cv");
    }
    if (document.querySelector("#upload").files.length == 0) {
      setNofileErr("*Choose a file");
    }

    if (formIsValid) {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_ENDPOINT}/job-apply`,
        //   data: JSON.stringify(reqData),
        data: formData,
        //   withCredentials: true,
      })
        .then((response) => {
          if (response.status == 200) {
            setname("");
            setemailId("");
            setsubject("");
            setPhoneNumber("");
            setcompanyName("");
            setCvapplyFile("");
            setShowApplySuccesstxt(true);
            setTimeout(() => {
              setShowApplySuccesstxt(false);
              setApplyShow(false);
              document.querySelector("#upload").value = null;
              setDropCvFileName("");
            }, 2000);
          }
        })
        .catch((error) => {
          // alert("Something Went Wrong");
          //showToast("danger");
        });
    }
  };
  const handleDropCvSubmit = (evt) => {
    if (fileSizealertDrop != "") return;
    if (
      document.querySelector("#cv-upload").files.length == 0 ||
      fileSizealert
    ) {
      if (document.querySelector("#cv-upload").files.length == 0)
        setNofileErr("choose file");
    } else {
      let formData = new FormData();
      formData.append(
        "resume_file",
        document.querySelector("#cv-upload").files[0]
      );
      console.log(formData);
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_ENDPOINT}/drop-cv`,
        //   data: JSON.stringify(reqData),
        data: formData,
        //   withCredentials: true,
      })
        .then((response) => {
          console.log(response);
          if (response.status == 200 && response.data.status == "success") {
            console.log();
            setCvapplyFile("");
            document.querySelector("#cv-upload").value = null;
            setDropCvFileName("");
            setShowApplySuccesstxt(true);
            setNofileErr("");
            setTimeout(() => {
              setShowApplySuccesstxt(false);
            }, 2000);
          } else if (response.data.status == "failure") {
            setNofileErr("upload only pdf files");
            setDropCvFileName("");
            setCvapplyFile("");
          }
        })
        .catch((error) => {
          //   alert("Something Went Wrong");
        });
    }
  };
  useEffect(() => {
    document.title = "Flexmoney: Careers - We are hiring";
    document.getElementsByTagName("META")[3].content =
      "Looking for talented and passionate individuals to join our team. Apply now";

    window.scroll(0, 0);

    try {
      document.getElementById("contactUs").style.display = "block";
    } catch (error) {}

    new WOW.WOW({
      live: false,
    }).init();

    var newcareersec1_swiper = new Swiper(".newsec1_swiper.swiper-container", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 2000,
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
        delay: 2000,
      },
      pagination: {
        el: ".mbnewsec1_swiper .swiper-pagination",
        clickable: true,
      },
    });

    var pastexp_swiper2 = new Swiper(".careersec3_swiper.swiper-container", {
      grabCursor: true,
      centeredSlides: true,
      loop: true,
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
        <div className="opening-left">
          <div className="title">{item.title}</div>
          <div
            className="desc"
            onClick={() => handleDescShow(item.description)}
          >
            <span className="desc_span">Job Description</span>{" "}
            <span>
              <i
                className="fa fa-angle-right"
                style={{ paddingLeft: "0.2em", fontWeight: "bold" }}
              ></i>
            </span>
          </div>
        </div>

        <div
          className="opening-right btnContainer"
          onClick={() => handleApplyShow(item.title)}
        >
          {width > 480 ? (
            <Button loading={loading} title="Apply now" />
          ) : (
            <Button noeffect="true" loading={loading} title="Apply now" />
          )}
        </div>
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
  return (
    <>
      <div className="lender_breadcrumb">
        <span className="home_crumb" onClick={() => props.history.push("/")}>
          Home
        </span>
        &nbsp; {">"} &nbsp;Careers
      </div>

      <section className="newsec1 wow fadeIn">
        {width > 1023 ? (
          <div className="newsec1_wrapper">
            <div className="newsec1_swiper swiper-container">
              <div className="swiper-wrapper">{bannerList}</div>
            </div>
            <div className="text_content">
              <div className="text_wrapper">
                <div className="title">Careers</div>
                <div className="career_desc">We are recruiting!</div>
              </div>
              <img src={bgdesk} className="greenbgcut" />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        ) : (
          <div className="mb_newsec1_wrapper">
            <div className="mbnewsec1_swiper swiper-container">
              <div className="swiper-wrapper">{mbBannerList}</div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="mb_container">
              {width < 500 ? (
                <img src={bgmobile} className="bgmobile" />
              ) : (
                <img src={bg_ipad} className="bgmobile" />
              )}
              <div className="mb_text_container">
                <div className="title">Careers</div>
                <div className="career_desc">We are recruiting!</div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section
        className="newsec2 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="0.5s"
      >
        <div className="title">Working with Flexmoney</div>
        <div className="desc">
          Looking for talented and passionate individuals to join our team
        </div>
        <div className="flex_wrapper">
          <div className="boxx">
            <div className="card_logo">
              <img src={sec2logo1} className="card_img" />
            </div>
            <div className="card_text_wrapper">
              <div className="text_title">Build the future</div>
              <div className="text_desc">
                Be a part of the team that is revolutionizing the Buy Now Pay
                Later landscape in the country
              </div>
            </div>
          </div>
          <div className="boxx middle_boxx">
            <div className="card_logo">
              <img src={sec2logo2} className="card_img" />
            </div>

            <div className="card_text_wrapper">
              <div className="text_title">Open Work Culture</div>
              <div className="text_desc">
                Work in a transparent and open culture where All Hands are on
                Deck
              </div>
            </div>
          </div>
          <div className="boxx">
            <div className="card_logo">
              <img src={sec2logo3} className="card_img" />
            </div>

            <div className="card_text_wrapper">
              <div className="text_title">Diverse Team</div>
              <div className="text_desc">
                Work alongside colleagues with diverse backgrounds and
                experiences ranging from Technology to Finance, from Silicon
                Valley to Singapore
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="careersec6 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="0.5s"
      >
        <Row className="m-0 opening-head openings-container wow fadeInUp">
          <Col className="p-0 firstcol" lg={12}>
            <div className="working-title">Current Openings </div>
            <div className="working-desc">
              <div className="working-desc-div">
                <img src={search} alt="" />
                <input
                  onChange={handleJobSearch}
                  type="text"
                  placeholder="Search jobs, titles, keywords"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row_opening">
          <div className="openings-cont">
            {/* <div className="opening">
			  <h2>Project manager</h2>
			  <h4>Job description ></h4>
			  <button>Apply now</button>
			</div> */}
            {openingsList}
            {jobDescriptions.length == 0 && (
              <div className="no-jobs">No jobs found</div>
            )}
          </div>

          {jobSearchVal == "" && (
            <div className="pagination_container">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8.86"
                height="14.6"
                viewBox="0 0 8.86 14.6"
                className={1 == currJobDescPage ? "disabled" : ""}
                onClick={() =>
                  jobDescListPageClick(undefined, currJobDescPage - 1)
                }
              >
                <path
                  id="Icon_awesome-chevron-right"
                  data-name="Icon awesome-chevron-right"
                  d="M2.168,10.515l6.5,6.5a.8.8,0,0,0,1.135,0l.758-.758a.8.8,0,0,0,0-1.133L5.41,9.948l5.15-5.174a.8.8,0,0,0,0-1.133L9.8,2.883a.8.8,0,0,0-1.135,0l-6.5,6.5A.8.8,0,0,0,2.168,10.515Z"
                  transform="translate(-1.933 -2.648)"
                  fill="#4c4c4c"
                />
              </svg> */}
              {/* {Array.from(Array(Math.ceil(totalJobDescCount / 5)).keys()).map(
                (page) => {
                  return (
                    <button
                      className={page + 1 == currJobDescPage ? "active" : ""}
                      onClick={() => jobDescListPageClick(page + 1)}
                    >
                      {page + 1}
                    </button>
                  );
                }
              )} */}

              {totalJobDescCount >= 5 && (
                <ReactPaginate
                  previousLabel={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8.86"
                      height="14.6"
                      viewBox="0 0 8.86 14.6"
                      className={1 == currJobDescPage ? "disabled" : ""}
                    >
                      <path
                        id="Icon_awesome-chevron-right"
                        data-name="Icon awesome-chevron-right"
                        d="M2.168,10.515l6.5,6.5a.8.8,0,0,0,1.135,0l.758-.758a.8.8,0,0,0,0-1.133L5.41,9.948l5.15-5.174a.8.8,0,0,0,0-1.133L9.8,2.883a.8.8,0,0,0-1.135,0l-6.5,6.5A.8.8,0,0,0,2.168,10.515Z"
                        transform="translate(-1.933 -2.648)"
                        fill="#4c4c4c"
                      />
                    </svg>
                  }
                  nextLabel={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8.86"
                      height="14.6"
                      viewBox="0 0 8.86 14.6"
                      className={
                        Math.ceil(totalJobDescCount / 5) == currJobDescPage
                          ? "disabled"
                          : ""
                      }
                    >
                      <path
                        id="Icon_awesome-chevron-right"
                        data-name="Icon awesome-chevron-right"
                        d="M10.558,10.515l-6.5,6.5a.8.8,0,0,1-1.135,0l-.758-.758a.8.8,0,0,1,0-1.133L7.316,9.948,2.167,4.774a.8.8,0,0,1,0-1.133l.758-.758a.8.8,0,0,1,1.135,0l6.5,6.5A.8.8,0,0,1,10.558,10.515Z"
                        transform="translate(-1.933 -2.648)"
                        fill="#4c4c4c"
                      />
                    </svg>
                  }
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={Math.ceil(totalJobDescCount / 5)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={2}
                  onPageChange={jobDescListPageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              )}

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8.86"
                height="14.6"
                viewBox="0 0 8.86 14.6"
                className={
                  Math.ceil(totalJobDescCount / 5) == currJobDescPage
                    ? "disabled"
                    : ""
                }
                onClick={() =>
                  jobDescListPageClick(undefined, currJobDescPage + 1)
                }
              >
                <path
                  id="Icon_awesome-chevron-right"
                  data-name="Icon awesome-chevron-right"
                  d="M10.558,10.515l-6.5,6.5a.8.8,0,0,1-1.135,0l-.758-.758a.8.8,0,0,1,0-1.133L7.316,9.948,2.167,4.774a.8.8,0,0,1,0-1.133l.758-.758a.8.8,0,0,1,1.135,0l6.5,6.5A.8.8,0,0,1,10.558,10.515Z"
                  transform="translate(-1.933 -2.648)"
                  fill="#4c4c4c"
                />
              </svg> */}
            </div>
          )}
        </Row>
      </section>
      <section
        className="careersec7 wow fadeIn drop-cv"
        // data-wow-duration="1.3s"
        // data-wow-delay="0.8s"
      >
        <Row className="drop-cv-container wow fadeInUp m-0">
          <div>
            {width > 1023 ? (
              <img src={uploadcv} className="img-fluid" />
            ) : (
              <img src={uploadcvmob} className="img-fluid" />
            )}
            <div>
              <h2 className="head">Drop your CV here</h2>
              <h4 className="desc">
                Didn't find what you were looking for? Drop your CV here, we
                will consider your profile for future job postings
              </h4>

              <div id="drop-cv-form">
                <input
                  type="file"
                  className="cv-file-input"
                  accept=".pdf,.doc,.docx"
                  id="cv-upload"
                  onChange={dropCvFileChosen}
                  hidden
                  name="resume"
                />
                <label for="cv-upload">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20.999 20.97"
                  >
                    <g id="upload-f" transform="translate(0 -0.358)">
                      <g
                        id="Group_9403"
                        data-name="Group 9403"
                        transform="translate(0 13.166)"
                      >
                        <g id="Group_9402" data-name="Group 9402">
                          <path
                            id="Path_34633"
                            data-name="Path 34633"
                            d="M19.359,312.642v5.7a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82v-5.7H0v5.7A2.464,2.464,0,0,0,2.461,320.8H18.539A2.464,2.464,0,0,0,21,318.343v-5.7Z"
                            transform="translate(0 -312.642)"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_9405"
                        data-name="Group 9405"
                        transform="translate(5.402 0.358)"
                      >
                        <g
                          id="Group_9404"
                          data-name="Group 9404"
                          transform="translate(0 0)"
                        >
                          <path
                            id="Path_34634"
                            data-name="Path 34634"
                            d="M136.813.358l-5.1,5.1,1.16,1.16L135.993,3.5V16.283h1.641V3.5l3.117,3.117,1.16-1.16Z"
                            transform="translate(-131.716 -0.358)"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span>Choose File </span>
                </label>
                <p>
                  Upload docx file, pdf upto 1 mb only{" "}
                  <div style={{ color: "#3AB658" }}>{dropCvFileName}</div>
                  <span className="err">{nofileErr}</span>
                  <span className="err">{fileSizealertDrop}</span>
                </p>
                <div className="cv-btn">
                  <Button title="Submit" onClick={handleDropCvSubmit} />
                </div>
                {/* <button type="submit" onClick={handleDropCvSubmit}>
                  Submit
                </button> */}
                {showApplySuccesstxt && (
                  <div className="thankyouTxt">
                    Thank you! We'll get back to you soon
                  </div>
                )}
              </div>
              {/* </form> */}
            </div>
          </div>
        </Row>
      </section>

      <Modal
        show={descShow}
        onHide={handleDescClose}
        className="job-desc-modal"
        centered
        scrollable="true"
      >
        <Modal.Header closeButton>
          <Modal.Title className="job-desc-head">Job Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="scrollbar scrollbar-primary">
            <h5 className="job-desc-resp-head">Job Role & Responsibilities</h5>
            <div>
              <p className="job-desc-sub-desc">{parse(jobDescInView)}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={applyShow}
        onHide={handleApplyClose}
        className="job-apply-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="job-apply-head">Apply Now</Modal.Title>
        </Modal.Header>
        <Modal.Body className="job-apply-body">
          <div className="job-apply-body-cont">
            <Row>
              <input type="hidden" name="job_title" value={jobApplyInView} />
              <Col lg={6}>
                <InputText
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  name="name"
                  title="Name*"
                />
                <div className="err">{nameerr}</div>
              </Col>
              <Col lg={6}>
                <InputText
                  value={emailId}
                  onChange={(e) => setemailId(e.target.value)}
                  name="email"
                  title="Email ID*"
                />
                <div className="err">{emailIderr}</div>
              </Col>

              <Col lg={6}>
                <InputText
                  value={phoneNumber}
                  type="tel"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  name="contact_number"
                  title="Contact Number*"
                />
                <div className="err">{phoneNumbererr}</div>
              </Col>

              <Col lg={6}>
                <InputText
                  value={companyName}
                  onChange={(e) => setcompanyName(e.target.value)}
                  name="company_name"
                  title="Company Name"
                />
              </Col>

              <Col lg={12}>
                <InputText
                  value={subject}
                  onChange={(e) => setsubject(e.target.value)}
                  name="career_summary"
                  title="Career Summary / Message"
                />
              </Col>

              <Col lg={12}>
                <div className="resume">
                  <input
                    type="file"
                    className="cv-file-input"
                    accept=".pdf,.doc,.docx"
                    id="upload"
                    hidden
                    name="resume"
                    onChange={handleJobApplyFileChosen}
                  />
                  <label for="upload">
                    <span className="addFileSpan">
                      {" "}
                      <img
                        src={upload}
                        style={{ width: "1.5em", paddingRight: "0.5em" }}
                      />{" "}
                      Add File
                    </span>
                  </label>
                  <p>
                    {dropApplyFileName ? (
                      <div className="dropcvfilenamediv">
                        {dropApplyFileName}
                      </div>
                    ) : (
                      <span className="outerSpan">
                        <span className="innerSpan">Resume*</span> (Upload docx
                        file, pdf upto 1 mb only){" "}
                      </span>
                    )}
                  </p>
                </div>
                <span className="err">{fileSizealert}</span>
                <span className="err">{nofileErr}</span>
              </Col>
              <Col lg={12}>
                <div className="submit jobSubmitDiv">
                  {/* <button type="submit" onClick={handleApplySubmit} className='btnSubmitHover'>
                    Submit
                  </button> */}
                  <Button title="Submit" onClick={handleApplySubmit} />
                </div>
                {showApplySuccesstxt && (
                  <div className="thankyouTxt">
                    Thank you! We'll get back to you soon
                  </div>
                )}
              </Col>
            </Row>
          </div>
        </Modal.Body>
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

export default Careers;
