import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        className="input"
        id="input"
        type="text"
        onChange={(e) => props.handleChange(e)}
        disabled={props.disabler}
        ref={props.inputRef}
      />
    </>
  );
};

export default Input;
