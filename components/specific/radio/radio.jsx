import React from "react";
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
        className="hidden w-0 h-0 peer"
      />
      <div className="childPeer flex justify-center items-center  w-[20px] h-[20px]  bg-transparent  border-2  rounded-full border-#bdbdbd ml-2 mb-2  after:w-0 after:h-0 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:bg-green-500 peer-checked:after:w-3/4 peer-checked:after:h-3/4 peer-checked:after:rounded-full peer-checked:after:transition-all  peer-checked:after:duration-350 peer-checked:border-green-500">
        {/* <div className="w-2/3 h-2/3 rounded-full"></div> */}
      </div>
      <span className="text-gray-700 peer-checked:text-green-600">{label}</span>
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
