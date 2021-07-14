import React, { useRef, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

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
import NewsItem from "../../component/NewsItem/NewsItem";
import "./style.less";
import InputText from "../../component/InputText/InputText";
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
import icici from "../../images/inthenews/800px-ICICI_Bank_Logo.png";

Swiper.use([
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
]);

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

const newsArray = [
  {
    title: "Flexmoney welcomes ICICI Bank to its Merchant Partners",
    date: "FEB 21, 2021",
    description:
      "Lorem ipsum dolor sit amet, consetetur asdf sadisn sadipscing elitr, sed diam nonumy eirmod as tempor invidunt ut de labore et dol...",
  },
  {
    title: "Flexmoney welcomes ICICI Bank to its Merchant Partners",
    date: "FEB 21, 2021",
    description:
      "Lorem ipsum dolor sit amet, consetetur asdf sadisn sadipscing elitr, sed diam nonumy eirmod as tempor invidunt ut de labore et dol...",
  },
  {
    title: "Flexmoney welcomes ICICI Bank to its Merchant Partners",
    date: "FEB 21, 2021",
    description:
      "Lorem ipsum dolor sit amet, consetetur asdf sadisn sadipscing elitr, sed diam nonumy eirmod as tempor invidunt ut de labore et dol...",
  },
];

// const arry3 = [
//   mbimg1,
//   mbimg2,
//   mbimg3,
//   mbimg4,
//   mbimg5,
//   mbimg6,
//   mbimg7,
//   mbimg8,
//   mbimg9,
//   mbimg10,
//   mbimg11,
//   mbimg12,
// ];

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
  const { id } = useParams();
  const { height, width } = useWindowDimensions();
  const [applyShow, setApplyShow] = useState(false);
  const [descShow, setDescShow] = useState(false);
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [jobDescInView, setJobDescInView] = useState("");
  const [jobApplyInView, setJobApplyInView] = useState("");
  const [loading, setloading] = useState(false);
  const [dropCvFileName, setDropCvFileName] = useState("");

  const [name, setname] = useState("");
  const [nameerr, setnameerr] = useState("");
  const [emailId, setemailId] = useState("");
  const [emailIderr, setemailIderr] = useState("");
  const [whoareyou, setwhoareyou] = useState("");
  const [whoareyouerr, setwhoareyouerr] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumbererr, setPhoneNumbererr] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setMessage] = useState("");
  const [messageerr, setMessageerr] = useState("");

  const [newsTitle, setNewsTitle] = useState("");
  const [newsDate, setNewsDate] = useState(undefined);
  const [newsContent, setNewsContent] = useState("");

  const [news, setNews] = useState([]);
  const [TotalNewsCount, setTotalNewsCount] = useState();
  const [CurrNewsPage, setCurrNewsPage] = useState();
  let location = useLocation();
  const history = useHistory();

  const fetchNews = (pageNum, count) => {
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/news?count=${count}&page=${pageNum}`,
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
        setNews(data.items);
        setTotalNewsCount(data.totalCount);
        setCurrNewsPage(pageNum);
      });
  };

  const dropCvFileChosen = (e) => {
    console.log(e);
    console.log(e.target.files[0].name);
    setDropCvFileName(e.target.files[0].name);
  };

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
  const fetchNewsById = (newsId) => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/news/${newsId}`, {
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
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.news) history.push("/404");
        else {
          setNewsTitle(data.news.title);
          setNewsDate(data.news.date);
          setNewsContent(data.news.content);
        }
      });
  };
  const handleJobSearch = (evt) => {
    console.log(evt);
    console.log(evt.target.value);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/job-search?search=${evt.target.value}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setJobDescriptions(result.items);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    fetchNews(1, 3);
    // fetchNewsById(id);
  }, []);

  const newsList = news.map((item, i) => {
    return item.external_link ? (
      <NewsItem
        title={item.title}
        date={item.date}
        description={item.summary}
        external_link={item.external_link}
        link={item.link}
      />
    ) : (
      <NavLink to={`/in-the-news/${item._id}`} key={i}>
        <NewsItem
          title={item.title}
          date={item.date}
          description={item.summary}
          external_link={item.external_link}
          link={item.link}
        />
      </NavLink>
    );
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    const regex = /-/gi;
    fetchNewsById(id.replace(regex, " "));
  }, [location]);
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
          Job Description {">"}
        </div>
        {/* <button onClick={() => handleApplyShow(item.title)}>Apply now</button> */}
        <div
          className="btnContainer"
          onClick={() => handleApplyShow(item.title)}
        >
          {/* <Button loading="false" title="Apply now" /> */}
          <Button loading={loading} title="Apply now" />
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

  const list3 = newsArray.map((item, i) => {
    return (
      <div className="details">
        <div className="title">{item.title}</div>
        <div className="date">{item.date}</div>
        <div className="desc">{item.description}</div>
        <div className="read-more">Read more</div>
      </div>
    );
  });

  const formatDate = (date) => {
    date = new Date(date);
    console.log(date.getMonth());

    if (!date) return;
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };
  const bread = () => {
    return (
      <>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => props.history.push("/in-the-news")}
        >
          In The News
        </span>{" "}
        > {`${newsTitle}`}
      </>
    );
  };
  console.log(bread);
  console.log();

  return (
    <>
      <section className="newspage1 wow fadeIn">
        <Breadcrumb history={props.history} t2={bread()} />
        <div className="main-head">
          <div className="back-btn">
            &lt;
            <NavLink to={`/in-the-news/`}>BACK</NavLink>
          </div>
          <div className="title">{newsTitle}</div>

          <div className="date">{formatDate(newsDate)}</div>
        </div>
      </section>
      <section className="newsContent">
        {/* <p>
          Payroll and compliance are among the most challenging tasks for a
          business.P
        </p>
        <p>
          Can you believe 57% of businesses in India still rely on paper or
          spreadsheet-based payroll management? No, Right? We couldn’t believe
          either!{" "}
        </p>
        <p>
          We organised a webinar, ‘Payroll in India – Why Compliance is
          Important and How to Get it Right’ on the 18th of July.{" "}
        </p>
        Anuj Jain, Director of Engineering at Razorpay along with Samarth
        Masson, Cofounder of Dockabl and Rohit Venugopal, Senior Business
        Manager at Razorpay, teamed up to put on a show. They discussed the
        flaws of the current payroll processing and management in India, and the
        complex compliance requirements. Further, they talked about how to
        tackle these problems too!
        <p>Here are some highlights from the webinar.</p>
        <p>Problems with payroll processing in India</p>
        <p>
          Businesses need to process payroll effectively with minimal human
          intervention. But, payroll processing with the help of spreadsheets
          and other paper-based calculations are causes of concerns in more ways
          than one.
        </p>
        <p>Human error </p>
        <p>
          Payroll calculations involving spreadsheets and other manual methods
          are prone to human error since there is manual keying in of data
        </p>
        <p>
          Payroll teams require several components to calculate employee salary.
          The difficulty level rises when an employee joins or leaves the
          organisation
        </p>
        <p>Being compliant with changing regulations</p>
        <p>
          Employers need to consider various laws and regulations like PF, ESI,
          PT, and TDS. Any delay in tax remittance to the government or
          miscalculation can leave businesses with serious repercussions{" "}
        </p>
        <p>
          Also, laws often change. The best example to support this is the Dual
          Tax regime and the changes to the PF deduction under Atmanirbhar
          Bharat Abhiyaan
        </p>
        <p>Data security</p>
        <p>
          Employees provide sensitive information like their Aadhaar, PAN,
          rental agreement, and more, to their employers for payroll processing.
          Maintaining such information on spreadsheets can be very risky
        </p>
        <p>Lack of flexibility for employees</p>
        <p>
          Employees cannot access their payslips instantly or update their
          particulars when payroll is processed manually
        </p>
        <p>
          Learn how you can tackle Payroll troubles! Get your free Payroll and
          Compliance Ebook
        </p> */}
        {parse(newsContent)}
      </section>
      <section className="news-footer">
        <div className="more-articles">More Articles</div>
        <div className="articles">{newsList}</div>
      </section>
    </>
  );
};

export default AboutUs;
