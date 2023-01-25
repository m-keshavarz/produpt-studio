import React, { useState } from "react";
import { classes } from "./styles";
import PropTypes from "prop-types";

const ToggleSwitch = ({ className, value, onChange }) => {
  const [state, setState] = useState(value);

  return (
    <p
      className={`${classes.container + " " + className} ${
        !state ? classes.containerActive : ""
      }`}
      onClick={() => {
        setState(state => !state);
        onchange && onChange(!state);
      }}
    >
      <span
        className={`h-[14px] w-[14px] flex-shrink-0 bg-gray-50 top-1/2 transform -translate-y-1/2 rounded-full transition-all duration-500 absolute left-[1px]
         shadow-sm  ${!state ? "ease-in-out left-[15.2px] " : ""}`}
      ></span>
    </p>
  );
};

export default ToggleSwitch;

const ToggleSwitchType = {
  className: PropTypes.string,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

ToggleSwitch.propTypes = ToggleSwitchType;

ToggleSwitch.defaultProps = {
  className: "",
  value: true
};
