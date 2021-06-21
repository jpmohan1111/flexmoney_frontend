import React, { useState, useEffect } from "react";

import WOW from "wowjs";
import Button from "../../component/Button/Button";

import "./style.less";
import bg from "../../images/404/bg.jpg";

const InternalServerError = (props) => {
  useEffect(() => {
    window.scroll(0, 0);
    // document.title = "Hos - Internal Server Error";

    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <section
        className="pagenotfoundsec1 wow fadeIn t-c"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <p>Internal Server Error!</p>
        <h1>500</h1>
        <Button
          onClick={() => props.history.push("/")}
          title="BACK TO HOMEPAGE"
        />
      </section>
    </>
  );
};

export default InternalServerError;
