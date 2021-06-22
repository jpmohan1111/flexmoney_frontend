import React from "react";
import "./style.less";

import advisorsbg from "../../images/aboutus/advisorsbg.png";

const LenderItem = (props) => {
  return (
    <div
      className="c-p lenderItemContainer"
      onClick={() => window.open(props.link, "_blank")}
    >
      <div className="lenderItem d-f f-c p-r">
        <img src={props.img} className="hexagone" />

        <div className="itemTitle c-p">{props.title}</div>

        <div className="itemDesc">{props.desc}</div>
        <div className="itemDescrip">{props.description}</div>
      </div>
    </div>
  );
};

export default React.memo(LenderItem);
