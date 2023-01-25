import React from "react";
import TextBase from "../../base/text";

const Text = ({ children, className, ...props }) => {
  return (
    <TextBase className={className} {...props}>
      {children}
    </TextBase>
  );
};

export default Text;
