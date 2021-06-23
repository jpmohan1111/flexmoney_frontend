import React from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import "./style.less";

const CounterContainer = (props) => {
  let className = "count ";
  if (props.colorClass) {
    className += props.colorClass;
  }
  return (
    <div className="d-f  a-c counterContainer">
      <img src={props.img} />
      <CountUp end={parseInt(props.count)} duration="4">
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <>
              <div className={className}>
                <span ref={countUpRef} />
                <span>{props.span}</span>
              </div>
            </>
          </VisibilitySensor>
        )}
      </CountUp>
    </div>
  );
};

export default React.memo(CounterContainer);
