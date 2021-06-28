import React from "react";
import "./style.less";

import advisorsbg from "../../images/aboutus/advisorsbg.png";

const LenderItem = (props) => {
  let date = new Date(props.date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const externalLinkClick = (e) => {
    if (!props.external_link) return;
    e.stopPropagation();
    window.open(props.external_link, "_blank");
  };
  return (
    <div className="c-p newsItemContainer" onClick={externalLinkClick}>
      <div className="lenderItem d-f f-c p-r">
        <img src={props.img} className="hexagone" />

        <div className="itemTitle c-p">{props.title}</div>

        <div className="itemDate">{`${
          monthNames[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`}</div>
        <div className="itemDescrip">{props.description}</div>
        <div className="readMore">Read More</div>
      </div>
    </div>
  );
};

export default React.memo(LenderItem);
