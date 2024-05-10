import React from "react";

const sizes = {
  lg: "text-lg font-normal",
  "2xl": "text-2xl font-normal md:text-[22px]",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-200 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
