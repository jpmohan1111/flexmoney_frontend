import React, { useState, useEffect } from "react";

import WOW from "wowjs";
import Button from "../../component/Button/Button";

import "./style.less";

const PageNotFound = (props) => {
  useEffect(() => {
    window.scroll(0, 0);
    // document.title = "Flexmoney - 404";

    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      {/* <section className="pagenotfoundsec1 wow fadeIn t-c" style={{ backgroundImage: `url(${bg})` }}> */}
      <section className="pagenotfoundsec1 wow fadeIn t-c d-f f-c j-c a-c">
        <p>The page you were looking for, does not exist!</p>
        <h1>404</h1>
        <Button
          fournotfonund={true}
          onClick={() => props.history.push("/")}
          title="BACK TO HOMEPAGE"
        />
      </section>
    </>
  );
};

export default PageNotFound;
