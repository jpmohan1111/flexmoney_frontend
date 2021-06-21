import React from "react";
import "./style.less";
// import announcement from "../../images/footer/announcement.svg";
import announcement from "../../images/footer/announcement.svg";
import cross from "../../images/footer/cross.svg";
import useWindowDimensions from "../../useWindowDimensions";
const Announcement = (props) => {
  const { height, width } = useWindowDimensions();

  if (width < 1024) {
    return (
      <div className="marquee_strip_box d-f">
        <div className="d-f a-c">
          <div>
            <img src={announcement} className="animg" />
          </div>
          <div className="announcementTxt">Announcements&nbsp;|&nbsp;</div>
        </div>
        <div className="w-f">
          <marquee
            class="marquee_strip"
            behavior="scroll"
            scrollamount="3"
            direction="left"
            width="100%"
          >
            <div>
              <span>
                We're excited to announce Series A investment for Flexmoney.
              </span>
            </div>
          </marquee>
        </div>

        <img src={cross} onClick={props.onClick} className="cross" />
      </div>
    );
  }

  return (
    <div>
      <div className="marquee_strip_box j-c d-f a-c">
        <div className="d-f a-c">
          <div>
            <img src={announcement} className="animg" />
          </div>
          <div className="announcementTxt">Announcements |&nbsp; </div>
        </div>

        <div className="weareproudTxt">
          We're excited to announce Series A investment for Flexmoney.
        </div>

        <img src={cross} onClick={props.onClick} className="cross" />
      </div>
    </div>
  );
};

export default React.memo(Announcement);
