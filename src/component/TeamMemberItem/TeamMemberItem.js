import React from "react";
import "./style.less";

const TeamMemberItem = (props) => {
  return (
    <>
      <div
        onClick={() => window.open(props.url, "_blank")}
        className="teamItem d-f f-c j-c a-c c-p"
      >
        <div>
          <img src={props.img} className="img-fluid" />
        </div>

        <div className="itemTitle">{props.name}</div>
        <div className="itemdesc">{props.designation}</div>
      </div>
    </>
  );
};

export default React.memo(TeamMemberItem);
