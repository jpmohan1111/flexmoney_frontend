import React, { useState, useEffect } from "react";
import "./style.less";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/header/logo.png";
import logogreen from "../../images/header/logogreen.png";

import useWindowDimensions from "../../useWindowDimensions";

const Header = (props) => {
  const { height, width } = useWindowDimensions();
  const [isSticky, setSticky] = useState(false);
  const [isList, setisList] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    try {
      if (width < 1023) {
        if (window.pageYOffset > 2) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      } else {
        if (window.pageYOffset > 10) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    } catch (error) {}
  };

  // return <h1>Header</h1>;

  return (
    <>
      {/* {isSticky ? null : (
        <div className="marquee_strip_box">
          <span className="announcements">
            <i className="fa fa-bullhorn" aria-hidden="true"></i>{" "}
            &nbsp;Announcements &nbsp;
          </span>
          <marquee
            className="marquee_strip"
            onmouseover="this.stop();"
            onmouseout="this.start();"
          >
            <span>Enrolments for Level 2 - June 2021 examination now open</span>
            <span>
              Internship opportunities for IRM Qualified students announced on
              IRM India Alumni Network
            </span>
            <span>
              Enrolments for July, 2020 Level 1 examination closing soon
            </span>
            <span>
              Follow us on{" "}
              <a href="https://www.instagram.com/irmindia/" target="_blank">
                Instagram
              </a>{" "}
              &amp;{" "}
              <a
                href="https://www.linkedin.com/company/institute-of-risk-management-india"
                target="_blank"
              >
                LinkedIn
              </a>{" "}
              for regular updates
            </span>
          </marquee>
        </div>
      )} */}
      {width >= 1024 ? (
        <div
          className={`header d-f f-c jc-sb a-c ${isSticky ? "sticky" : null}`}
        >
          <div className="header d-f jc-sb a-c">
            <Link to="/">
              <img src={isSticky ? logogreen : logo} />
            </Link>
            <div className="d-f">
              <NavLink
                onClick={() => setisList(false)}
                to="/aboutus"
                className="title c-p"
              >
                About Us
              </NavLink>
              {/* <NavLink
                onClick={() => setisList(false)}
                to="/In-the-news"
                className="title c-p"
              >
                In the News
              </NavLink> */}
              <NavLink
                onClick={() => setisList(false)}
                to="/lenders"
                className="title c-p"
              >
                Lenders
              </NavLink>
              <NavLink
                onClick={() => setisList(false)}
                to="/merchants"
                className="title c-p"
              >
                Merchants
              </NavLink>
              {/* <Link className="title c-p"> About Us</Link> */}
              {/* <NavLink
                onClick={() => setisList(false)}
                to="/careers"
                className="title c-p"
              >
                Careers
              </NavLink> */}
              <NavLink
                onClick={() => setisList(false)}
                to="/contactus"
                className="title c-p"
              >
                Contact Us
              </NavLink>

              {/* <Link className="title c-p">In The News</Link>
              <Link className="title c-p">Lenders</Link>
              <Link className="title c-p">Merchants</Link>
              <Link className="title c-p">Consumers</Link>
              <Link className="title c-p">Careers</Link> */}
            </div>
          </div>
        </div>
      ) : (
        <div className={`header  ${isSticky ? "sticky" : null}`}>
          <div className="d-f a-c jc-sb">
            <Link to="/">
              <img src={logogreen} className="fluid mblogo" />
            </Link>

            <div>
              <button
                aria-label="button"
                onClick={() => setisList(!isList)}
                className={isList ? "opened menu" : "menu"}
              >
                <svg width="70" height="50" viewBox="0 0 100 100">
                  <path
                    className="line line1"
                    fill="#000000"
                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                  />
                  <path
                    fill="#000000"
                    className="line line2"
                    d="M 20,50 H 80"
                  />
                  <path
                    fill="#000000"
                    className="line line3"
                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                  />
                </svg>
              </button>
            </div>
          </div>
          {isList ? (
            <div className="headerMobileView">
              <Link
                to="/aboutus"
                onClick={() => setisList(false)}
                className="title c-p"
              >
                About Us
              </Link>
              {/* <NavLink
                onClick={() => setisList(false)}
                to="/In-the-news"
                className="title c-p"
              >
                In the News
              </NavLink> */}
              <Link
                onClick={() => setisList(false)}
                to="/lenders"
                className="title c-p"
              >
                Lenders
              </Link>

              <NavLink
                onClick={() => setisList(false)}
                to="/merchants"
                className="title c-p"
              >
                Merchants
              </NavLink>

              {/* <Link
                onClick={() => setisList(false)}
                to="/careers"
                className="title c-p"
              >
                Careers
              </Link> */}
              <Link
                onClick={() => setisList(false)}
                to="/contactus"
                className="title c-p"
              >
                Contact Us
              </Link>
              {/* <Link onClick={() => setisList(false)} className="title c-p">
                In The News
              </Link>
              <Link onClick={() => setisList(false)} className="title c-p">
                Lenders
              </Link>
              <Link onClick={() => setisList(false)} className="title c-p">
                Merchants
              </Link>
              <Link
                onClick={() => setisList(false)}
                activeStyle={{ color: "#ed1c24" }}
              >
                Consumers
              </Link>
              <Link onClick={() => setisList(false)} className="title c-p">
                Careers
              </Link> */}
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default React.memo(Header);
