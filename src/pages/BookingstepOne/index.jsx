import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const BookingstepOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-4 md:px-5 w-full" />
        <Text
          className="mt-[82px] text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900"
          size="txtMontserratRomanBold48"
        >
          Booking Details
        </Text>
        <div className="flex flex-row items-center justify-center mt-[76px] md:px-5 w-[27%] md:w-full">
          <div className="bg-blue-600 flex flex-col h-[60px] items-center justify-end p-[7px] rounded-[50%] w-[60px]">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
              size="txtMontserratRomanSemiBold36"
            >
              1
            </Text>
          </div>
          <Line className="bg-blue-600 h-0.5 my-[29px] w-[24%]" />
          <div className="bg-white-A700 border-2 border-blue-600 border-solid flex flex-col h-[60px] items-center justify-end p-[7px] rounded-[50%] w-[60px]">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue-600 text-center"
              size="txtMontserratRomanSemiBold36Blue600"
            >
              2
            </Text>
          </div>
          <Line className="bg-blue-600 h-0.5 my-[29px] w-[24%]" />
          <div className="bg-white-A700 border-2 border-blue-600 border-solid flex flex-col h-[60px] items-center justify-end p-[7px] rounded-[50%] w-[60px]">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue-600 text-center"
              size="txtMontserratRomanSemiBold36Blue600"
            >
              3
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col items-center justify-start max-w-[830px] mt-20 mx-auto p-[29px] md:px-5 rounded-[12px] w-full">
          <div className="flex flex-col gap-[25px] items-center justify-start w-[96%] md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtMontserratRomanSemiBold40"
            >
              Reservation Info
            </Text>
            <div className="flex md:flex-col flex-row gap-[19px] items-center justify-between w-full">
              <Img
                className="h-[355px] md:h-auto object-cover rounded-[12px]"
                src="images/img_rectangle9_355x370.png"
                alt="rectangleNine"
              />
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtMontserratRomanMedium22"
                >
                  Wilderness Club at Big Ceddar
                </Text>
                <div className="flex flex-row gap-5 items-center justify-between mt-2 w-full">
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
                      4 Beds
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
                      8 Sleeps
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
                      1,350 Sq Ft
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[54px] items-start justify-start mt-5 w-[91%] md:w-full">
                  <Text
                    className="text-gray-900 text-lg"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Arrival Date
                  </Text>
                  <Text
                    className="text-gray-900 text-lg"
                    size="txtMontserratRomanRegular18"
                  >
                    October 28, 2022
                  </Text>
                </div>
                <div className="flex flex-row gap-[19px] items-center justify-start mt-3 w-[97%] md:w-full">
                  <Text
                    className="text-gray-900 text-lg"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Departure Date
                  </Text>
                  <Text
                    className="text-gray-900 text-lg"
                    size="txtMontserratRomanRegular18"
                  >
                    November 03, 2022
                  </Text>
                </div>
                <div className="flex flex-row gap-[52px] items-start justify-start mt-2.5 w-[51%] md:w-full">
                  <Text
                    className="text-gray-900 text-lg"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Total Nighrs
                  </Text>
                  <Text
                    className="text-gray-900 text-lg"
                    size="txtMontserratRomanRegular18"
                  >
                    6
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-5 w-[62%] md:w-full">
                  <Text
                    className="text-gray-900 text-lg"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Rate
                  </Text>
                  <Text
                    className="text-blue-600 text-lg"
                    size="txtMontserratRomanRegular18Blue600"
                  >
                    $2016
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start mt-[11px] w-[99%] md:w-full">
                  <div className="flex flex-col items-end justify-start w-full">
                    <div className="flex flex-row gap-20 items-start justify-start w-full">
                      <Text
                        className="mb-0.5 text-gray-900 text-lg"
                        size="txtMontserratRomanSemiBold18"
                      >
                        Discount
                      </Text>
                      <Text
                        className="mt-0.5 text-lg text-red-300"
                        size="txtMontserratRomanRegular18Red300"
                      >
                        Apply Coupon Code
                      </Text>
                    </div>
                    <Line className="bg-red-300 h-px w-[53%]" />
                  </div>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[7px] w-[59%] md:w-full">
                  <Text
                    className="text-gray-900 text-lg"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Community Fee
                  </Text>
                  <Text
                    className="text-blue-600 text-lg"
                    size="txtMontserratRomanRegular18Blue600"
                  >
                    $149
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-2.5 w-[66%] md:w-full">
                  <Text
                    className="text-gray-900 text-lg"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Tax
                  </Text>
                  <Text
                    className="text-blue-600 text-lg"
                    size="txtMontserratRomanRegular18Blue600"
                  >
                    $143.25
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[11px] w-[72%] md:w-full">
                  <Text
                    className="text-gray-900 text-lg"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Total
                  </Text>
                  <Text
                    className="text-blue-600 text-lg"
                    size="txtMontserratRomanBold18"
                  >
                    $2308.25
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold min-w-[275px] rounded-[10px] text-base text-center"
              color="red_300"
              size="lg"
              variant="fill"
            >
              Next Step
            </Button>
          </div>
        </div>
        <Footer className="bg-gray-100_01 flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default BookingstepOnePage;
