import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { withRouter } from "react-router";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Aside from "./Aside";
import Main from "./Main";
import "react-pro-sidebar/dist/css/styles.css";

import "./style.less";

import { useLocation } from "react-router-dom";

const Dashboard = (props) => {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    //setLocale(checked ? "ar" : "en")
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className="adminDashboard">
      <div className={`app  ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
        <Aside
          image={image}
          collapsed={collapsed}
          rtl={rtl}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Main
          image={image}
          toggled={toggled}
          collapsed={collapsed}
          rtl={rtl}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
          handleRtlChange={handleRtlChange}
          handleImageChange={handleImageChange}
          history={props.history}
        />
      </div>
    </div>
  );
};

export default Dashboard;
