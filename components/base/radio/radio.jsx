import React from "react";
import "./style.css";
import PropTypes from "prop-types";

const Radio = ({ label, className, inputRef, ...props }) => {
  return (
    <label
      className={`c-radio flex items-center cursor-pointer ... ${
        className ? className : ""
      }`}
    >
      <input
        type="radio"
        ref={inputRef}
        {...props}
        className="hidden w-0 h-0"
      />
      <div className="circle flex justify-center items-center w-7 h-7  bg-transparent  border-4  rounded-full border-#bdbdbd ml-2 mb-2  hover:border-#9CA3AF ">
        <div className="inner-circle w-2/3 h-2/3 rounded-full"></div>
      </div>
      <span className="text-gray-500 ">{label}</span>
    </label>
  );
};

export default Radio;

const RadioPropTypes = {
  label: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  className: PropTypes.string.isRequired
};

Radio.propTypes = RadioPropTypes;

Radio.defaultProps = {
  className: "",
  label: "لیبل پیش فرض"
};
