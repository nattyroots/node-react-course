import React from "react";
const Option = props => {
  return (
    <button
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  );
};

export default Option;
