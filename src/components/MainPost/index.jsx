import React from "react";

import { Img, Text } from "components";

const MainPost = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[250px] sm:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
          alt="rectangleSeventeen"
          src={props?.userimage}
        />
        <div className="flex flex-row items-start justify-between mt-[25px] w-full">
          <Text
            className="mt-0.5 text-gray-900 text-sm"
            size="txtMontserratRomanRegular14"
          >
            {props?.date}
          </Text>
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row gap-[7px] items-start justify-start w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_bxtimefive.svg"
                alt="bxtimefive"
              />
              <Text
                className="text-blue-600 text-right text-sm w-auto"
                size="txtMontserratRomanMedium14"
              >
                {props?.duration}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-start justify-start mt-[9px] w-[370px] md:w-full">
          <Text
            className="text-gray-900 text-xl w-full"
            size="txtMontserratRomanSemiBold20"
          >
            {props?.triptitle}
          </Text>
          <Text
            className="leading-[22.00px] max-w-[370px] md:max-w-full text-base text-gray-900"
            size="txtMontserratRomanRegular16"
          >
            {props?.tripdescription}
          </Text>
        </div>
      </div>
    </>
  );
};

MainPost.defaultProps = {
  userimage: "images/img_rectangle17.png",
  date: "May 23, 2022",
  duration: "5 minutes",
  triptitle: "My trip to Athens",
  tripdescription:
    "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already...",
};

export default MainPost;
