import React from "react";

const sizes = {
  "2xl": "text-2xl font-bold md:text-[22px]",
  "5xl": "text-[46px] font-bold md:text-[42px] sm:text-4xl",
  xl: "text-[22px] font-semibold",
  s: "text-sm font-semibold",
  md: "text-base font-bold",
  lg: "text-lg font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-600 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
