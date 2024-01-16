import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const BookingstepTwoPage = () => {
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
          <div className="bg-blue-600 flex flex-col h-[60px] items-center justify-end p-[7px] rounded-[50%] w-[60px]">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
              size="txtMontserratRomanSemiBold36"
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
          <div className="flex flex-col gap-[25px] items-center justify-start w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtMontserratRomanSemiBold40"
            >
              Your Personal Information
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start pt-0.5 w-full">
                <Text
                  className="text-base text-gray-900"
                  size="txtMontserratRomanRegular16"
                >
                  Guest Full Name
                </Text>
                <Input
                  name="rectangleTwelve"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-blue_gray-100 border-solid flex h-[50px] w-full"
                  shape="round"
                  color="white_A700"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between mt-5 w-full">
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start pt-0.5 w-[49%] md:w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtMontserratRomanRegular16"
                  >
                    Email
                  </Text>
                  <Input
                    name="rectangleTwelve_One"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-blue_gray-100 border-solid flex h-[50px] w-full"
                    shape="round"
                    color="white_A700"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start pt-0.5 w-[49%] md:w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtMontserratRomanRegular16"
                  >
                    Phone number
                  </Text>
                  <Input
                    name="rectangleTwelve_Two"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-blue_gray-100 border-solid flex h-[50px] w-full"
                    shape="round"
                    color="white_A700"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-5 pt-[3px] w-full">
                <Text
                  className="text-base text-gray-900"
                  size="txtMontserratRomanRegular16"
                >
                  <span className="text-gray-900 font-montserrat text-left font-normal">
                    Additional Information{" "}
                  </span>
                  <span className="text-gray-600 font-montserrat text-left font-normal">
                    (optional)
                  </span>
                </Text>
                <TextArea
                  className="bg-white-A700 border border-blue_gray-100 border-solid rounded-[10px] w-full"
                  name="rectangleTwelve_Three"
                  placeholder=""
                ></TextArea>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[275px] mt-[25px] rounded-[10px] text-base text-center"
                color="red_300"
                size="lg"
                variant="fill"
              >
                Next Step
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-100_01 flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default BookingstepTwoPage;
