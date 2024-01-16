import React from "react";

const sizeClasses = {
  txtMontserratRomanSemiBold36Blue600: "font-montserrat font-semibold",
  txtMontserratRomanBold48: "font-bold font-montserrat",
  txtRosarivoRegular18: "font-normal font-rosarivo",
  txtMontserratRomanRegular14: "font-montserrat font-normal",
  txtMontserratRomanSemiBold36: "font-montserrat font-semibold",
  txtMontserratRomanMedium14: "font-medium font-montserrat",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtMontserratRomanRegular16Gray600: "font-montserrat font-normal",
  txtMontserratRomanRegular18Blue600: "font-montserrat font-normal",
  txtMontserratRomanRegular16Gray500: "font-montserrat font-normal",
  txtMontserratRomanMedium30: "font-medium font-montserrat",
  txtMontserratRomanSemiBold18: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold18Red300: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
  txtRuluko28: "font-normal font-ruluko",
  txtMontserratRomanRegular18Red300: "font-montserrat font-normal",
  txtMontserratRomanBold18: "font-bold font-montserrat",
  txtRuluko64: "font-normal font-ruluko",
  txtMontserratRomanSemiBold40: "font-montserrat font-semibold",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtMontserratRomanBold32: "font-bold font-montserrat",
  txtMontserratRomanRegular18: "font-montserrat font-normal",
  txtMontserratRomanRegular18Bluegray90001: "font-montserrat font-normal",
  txtMontserratRomanRegular16: "font-montserrat font-normal",
  txtMontserratRomanSemiBold20: "font-montserrat font-semibold",
  txtMontserratRomanMedium20: "font-medium font-montserrat",
  txtMontserratRomanMedium22: "font-medium font-montserrat",
  txtRosarivoRegular20: "font-normal font-rosarivo",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
