import React from "react";
import Option from "./Option";

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      Options
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
