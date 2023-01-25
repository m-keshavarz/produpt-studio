import React from "react";

const Textarea = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`focus:outline-none ${className}`}
      {...props}
      autoCorrect
    >
      {children}
    </textarea>
  );
});

Textarea.displayName = "BaseTextArea";
export default Textarea;
