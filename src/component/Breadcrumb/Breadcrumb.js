import React from "react";
import "./style.less";

const Breadcrumb = (props) => {
  return (
    <div className="breadcrumbFlex">
      <div className="c-p" onClick={() => props.history.push("/")}>
        Home
      </div>
      <div>&nbsp;>&nbsp;</div>
      <div>{props.t2}</div>
    </div>
  );
};

export default React.memo(Breadcrumb);
