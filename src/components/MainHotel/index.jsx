import React from "react";

import { Button, Img, Text } from "components";

const MainHotel = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[220px] relative w-full">
          <Img
            className="absolute h-[220px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-full"
            alt="image"
            src={props?.image}
          
          />

          <div className="absolute flex flex-row inset-x-[0] items-center justify-between mx-auto top-[5%] w-[95%]">
            <div className="bg-white-A700_a2 flex flex-row items-center justify-start p-[5px] rounded-lg">
              <Img
                className="h-4 ml-[5px] my-0.5 rounded-[1px] w-4"
                src="images/img_star1.svg"
                alt="starOne"
              />
              <Text
                className="ml-1 text-base text-gray-900"
                size="txtMontserratRomanRegular16"
              >
                {props?.rating}
              </Text>
            </div>
            
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtMontserratRomanRegular18"
            >
              {props?.country}
            </Text>

            <Button
              className="flex h-8 items-center justify-center w-8"
              shape="circle"
              color="white_A700_a2"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-5"
                src="images/img_favorite.png"
                alt="favorite"
              />
            </Button>

          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-start justify-start mb-[9px] w-auto">
          <div className="flex flex-col gap-[5px] items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                size="txtMontserratRomanMedium22"
              >
                {props?.hotelLocation}
              </Text>
              <Text
                className="text-base text-gray-600 w-auto"
                size="txtMontserratRomanRegular16Gray600"
              >
                {props?.type}
              </Text>
            </div>
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtMontserratRomanRegular18"
            >
              {props?.date}
            </Text>
          </div>
          <div className="flex flex-row gap-[7px] items-end justify-start w-[48%] md:w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-blue-600"
              size="txtMontserratRomanMedium30"
            >
              {props?.price}
            </Text>
            <Text
              className="mb-1 mt-2.5 text-blue-600 text-lg"
              size="txtMontserratRomanRegular18Blue600"
            >
              {props?.frequency}
            </Text>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-[26%]">
              <Img
                className="h-6 md:h-auto object-cover w-6"
                src="images/img_maskgroup.png"
                alt="maskgroup"
              />
              <Text
                className="text-base text-gray-600"
                size="txtMontserratRomanRegular16Gray600"
              >
                {props?.bedscounter}
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-center w-[29%]">
              <Img
                className="h-[26px] md:h-auto object-cover w-[24%]"
                src="images/img_maskgroup_26x24.png"
                alt="maskgroup_One"
              />
              <Text
                className="mt-1 text-base text-gray-600"
                size="txtMontserratRomanRegular16Gray600"
              >
                {props?.sleepscounter}
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start w-[34%]">
              <Img
                className="h-6 md:h-auto object-cover w-6"
                src="images/img_maskgroup_24x24.png"
                alt="maskgroup_Two"
              />
              <Text
                className="mt-[3px] text-base text-gray-600"
                size="txtMontserratRomanRegular16Gray600"
              >
                {props?.landscape}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MainHotel.defaultProps = {
  image: "images/img_rectangle9.png",
  rating: "4.8",
  country: "LONDON",
  hotelLocation: "Wilderness Club at Big Ceddar",
  type: "2 Bedroom Combined Lodge",
  date: "28 October — 1 November",
  price: "$2016",
  frequency: "/6 night",
  bedscounter: "4 Beds",
  sleepscounter: "8 Sleeps",
  landscape: "1,350 Sq Ft",
};

export default MainHotel;
