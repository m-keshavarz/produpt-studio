/* eslint no-octal-escape: "off" */
import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Checkbox = forwardRef(({ label, className, ...props }, ref) => {
  return (
    <label
      className={`flex items-center cursor-pointer select-none ${className}`}
    >
      <input
        type="checkbox"
        ref={ref}
        className="hidden w-0 h-0 opacity-0 peer"
        {...props}
      />
      <span className="flex items-center justify-center  w-5 h-5 bg-white border border-gray-500 ml-2 rounded after:content-['\2713'] after:text-base after:opacity-0 after:transition after:duration-300 after:transform after:scale-0 peer-checked:after:content-['\2713'] peer-checked:after:scale-100 peer-checked:after:opacity-100"></span>
      {label}
    </label>
  );
});

Checkbox.displayName = "Checkbox";

const CheckboxPropTypes = {
  label: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  className: PropTypes.string.isRequired
};

Checkbox.propTypes = CheckboxPropTypes;

Checkbox.defaultProps = {
  className: "",
  label: "لیبل پیش فرض"
};

export default Checkbox;
