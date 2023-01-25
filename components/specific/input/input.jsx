import React from "react";
import PropTypes from "prop-types";
import InputBase from "../../base/input";
import { Check } from "../../icons";
import Image from "next/image";

// images
import errorIcon from "../../../public/images/Asset_15.svg";

const Input = React.forwardRef(
  (
    {
      hasLabel,
      label,
      labelClassName,
      name,
      defaultValue,
      className,
      error,
      errorText,
      success,
      onlyNumber,
      autoComplete,
      ...props
    },
    ref
  ) => {
    const handleKeyPress = evt => {
      if (!onlyNumber) return;
      var theEvent = evt || window.event;
      var key;

      // Handle paste
      if (theEvent.type === "paste") {
        key = theEvent.clipboardData.getData("text/plain");
      } else {
        // Handle key press
        key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
      }
      var regex = /[0-9]|\./;
      if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    };

    return (
      <>
        {hasLabel && (
          <label
            htmlFor={name}
            className={`text-3 mr-3 font-Medium text-grey-blue lg:text-base  lg:mr-5 ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <div
          className={`h-[2.125rem] py-2 px-3 border mt-2 rounded-[4px] border-grey-blue text-3 lg:rounded lg:py-4 lg:px-5 lg:h-[3.35rem] lg:text-base text-dark-slate-blue lg:mt-3 relative ${className} ${
            error
              ? "bg-very-light-red border-none"
              : success
              ? "bg-Ice border-none"
              : ""
          }`}
        >
          <InputBase
            name={name}
            className={`w-5/6 font-Medium placeholder-indigo-300  placeholder-opacity-50 bg-transparent ${
              error ? "bg-very-light-red" : success ? "bg-Ice  " : ""
            }`}
            placeholder="اینجا"
            defaultValue={defaultValue}
            onKeyPress={handleKeyPress}
            autoComplete={autoComplete}
            ref={ref}
            {...props}
          />
          {!error && success && (
            <Check className=" text-green-…-light absolute left-4 top-3 lg:left-4  lg:top-5" />
          )}
          {!success && error && (
            <div className="flex w-full justify-between items-center lg:mt-3.5 mt-2">
              <p className="text-Red font-Regular text-2 lg:text-[0.75rem]">
                {errorText}
              </p>
              <div className="w-3">
                <Image src={errorIcon} alt="error" layout="responsive" />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;

const InputPropType = {
  hasLabel: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  onlyNumber: PropTypes.bool,
  errorText: PropTypes.string,
  autoComplete: PropTypes.string
};

Input.propTypes = InputPropType;

Input.defaultProps = {
  hasLabel: false,
  label: "",
  labelClassName: "",
  name: "",
  defaultValue: "",
  className: "",
  onlyNumber: false,
  errorText: "این فیلد الزامیست",
  autoComplete: "off"
};
