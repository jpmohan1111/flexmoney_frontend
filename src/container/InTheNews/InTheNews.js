import React, { useRef, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, NavLink } from "react-router-dom";
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

  {
    title: "Flexmoney : 2020 Annual Reports lorem ipsum",
    date: "FEB 20, 2021",
    description:
      "Lorem ipsum dolor sit amet, consetetur asdf sadisn sadipscing elitr, sed diam nonumy eirmod as tempor invidunt ut de labore et dol...",
  },
  {
    title: "Flexmoney : 2020 Annual Reports lorem ipsum",
    date: "FEB 20, 2021",
    description:
      "Lorem ipsum dolor sit amet, consetetur asdf sadisn sadipscing elitr, sed diam nonumy eirmod as tempor invidunt ut de labore et dol...",
  },
  {
    title: "Flexmoney : 2020 Annual Reports lorem ipsum",
    date: "FEB 20, 2021",
    description:
      "Lorem ipsum dolor sit amet, consetetur asdf sadisn sadipscing elitr, sed diam nonumy eirmod as tempor invidunt ut de labore et dol...",
  },

  {
    title: "How Instacred works : A comprehensive guide ",
    date: "FEB 16, 2021",
    description:
      "Lorem ipsum dolor sit amet, consetetur asdf sadisn sadipscing elitr, sed diam nonumy eirmod as tempor invidunt ut de labore et dol...",
  },
  {
    title: "How Instacred works : A comprehensive guide ",
    date: "FEB 16, 2021",
    description:
      "Lorem ipsum dolor sit amet, consetetur asdf sadisn sadipscing elitr, sed diam nonumy eirmod as tempor invidunt ut de labore et dol...",
  },
  {
    title: "How Instacred works : A comprehensive guide ",
    date: "FEB 16, 2021",
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

  const [news, setnews] = useState([]);
  const [currNewsPage, setCurrNewsPage] = useState(1);
  const [totalNewsCount, setTotalNewsCount] = useState(0);

  const [newsCategories, setNewsCategories] = useState([]);
  const [newsYears, setNewsYears] = useState([]);

  const [yearselected, setyearselected] = useState("all");
  const [categorySelected, setcategorySelected] = useState("all");

  const [featuredNewsTitle, setFeaturedNewsTitle] = useState("");
  const [featuredNewsDate, setFeaturedNewsDate] = useState("");
  const [featuredNewsSummary, setFeaturedNewsSummary] = useState("");
  const [featuredNewsImageUrl, setFeaturedNewsImageUrl] = useState("");
  const [featuredNews, setFeaturedNews] = useState("");
  const newsPerPage = width > 480 ? 9 : 3;
  console.log(newsPerPage);

  const fetchNews = (pageNum) => {
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/news?count=${newsPerPage}&page=${pageNum}`,
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
        setnews(data.items);
        setTotalNewsCount(data.totalCount);
        setCurrNewsPage(pageNum);
      });
  };

  const fetchNews2 = (pageNum, category, year) => {
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/news2?count=${newsPerPage}&page=${pageNum}&category=${category}&year=${year}`,
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
        setnews(data.items);
        setTotalNewsCount(data.totalCount);
        setCurrNewsPage(1);
      });
  };

  const fetchNewsCategories = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/news-categories`, {
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
        setNewsCategories(data.items);
      });
  };

  const fetchNewsYears = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/news-years`, {
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
        setNewsYears(data.items);
      });
  };

  const featuredNewsClick = () => {
    if (!featuredNews.external_link)
      window.open(`/in-the-news/${featuredNews._id}`, "_self");
    else window.open(featuredNews.external_link, "_blaank");
  };
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

  const fetchFeaturedNews = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/news-featured`, {
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
        let featuredNews = data.items[0];
        if (!featuredNews) return;
        featuredNews.date = new Date(featuredNews.date);
        if (featuredNews) {
          setFeaturedNewsTitle(featuredNews.title);
          setFeaturedNewsDate(
            `${
              monthNames[featuredNews.date.getMonth()]
            } ${featuredNews.date.getDate()}, ${featuredNews.date.getFullYear()}`
          );
          setFeaturedNewsSummary(featuredNews.summary);
          setFeaturedNewsImageUrl(
            `${data.url_origin}/${featuredNews.uploadedFile.key}`
          );
          setFeaturedNews(featuredNews);
        }
      });
  };

  const categoryChange = (e) => {
    console.log(e.target.value);
    setcategorySelected(e.target.value);
    fetchNews2(1, e.target.value, yearselected);
  };
  const yearChange = (e) => {
    console.log(e.target.value);
    setyearselected(e.target.value);
    console.log(yearselected);
    fetchNews2(1, categorySelected, e.target.value);
  };

  const newsListPageClick = (e, num) => {
    const pageNum = num || e.selected + 1;
    if (pageNum < 1 || pageNum > totalNewsCount) return;
    fetchNews(pageNum);
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
  useEffect(() => {
    fetchNews(currNewsPage);
    fetchNewsCategories();
    fetchNewsYears();
    fetchFeaturedNews();
  }, []);

  useEffect(() => {
    document.title = "Flexmoney: In the news";
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

  const newsList = news.map((item, i) => {
    return item.external_link ? (
      <NewsItem
        title={item.title}
        date={item.date}
        description={item.summary}
        external_link={item.external_link}
        key={i}
      />
    ) : (
      <NavLink to={`/in-the-news/${item._id}`}>
        <NewsItem
          title={item.title}
          date={item.date}
          description={item.summary}
          external_link={item.external_link}
          key={i}
        />
      </NavLink>
    );
  });
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

  return (
    <>
      <section className="newssec1 wow fadeIn">
        <Breadcrumb history={props.history} t2="In The News" />
        <div className="main-head">
          <div className="title">In the News</div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </div>
        </div>
      </section>

      <section onClick={featuredNewsClick} className="main-news-section">
        <div className="main-news">
          <div className="details">
            {width > 480 ? (
              <div className="title">
                {/* Flexmoney welcomes ICICI Bank to its <br /> Merchant Partners */}
                {featuredNewsTitle}
              </div>
            ) : (
              <div className="title">
                {/* Flexmoney welcomes ICICI Bank to its Merchant Partners */}
                {featuredNewsTitle}
              </div>
            )}

            <div className="date">{featuredNewsDate}</div>
            <div className="desc">{featuredNewsSummary}</div>
            <div className="read-more">Read more</div>
          </div>
          <div className="image">
            <img src={featuredNewsImageUrl} alt="" />
          </div>
        </div>
      </section>

      <section className="newssec2 wow fadeIn">
        <div className="dropdowns">
          <select onChange={categoryChange}>
            <option value="all">All posts</option>
            {newsCategories.map((cat) => {
              return <option value={cat.name}>{cat.name}</option>;
            })}
          </select>
          <select onChange={yearChange}>
            <option value="all">All</option>
            {newsYears.map((year) => {
              return <option value={year}>{year}</option>;
            })}
          </select>
        </div>
        <div className="list">
          {newsList}
          {newsList.length == 0 && (
            <div className="no-news">
              No result found. Please do another search
            </div>
          )}
        </div>
        <div className="pagination_container">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.86"
            height="14.6"
            viewBox="0 0 8.86 14.6"
            className={1 == currNewsPage ? "disabled" : ""}
            onClick={() => newsListPageClick(currNewsPage - 1)}
          >
            <path
              id="Icon_awesome-chevron-right"
              data-name="Icon awesome-chevron-right"
              d="M2.168,10.515l6.5,6.5a.8.8,0,0,0,1.135,0l.758-.758a.8.8,0,0,0,0-1.133L5.41,9.948l5.15-5.174a.8.8,0,0,0,0-1.133L9.8,2.883a.8.8,0,0,0-1.135,0l-6.5,6.5A.8.8,0,0,0,2.168,10.515Z"
              transform="translate(-1.933 -2.648)"
              fill="#4c4c4c"
            />
          </svg>
          {Array.from(Array(Math.ceil(totalNewsCount / 9)).keys()).map(
            (page) => {
              return (
                <button
                  className={page + 1 == currNewsPage ? "active" : ""}
                  onClick={() => newsListPageClick(page + 1)}
                >
                  {page + 1}
                </button>
              );
            }
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.86"
            height="14.6"
            viewBox="0 0 8.86 14.6"
            className={
              Math.ceil(totalNewsCount / 9) == currNewsPage ? "disabled" : ""
            }
            onClick={() => newsListPageClick(currNewsPage + 1)}
          >
            <path
              id="Icon_awesome-chevron-right"
              data-name="Icon awesome-chevron-right"
              d="M10.558,10.515l-6.5,6.5a.8.8,0,0,1-1.135,0l-.758-.758a.8.8,0,0,1,0-1.133L7.316,9.948,2.167,4.774a.8.8,0,0,1,0-1.133l.758-.758a.8.8,0,0,1,1.135,0l6.5,6.5A.8.8,0,0,1,10.558,10.515Z"
              transform="translate(-1.933 -2.648)"
              fill="#4c4c4c"
            />
          </svg> */}
          {/* <span className="extreme-end-page">First</span> */}
          <ReactPaginate
            previousLabel={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8.86"
                height="14.6"
                viewBox="0 0 8.86 14.6"
                className={1 == currNewsPage ? "disabled" : ""}
              >
                <path
                  id="Icon_awesome-chevron-right"
                  data-name="Icon awesome-chevron-right"
                  d="M2.168,10.515l6.5,6.5a.8.8,0,0,0,1.135,0l.758-.758a.8.8,0,0,0,0-1.133L5.41,9.948l5.15-5.174a.8.8,0,0,0,0-1.133L9.8,2.883a.8.8,0,0,0-1.135,0l-6.5,6.5A.8.8,0,0,0,2.168,10.515Z"
                  transform="translate(-1.933 -2.648)"
                  fill="#333333"
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
                  Math.ceil(totalNewsCount / newsPerPage) == currNewsPage
                    ? "disabled"
                    : ""
                }
              >
                <path
                  id="Icon_awesome-chevron-right"
                  data-name="Icon awesome-chevron-right"
                  d="M10.558,10.515l-6.5,6.5a.8.8,0,0,1-1.135,0l-.758-.758a.8.8,0,0,1,0-1.133L7.316,9.948,2.167,4.774a.8.8,0,0,1,0-1.133l.758-.758a.8.8,0,0,1,1.135,0l6.5,6.5A.8.8,0,0,1,10.558,10.515Z"
                  transform="translate(-1.933 -2.648)"
                  fill="#333333"
                />
              </svg>
            }
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(totalNewsCount / newsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={newsListPageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
          {/* <span className="extreme-end-page">Last</span> */}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
