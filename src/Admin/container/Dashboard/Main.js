import React from "react";

import { FaHeart, FaBars } from "react-icons/fa";
//import reactLogo from "./assets/logo.svg"

import axios from "axios";
import urldata from "../../../urldata";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ContactUsFormList from "../Views/ContactUsFormList";

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
  history,
}) => {
  const logoutBtnClick = (id) => {
    let url = new URL(urldata + "admin/logout");

    axios({
      method: "post",
      url: url,
      withCredentials: true,
    })
      .then((response) => {
        localStorage.clear();
        history.push("/admin");
      })
      .catch((error) => {
        localStorage.clear();
        history.push("/admin");
      });
  };
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header className="d-f jc-sb a-c">
        <p>Dashboard</p>
        <div
          className="logout_btn c-p"
          onClick={() => {
            logoutBtnClick();
          }}
        >
          Logout
        </div>
      </header>

      <>
        <div className="dashboardDataContainer">
          <Switch>
            <Route
              exact
              path="/admin/dashboard/contactForm"
              component={ContactUsFormList}
            />

            <Redirect to="/admin/dashboard/contactForm" />
          </Switch>
        </div>
      </>

      <footer></footer>
    </main>
  );
};

export default Main;
