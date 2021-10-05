import React, { useRef, useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import WOW from "wowjs";
import "swiper/swiper-bundle.css";

import uniqid from "uniqid";
import moment from "moment";

import urldata from "../../urldata";
import axios from "axios";

import "./style.less";

import Button from "../../component/Button/Button";
import Toast from "../../component/Toast/Toast";
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
} from "swiper";

import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";

import logobanner from "../../images/contactus/logobanner.png";
import bannerimg2560 from "../../images/contactus/bannerimg2560.png";
import tick from "../../images/contactus/tick.svg";

import closeIcon from "../../images/close.svg";
import check from "../../images/check.svg";

import useWindowDimensions from "../../useWindowDimensions";
import InputText from "../../component/InputText/InputText";
Swiper.use([
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  EffectCoverflow,
]);

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

const ContactUs = (props) => {
  const { height, width } = useWindowDimensions();

  const [name, setname] = useState("");
  const [nameerr, setnameerr] = useState("");
  const [emailId, setemailId] = useState("");
  const [emailIderr, setemailIderr] = useState("");
  const [whoareyou, setwhoareyou] = useState("");
  const [whoareyouerr, setwhoareyouerr] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumbererr, setPhoneNumbererr] = useState("");

  const [companyName, setcompanyName] = useState("");
  const [companyNameerr, setcompanyNameerr] = useState("");

  const [subject, setsubject] = useState("");
  const [subjecterr, setsubjecterr] = useState("");

  const [message, setMessage] = useState("");
  const [messageerr, setMessageerr] = useState("");
  const [loading, setloading] = useState(false);

  const [showtxt, setShowtxt] = useState(false);

  const [list, setList] = useState([]);
  let toastProperties = null;

  useEffect(() => {
    window.scroll(0, 0);

    try {
      document.getElementById("contactUs").style.display = "none";
      document.getElementById("footerContainer").style.marginBottom = "0";
    } catch (error) {}

    document.title =
      "Contact Us to join our ever growing network or if want to know more";
    document.getElementsByTagName("META")[3].content =
      "Leading the Buy Now Pay Later Revolution in India. InstaCred, Flexmoney's Credit Platform, enables Lenders to offer instant cardless finance across its merchant network";

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

  const submit = () => {
    ////console.log(fname, lname, subject, phoneNumber, message)
    var formIsValid = true;
    setloading(true);

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

    if (!whoareyou) {
      formIsValid = false;
      setwhoareyouerr("*Please select an option");
    } else {
      setwhoareyouerr("");
    }

    if (typeof phoneNumber !== "undefined") {
      if (!phoneNumber.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        setPhoneNumbererr("*Please enter valid mobile number.");
      } else {
        setPhoneNumbererr("");
      }
    }

    if (formIsValid) {
      let data = {};
      data.name = name;
      data.emailId = emailId;
      data.subject = subject;
      data.phoneNumber = phoneNumber;
      data.message = message;
      data.whoareyou = whoareyou;
      data.companyName = companyName;
      data.date = moment().format("DD-MM-YYYY");
      data.time = moment().format("hh:mm a");

      let url = new URL(
        `${process.env.REACT_APP_API_ENDPOINT}/user/contactForm`
      );

      axios({
        method: "post",
        url: url,
        data: data,
      })
        .then((response) => {
          setname("");
          setemailId("");
          setsubject("");
          setPhoneNumber("");

          setwhoareyou("");
          setcompanyName("");

          document.getElementById("Who are you?").selectedIndex = 0;

          setMessage("");

          setShowtxt(true);
          setTimeout(() => {
            setShowtxt(false);
          }, 2000);

          setloading(false);
          // showToast("success");
        })
        .catch((error) => {
          // alert("Something Went Wrong");
          //showToast("danger");
        });
    } else {
      setloading(false);
    }
  };

  const showToast = (type) => {
    const id = Math.floor(Math.random() * 101 + 1);
    switch (type) {
      case "success":
        toastProperties = {
          id,
          title: "Success",
          description: "Your Form Sumbitted Successfully",
          backgroundColor: "#329F33",
          icon: check,
        };
        break;
      case "danger":
        toastProperties = {
          id,
          title: "Something Went Wrong",
          description: "",
          backgroundColor: "red",
          icon: closeIcon,
        };
        break;
      case "success2":
        toastProperties = {
          id,
          title: "Success",
          description: "Your Resume Uploaded Successfully",
          backgroundColor: "#329F33",
          icon: check,
        };
        break;

      default:
        setList([]);
    }

    setList([...list, toastProperties]);
  };

  return (
    <>
      <section className="contactUsSec1 wow fadeIn">
        <div className="ContactUscontainer">
          <Breadcrumb history={props.history} t2="Contact Us" />
          <Row className="row m-0 ">
            <Col lg={6} md={6} className="p-0 firstcol">
              <div className="title">Contact Us</div>

              <div className="desc ">
                We'd love to help you improve your customer's credit purchase
                experience. Reach out!
              </div>
            </Col>

            <Col lg={6} md={6} className="p-0 col2">
              <div className="imgContainer">
                <div>
                  <img
                    src={width > 480 ? bannerimg2560 : logobanner}
                    className="fluid"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* <img src={bannerbg2560} className="fluid" /> */}
      </section>

      <section className="contactUsSec2 wow fadeInUp">
        <div className="desc">
          If you want to join our ever growing network or want to know more,
          write in to{" "}
          <a href="mailto:enquiry@flexmoney.in">enquiry@flexmoney.in</a> or
          simply fill in the form below:
        </div>
        <Row className="p-0 contactrow">
          <Col lg={8} className="firstCol">
            <Row>
              <Col lg={6}>
                <InputText
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  title="Name*"
                />
                <div className="err">{nameerr}</div>
              </Col>
              <Col lg={6}>
                <InputText
                  value={emailId}
                  onChange={(e) => setemailId(e.target.value)}
                  title="Email ID*"
                />
                <div className="err">{emailIderr}</div>
              </Col>

              <Col lg={6}>
                <InputText
                  dropdown
                  list={[
                    {
                      name: "",
                      value: "",
                      notselected: true,
                    },
                    {
                      name: "Merchant",
                      value: "Merchant",
                    },
                    {
                      name: "Lender",
                      value: "Lender",
                    },
                    {
                      name: "Others",
                      value: "Others",
                    },
                  ]}
                  onChange={(e) => setwhoareyou(e.target.value)}
                  title="Who are you?*"
                  id="Who are you?"
                />
                <div className="err">{whoareyouerr}</div>
              </Col>

              <Col lg={6}>
                <InputText
                  value={phoneNumber}
                  type="tel"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  title="Mobile Number*"
                />
                <div className="err">{phoneNumbererr}</div>
              </Col>
              <Col lg={6}>
                <InputText
                  value={companyName}
                  onChange={(e) => setcompanyName(e.target.value)}
                  title="Company Name"
                />
              </Col>

              <Col lg={6}>
                <InputText
                  value={subject}
                  onChange={(e) => setsubject(e.target.value)}
                  title="Subject"
                />
              </Col>

              <Col lg={12}>
                <InputText
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  title="Message"
                />
                <div className="err">{messageerr} </div>
              </Col>
            </Row>

            <div className="btnContainer">
              <Button loading={loading} onClick={submit} title="Submit" />
            </div>

            {showtxt && (
              <div className="thankyouTxt">
                Thank you! We'll get back to you soon
              </div>
            )}
          </Col>
          <Col lg={4} className="p-0 d-f f-c j-c a-c">
            <div className="secondCol">
              <div className="title">Customers</div>
              <div className="titleContainer d-f ">
                <div>
                  <img src={tick} className="caution" />
                </div>
                <div className="contactItemDesc">
                  If you are a customer and want to raise a request / complaint
                  regarding your transaction, please send an email to <br></br>
                  <a href="mailto:contact@flexmoney.in">contact@flexmoney.in</a>
                </div>
              </div>
              <div className="titleContainer d-f ">
                <div>
                  <img src={tick} className="caution" />
                </div>
                <div className="contactItemDesc">
                  Shop with InstaCred. To check your eligibility or to apply for
                  a new InstaCred ™ Credit Line&nbsp;
                  <a
                    target="_blank"
                    href="https://instacred.me/new-user-activation?utm_source=FMwebsite"
                  >
                    click here
                  </a>
                  {/* Note: Please avoid using this form to raise request /
                  complaints regarding your transaction. For all such requests /
                  complaints, write to <br></br>
                  <a href="mailto:contact@flexmoney.in">contact@flexmoney.in</a> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <Toast toastList={list} position="top-right" />
    </>
  );
};

export default ContactUs;
