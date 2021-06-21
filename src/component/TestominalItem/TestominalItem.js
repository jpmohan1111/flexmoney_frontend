import React from "react";
import "./style.less";

import ftestominalbg1 from "../../images/homepage/ftestominalbg1.png";
import ftestominalbg2 from "../../images/homepage/ftestominalbg2.png";
import mtestominalbg1 from "../../images/homepage/mtestominalbg1.png";
import mtestominalbg2 from "../../images/homepage/mtestominalbg2.png";

const TestominalItem = (props) => {
  return (
    <>
      <div className="testominalItem">
        <img
          src={props.male ? mtestominalbg1 : ftestominalbg1}
          className="fluid selected"
        />
        <img
          src={props.male ? mtestominalbg2 : ftestominalbg2}
          className="fluid notselected"
        />
        <div className="testominalContent">
          <svg
            id="leftquote"
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            className="leftquote"
            height="74.069"
            viewBox="0 0 84 74.069"
          >
            <path
              id="Path_23933"
              className="quoteicon"
              data-name="Path 23933"
              d="M33.746,22.035a4.039,4.039,0,0,0,2.033-5.421l-3.32-6.98A4.051,4.051,0,0,0,27.173,7.67a46.685,46.685,0,0,0-14.637,9.487A35.406,35.406,0,0,0,2.711,32.674C.949,38.5,0,46.43,0,56.527v20.8A4.078,4.078,0,0,0,4.066,81.4H30.7a4.078,4.078,0,0,0,4.066-4.066V50.7A4.077,4.077,0,0,0,30.7,46.633H17.957c.136-6.845,1.762-12.333,4.743-16.467C25.14,26.847,28.8,24.137,33.746,22.035Z"
              transform="translate(0 -7.328)"
              fill="#e2e2e2"
            />
            <path
              id="Path_23934"
              className="quoteicon"
              data-name="Path 23934"
              d="M104.378,22.068a4.04,4.04,0,0,0,2.033-5.421l-3.32-6.911A4.051,4.051,0,0,0,97.805,7.77,49.086,49.086,0,0,0,83.236,17.19a36.165,36.165,0,0,0-9.894,15.586Q70.7,41.312,70.7,56.56v20.8a4.078,4.078,0,0,0,4.066,4.066H101.4a4.078,4.078,0,0,0,4.066-4.066V50.732a4.077,4.077,0,0,0-4.066-4.066H88.59c.136-6.845,1.763-12.333,4.743-16.467C95.772,26.88,99.432,24.169,104.378,22.068Z"
              transform="translate(-22.791 -7.361)"
              fill="#e2e2e2"
            />
          </svg>

          <div className=" d-f j-c  f-c h-f">
            <div>
              <div className="testominalDesc">{props.desc}</div>
              <div className="nameTxt">{props.name}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(TestominalItem);
