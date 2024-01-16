import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const BookingstepThreePage = () => {
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
          <div className="bg-blue-600 flex flex-col h-[60px] items-center justify-end p-[7px] rounded-[50%] w-[60px]">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
              size="txtMontserratRomanSemiBold36"
            >
              3
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col items-center justify-end max-w-[830px] mt-20 mx-auto p-[30px] md:px-5 rounded-[12px] w-full">
          <div className="flex flex-col gap-5 items-center justify-start mt-1 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtMontserratRomanSemiBold40"
            >
              Payment
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start pt-0.5 w-full">
                <Text
                  className="text-base text-gray-900"
                  size="txtMontserratRomanRegular16"
                >
                  Cardholder name
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
                    Card Number
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
                <div className="flex md:flex-1 flex-col gap-2 items-start justify-start pt-[3px] w-[24%] md:w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtMontserratRomanRegular16"
                  >
                    Expiry Date
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
                <div className="flex md:flex-1 flex-col gap-2 items-start justify-start pt-[3px] w-[23%] md:w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtMontserratRomanRegular16"
                  >
                    Expiry Date
                  </Text>
                  <Input
                    name="rectangleTwelve_Three"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-blue_gray-100 border-solid flex h-[50px] w-full"
                    shape="round"
                    color="white_A700"
                  ></Input>
                </div>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[275px] mt-[25px] rounded-[10px] text-base text-center"
                color="red_300"
                size="lg"
                variant="fill"
              >
                Pay $2308.25
              </Button>
            </div>
          </div>
        </div>
        <footer className="bg-gray-100_01 flex items-center justify-center mt-[100px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-center mb-4 mt-[59px] mx-auto w-[92%]">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[11%] md:w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtMontserratRomanSemiBold16"
                  >
                    Title of section
                  </Text>
                  <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtMontserratRomanRegular14">
                          Page title
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtMontserratRomanRegular14">
                          Page title
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtMontserratRomanRegular14">
                          Page title
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[11%] md:w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtMontserratRomanSemiBold16"
                  >
                    Title of section
                  </Text>
                  <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtMontserratRomanRegular14">
                          Page title
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtMontserratRomanRegular14">
                          Page title
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtMontserratRomanRegular14">
                          Page title
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[11%] md:w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtMontserratRomanSemiBold16"
                  >
                    Title of section
                  </Text>
                  <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtMontserratRomanRegular14">
                          Page title
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtMontserratRomanRegular14">
                          Page title
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-900 text-sm">
                        <Text size="txtMontserratRomanRegular14">
                          Page title
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-[29%] md:w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtMontserratRomanSemiBold16"
                  >
                    Subscribe to Newsletter
                  </Text>
                  <Text
                    className="mt-[19px] text-gray-900 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    Your email
                  </Text>
                  <div className="bg-white-A700 border border-red-300 border-solid flex flex-col items-end justify-start mt-1.5 md:pl-10 sm:pl-5 pl-[296px] rounded-[10px] w-full">
                    <Button
                      className="border border-red-300 border-solid flex h-10 items-center justify-center rounded-br-[10px] rounded-tr-[10px] w-10"
                      color="red_300"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="images/img_carbonsendalt.svg"
                        alt="carbonsendalt"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <Line className="bg-gray-500_01 h-px mt-[49px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[21px] w-full">
                <div className="flex md:flex-1 flex-row sm:gap-10 items-center justify-between w-[55%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue-600"
                    size="txtMontserratRomanBold32"
                  >
                    <span className="text-blue-600 font-montserrat text-left font-bold">
                      Your
                    </span>
                    <span className="text-red-300 font-montserrat text-left font-bold">
                      .logo
                    </span>
                  </Text>
                  <Text
                    className="text-gray-900 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    <span className="text-gray-900 font-montserrat text-left font-normal">
                      Design by{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-blue-600 font-montserrat text-left font-semibold underline"
                    >
                      Delvig
                    </a>
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <div className="flex flex-col h-6 items-center justify-start w-6">
                    <Img
                      className="h-6 w-6"
                      src="images/img_warning.svg"
                      alt="warning"
                    />
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_info.svg"
                    alt="info"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_save.svg"
                    alt="save"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BookingstepThreePage;
