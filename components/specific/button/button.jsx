import PropTypes from "prop-types";
import React from "react";
import ButtonBase from "../../base/button";

const Button = ({ className, bg, size, radius, children, ...props }) => {
  return (
    <ButtonBase
      className={`px-4 flex justify-center items-center whitespace-nowrap ${
        bg === "white"
          ? "bg-white"
          : bg === "purple"
          ? "bg-dusky-blue"
          : bg === "green"
          ? "bg-green-blue"
          : ""
      } ${
        size === "small"
          ? "h-8.5"
          : size === "medium" || size === "big"
          ? "h-10"
          : ""
      } ${
        radius === "lg" ? "rounded-lg" : radius === "full" ? "rounded-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;

const ButtonPropType = {
  className: PropTypes.string,
  bg: PropTypes.string,
  size: PropTypes.string,
  radius: PropTypes.string
};

Button.propTypes = ButtonPropType;

Button.defaultProps = {
  className: "",
  bg: "purple",
  size: "medium",
  radius: "lg"
};
