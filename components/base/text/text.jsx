import React from "react";

const Text = ({ children, className, ...props }, ref) => {
  return (
    <p ref={ref} className={className} {...props}>
      {children}
    </p>
  );
};

export default React.forwardRef(Text);
