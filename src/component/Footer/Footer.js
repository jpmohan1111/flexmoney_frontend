import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./style.less";
import WOW from "wowjs";
import location from "../../images/footer/location.png";
import fb from "../../images/footer/fb.svg";
import fbgrad from "../../images/footer/facebookgrad.svg";
import insta from "../../images/footer/insta.svg";
import linkdin from "../../images/footer/linkdin.svg";
import instagrad from "../../images/footer/instagrad.svg";
import linkdingrad from "../../images/footer/linkdingrad.svg";
import mail from "../../images/footer/mail.png";
// import call from "../../images/contactus/callwhite.svg";
import sendIcon from "../../images/footer/sendIcon.png";

import useWindowDimensions from "../../useWindowDimensions";
import axios from "axios";
import urldata from "../../urldata";

import close from "../../images/close.svg";
import check from "../../images/check.svg";

const Footer = (props) => {
  const { height, width } = useWindowDimensions();

  const [emailId, setEmailId] = useState("");
  const [emailIderr, setEmailIderr] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  // return <h1 >Footer</h1>;

  return (
    <>
      {width > 1023 ? (
        <Row id="footerContainer" className="footerContainer  d-f  jc-sb  m-0">
          <Col lg={0} className="p-0">
            {/* <div className="d-f">
              <div className="blogstxt">
                Blogs&nbsp;&nbsp; | &nbsp;&nbsp;Contact Us
              </div>
              <div className="blogstxt">Contact Us</div>
            </div> */}
          </Col>
          <Col lg={9} className="p-0 ">
            <div className="d-if">
              <div className="copyIcon">&#169;</div>
              <div className="copyrightTxt">
                &nbsp;Flexmoney 2021
                {/* &nbsp;Flexmoney 2021 &nbsp;|&nbsp; Crafted by{" "}
                <a href="https://www.togglehead.in/" target="_blank">
                  Togglehead
                </a> */}
              </div>
            </div>
          </Col>
          <Col lg={3} className="p-0">
            <div className="social_media_box" style={{ textAlign: "end" }}>
              {/* <a className="fbicon" href="#">
              <img src={fb} className="fb norm" />
              <img src={fbgrad} className="fb grad" />
            </a>
            <a className="fbicon" href="#">
              <img src={insta} className="fb norm" />
              <img src={instagrad} className="fb grad" />
            </a> */}
              <a
                className="fbicon"
                target="_blank"
                href="https://www.linkedin.com/company/flexmoney-technologies-pvt-ltd/"
              >
                <img src={linkdin} className=" norm" />
                <img src={linkdingrad} className=" grad" />
              </a>
            </div>
          </Col>
        </Row>
      ) : (
        <div id="footerContainer" className="footerContainer  d-f  jc-sb">
          {/* <div className="d-f">
            <div className="blogstxt">Blogs | Contact Us</div>
            <div className="blogstxt">Contact Us</div>
          </div> */}
          <div className="social_media_box d-f">
            {/* <a className="fbicon" href="#">
              <img src={fb} className="fb norm" />
              <img src={fbgrad} className="fb grad" />
            </a>
            <a className="fbicon" href="#">
              <img src={insta} className="fb norm" />
              <img src={instagrad} className="fb grad" />
            </a> */}

            <a
              className="fbicon"
              target="_blank"
              href="https://www.linkedin.com/company/flexmoney-technologies-pvt-ltd/"
            >
              <img src={linkdin} className=" norm" />
              <img src={linkdingrad} className=" grad" />
            </a>
          </div>
          {/* <div className="copyrightTxt">
            &#169;&nbsp;Flexmoney 2021 &nbsp;|&nbsp; Crafted by{" "}
            <a href="https://www.togglehead.in/" target="_blank">
              Togglehead
            </a>
          </div> */}
          <div className="d-f">
            <div className="copyIcon">&#169;</div>
            <div className="copyrightTxt">
              &nbsp;Flexmoney 2021
              {/* &nbsp;Flexmoney 2021 &nbsp;|&nbsp; Crafted by{" "}
              <a href="https://www.togglehead.in/" target="_blank">
                Togglehead
              </a> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Footer);
