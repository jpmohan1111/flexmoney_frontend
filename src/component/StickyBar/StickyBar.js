import React from "react";
import "./style.less";
import { Link, NavLink } from "react-router-dom";

const StickyBar = (props) => {
  //console.log(props.histroy);
  return (
    <>
      <Link id="contactUs" to="/contactus">
        <div className="sticky-content">
          <div className="enquire rotate">
            <div className="text">ENQUIRE</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default React.memo(StickyBar);
