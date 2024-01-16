import React from "react";

import { Img, Text } from "components";

const MainReview = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
          src="images/img_ellipse6.png"
          alt="ellipseSix"
        />
        <div className="flex flex-col gap-2.5 items-start justify-start w-[317px] md:w-full">
          <Text
            className="leading-[22.00px] max-w-[317px] md:max-w-full text-base text-gray-900"
            size="txtMontserratRomanRegular16"
          >
            {props?.description}
          </Text>
          {props?.jannikeborgpublOne}
        </div>
      </div>
    </>
  );
};

MainReview.defaultProps = {
  description:
    "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
  jannikeborgpublOne: (
    <Text
      className="text-gray-900 text-sm w-full"
      size="txtMontserratRomanRegular14"
    >
      <span className="text-gray-900 font-montserrat text-left font-semibold italic">
        Jannike Borg
      </span>
      <span className="text-gray-900 font-montserrat text-left font-normal italic">
        , Publisher
      </span>
    </Text>
  ),
};

export default MainReview;
