import React, { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "../../../component/Button/Button";
// import logo from "../../../images/logo.png";

import "./style.less";

import urldata from "../../../urldata";
import axios from "axios";

const Login = (props) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [erremailAddress, setErrEmailAddress] = useState("");

  const [pwd, setPwd] = useState("");
  const [errpwd, setErrPwd] = useState("");

  useEffect(() => {
    // document.title = "Flexmoney - Admin";
  }, []);

  const submitClick = () => {
    var formIsValid = true;

    if (typeof emailAddress !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(emailAddress)) {
        formIsValid = false;
        setErrEmailAddress("*Please enter valid email-Id.");
      } else {
        setErrEmailAddress("");
      }

      if (!pwd) {
        formIsValid = false;
        setErrPwd("*Please enter your password.");
      } else {
        setErrPwd("");
      }

      if (formIsValid) {
        let data = {};

        data.emailId = emailAddress;
        data.password = pwd;

        let url = new URL(urldata + "admin/login");

        axios({
          method: "post",
          url: url,
          data: data,
          withCredentials: true,
        })
          .then((response) => {
            localStorage.setItem("isLoggedIn", "true");
            props.history.push("/admin/dashboard");
          })
          .catch((error) => {
            localStorage.clear();
            setErrPwd("Emailid or Password is wrong ");
          });
      }
    }
  };

  return (
    <Row className="AdminLoginContainer">
      <Col md={10} xs={10} lg={5}>
        <div className="d-f j-c a-c">
          <div>{/* <img src={logo} width="200" className="fluid" /> */}</div>{" "}
        </div>
        <h1>Admin Login</h1>
        <input
          type="text"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          className="emailAddress"
          placeholder="Email Address "
        />
        <div className="error">{erremailAddress}</div>
        <input
          type="password"
          className="pwd"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="Password "
        />
        <div style={{ paddingTop: "1em" }} className="error">
          {errpwd}
        </div>
        <div style={{ paddingTop: "2em" }} className="d-f j-c a-c">
          <Button title="Submit" onClick={submitClick} />
          {/* <div className="submitbtn" onClick={submitClick}>
            Submit
          </div> */}
        </div>
      </Col>
    </Row>
  );
};

export default Login;
