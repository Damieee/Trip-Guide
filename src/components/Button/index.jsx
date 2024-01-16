import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[15px]" };
const variants = {
  fill: {
    gray_300: "bg-gray-300",
    blue_700: "bg-blue-700 text-white-A700",
    white_A700_a2: "bg-white-A700_a2",
    red_300: "bg-red-300 text-white-A700",
    white_A700: "bg-white-A700 text-gray-900",
  },
  outline: {
    red_300: "border-2 border-red-300 border-solid text-red-300",
    black_900:
      "border-[3px] border-black-900 border-solid shadow-bs text-black-900_01",
  },
  gradient: { teal_A100_teal_100: "bg-gradient  text-black-900" },
};
const sizes = { xs: "p-[5px]", sm: "p-2.5", md: "p-[13px]", lg: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf([
    "gray_300",
    "blue_700",
    "white_A700_a2",
    "red_300",
    "white_A700",
    "black_900",
    "teal_A100_teal_100",
  ]),
};

export { Button };
