import React from "react";

import { Img, Text } from "components";

const MainAdvantages = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue-600_68 flex flex-col h-[100px] items-center justify-start p-6 sm:px-5 rounded-[50%] w-[100px]">
          <Img
            className="h-[50px] md:h-auto mb-0.5 object-cover w-[50px]"
            alt="iconadvantages"
            src={props?.iconadvantages}
          />
        </div>
        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
          <Text
            className="text-center text-gray-900 text-xl w-full"
            size="txtMontserratRomanSemiBold20"
          >
            {props?.paymentmethodstext}
          </Text>
          <Text
            className="leading-[22.00px] max-w-[270px] md:max-w-full text-base text-center text-gray-900"
            size="txtMontserratRomanRegular16"
          >
            {props?.descriptiontext}
          </Text>
        </div>
      </div>
    </>
  );
};

MainAdvantages.defaultProps = {
  iconadvantages: "images/img_iconadvantages.png",
  paymentmethodstext: "Payment methods",
  descriptiontext: (
    <>
      We have a lot of them, <br />
      from cryptocurrencies to barter for potatoes
    </>
  ),
};

export default MainAdvantages;
