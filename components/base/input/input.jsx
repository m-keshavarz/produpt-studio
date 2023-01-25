import React from "react";

const Input = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div>
      <input
        ref={ref}
        className={`focus:outline-none ${className}`}
        {...props}
      />
      {children}
    </div>
  );
});

Input.displayName = "BaseInput";

export default Input;
