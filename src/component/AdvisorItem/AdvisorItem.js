import React from "react";
import "./style.less";

import advisorsbg from "../../images/aboutus/advisorsbg.png";

const AdvisorItem = (props) => {
  return (
    <div
      className="c-p advisorItemContainer"
      onClick={() => window.open(props.link, "_blank")}
    >
      <div className="">
        <img src={advisorsbg} className="fluid topimg" />
      </div>
      <div className="advisorItem d-f f-c p-r">
        <img src={props.img} className="hexagone" />

        <div className="itemTitle c-p">{props.title}</div>

        <div className="itemDesc">{props.desc}</div>
      </div>
    </div>
  );
};

export default React.memo(AdvisorItem);
