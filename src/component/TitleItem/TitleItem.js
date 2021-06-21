import React from "react";
import "./style.less";

const TitleItem = (props) => {
  return (
    <>
      <div
        style={props.black ? { color: "#333333" } : null}
        className="titleItem"
      >
        <span>{props.span1}</span>
        {props.title}
        <span>{props.span2}</span>
      </div>

      {props.desc && (
        <div
          style={props.black ? { color: "#333333" } : null}
          className="descItem"
        >
          {props.desc}
        </div>
      )}
    </>
  );
};

export default React.memo(TitleItem);
