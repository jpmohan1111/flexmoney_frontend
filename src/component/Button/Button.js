import React from "react";
import "./style.less";

import Spin from "../../images/Spin.gif";

import loader from "../../images/loader.gif";

const Button = (props) => {
  //console.log("==>", props.fournotfonund);
  return (
    <div
      onClick={props.onClick}
      style={props.loading ? { pointerEvents: "none", cursor: "none" } : null}
      className={
        props.fournotfonund ? "btn effect-1 fournotbtn" : "btn effect-1 "
      }
    >
      {props.loading && <i class="fa fa-circle-o-notch fa-spin"></i>}

      <span style={props.loading ? { paddingLeft: "15px" } : null}>
        {props.title}
      </span>
    </div>
  );
};

export default React.memo(Button);
