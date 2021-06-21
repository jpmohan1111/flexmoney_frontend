import React from "react";

import "./style.less";

const InputText = (props) => {
  ////console.log(props);
  if (props.dropdown) {
    const optionList = props.list.map((item, i) => {
      return (
        <option
          key={item.name}
          // selected={i === 0 ? "selected" : null}
          disabled={i == 0 ? true : false}
          value={item.value}
        >
          {item.name}
        </option>
      );
    });
    return (
      <>
        <div className="user-input-wrp">
          <select
            className="inputText"
            defaultValue=""
            // onChange={(e) => ////console.log(e.target.value)}
            onChange={props.onChange}
            name="countries"
            id={props.id}
            required
          >
            {optionList}
          </select>
          <span className="floating-label">{props.title}</span>
        </div>
      </>
    );
  }

  return (
    <div className="user-input-wrp">
      <input
        type={props.type ? props.type : "text"}
        maxLength={props.limit ? 100 : null}
        className="inputText"
        value={props.value}
        onChange={props.onChange}
        required
      />
      <span className="floating-label">{props.title}</span>
    </div>
  );
};

export default React.memo(InputText);
