import React from "react";

const SubText = ({ children, className, ...props }) => {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};

export default SubText;
