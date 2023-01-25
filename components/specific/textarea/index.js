import React from "react";
import TextareaBase from "../../base/textarea/textarea";
import { Check } from "../../icons";
import Image from "next/image";

const Textarea = React.forwardRef(
  (
    {
      hasLabel,
      label,
      labelClassName,
      name,
      className,
      inputRef,
      error,
      errorText,
      success,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {hasLabel && (
          <label
            htmlFor={name}
            className={`text-3 mr-3 font-Medium text-grey-blue lg:text-base  lg:mr-5 ${
              labelClassName || ""
            }`}
          >
            {label}
          </label>
        )}
        <div
          className={` py-2 px-3 border mt-2 rounded-[4px] border-grey-blue text-3 lg:rounded lg:py-4 lg:px-5  lg:text-base text-dark-slate-blue lg:mt-3 relative ${className} ${
            error
              ? "bg-very-light-red border-none"
              : success
              ? "bg-Ice border-none"
              : ""
          }`}
        >
          <TextareaBase
            ref={ref}
            className={`w-full font-Medium placeholder-indigo-300  placeholder-opacity-50 bg-transparent ${
              error ? "bg-very-light-red" : success ? "bg-Ice" : ""
            }`}
            name={name}
            id={name}
            placeholder="اینجا"
            autoComplete="off"
            {...props}
          ></TextareaBase>
          {children}
          {!error && success && (
            <Check className=" text-green-…-light absolute left-4 top-3 lg:left-4  lg:top-5" />
          )}
          {!success && error && (
            <div className="flex w-full justify-between items-center lg:mt-3.5 mt-2 ">
              <p className="text-Red font-Regular text-2 lg:text-[0.75rem]">
                {errorText}
              </p>
              {/* <PinRounded className="text-Red  text-[1rem]" /> */}
              <Image
                src={errorIcon}
                alt="error"
                className="text-Red lg:w-3 text-3"
              />
            </div>
          )}
          {/* {!error && success && hasDot && (
          <img
            src={require("../../assets/icons/Done.svg")}
            alt="valid"
            className="valid-img"
          />
        )}
        {!success && error && hasDot && (
          // <img
          //   src={require("../../assets/icons/Delete.svg")}
          //   alt="invalid"
          //   className="valid-img"
          // />
        )} */}
        </div>
      </>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
