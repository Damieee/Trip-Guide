import React from "react";

import { Button, Img, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import MainHotel from "components/MainHotel";

const relevanceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LastminutedealsPage = () => {
  const mainHotelPropList = [
    {},
    { rectanglenine: "images/img_rectangle9_220x350.png" },
    { rectanglenine: "images/img_rectangle9_1.png" },
    { rectanglenine: "images/img_rectangle9_2.png" },
    { rectanglenine: "images/img_rectangle9_3.png" },
    { rectanglenine: "images/img_rectangle9_4.png" },
    { rectanglenine: "images/img_rectangle9_5.png" },
    { rectanglenine: "images/img_rectangle9_6.png" },
    { rectanglenine: "images/img_rectangle9_7.png" },
    { rectanglenine: "images/img_rectangle9_8.png" },
    { rectanglenine: "images/img_rectangle9_9.png" },
    { rectanglenine: "images/img_rectangle9_10.png" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat sm:gap-10 md:gap-10 gap-[100px] items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-start max-w-[1170px] mt-4 mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <Text
            className="mt-[77px] text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900"
            size="txtMontserratRomanBold48"
          >
            Last Minute Deals
          </Text>
          <div className="bg-white-A700 border border-blue_gray-100 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-end mt-[61px] p-3.5 rounded-[35px] shadow-bs1 w-[49%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[34%] sm:w-full">
              <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                <Img
                  className="h-[22px] md:h-auto object-cover w-[22px]"
                  src="images/img_icon_22x22.png"
                  alt="icon_One"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-base text-gray-900"
                    size="txtMontserratRomanRegular16"
                  >
                    Where
                  </Text>
                  <Text
                    className="text-base text-gray-500"
                    size="txtMontserratRomanRegular16Gray500"
                  >
                    Search Destination
                  </Text>
                </div>
              </div>
            </div>
            <Line className="bg-gray-200 sm:h-0.5 h-10 ml-20 sm:ml-[0] w-0.5 sm:w-full" />
            <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[18px] w-[23%] sm:w-full">
              <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                <Img
                  className="h-[22px] md:h-auto object-cover w-[22px]"
                  src="images/img_icon_1.png"
                  alt="icon_Two"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-base text-gray-900"
                    size="txtMontserratRomanRegular16"
                  >
                    When
                  </Text>
                  <Text
                    className="text-base text-gray-500"
                    size="txtMontserratRomanRegular16Gray500"
                  >
                    Select Date
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="flex h-10 items-center justify-center sm:ml-[0] ml-[82px] rounded-[50%] w-10"
              color="red_300"
              size="md"
              variant="fill"
            >
              <Img className="h-3.5" src="images/img_button.png" alt="button" />
            </Button>
          </div>
          <div className="h-[1970px] md:h-[2786px] sm:h-[5662px] mt-10 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {mainHotelPropList.map((props, index) => (
                    <React.Fragment key={`MainHotel${index}`}>
                      <MainHotel
                        className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[25px] items-center justify-start p-2.5 rounded-[12px] w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute flex flex-row gap-2.5 items-start justify-between right-[0] top-[1%] w-[16%]">
              <Text
                className="text-gray-900 text-lg"
                size="txtMontserratRomanRegular18"
              >
                Sort by
              </Text>
              <SelectBox
                className="text-left text-lg text-red-300 w-[61%] sm:w-full"
                placeholderClassName="text-red-300"
                indicator={
                  <Img
                    className="h-1.5 mr-[0] outline-red-300 outline-[0.5px] outline w-3"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="group200"
                options={relevanceOptionsList}
                isSearchable={false}
                placeholder="Relevance"
              />
            </div>
            <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-start justify-center p-6 sm:px-5 right-[0] shadow-bs2 top-[2%]">
              <Text
                className="text-blue_gray-900_01 text-lg"
                size="txtMontserratRomanRegular18Bluegray90001"
              >
                Newest
              </Text>
              <Text
                className="mt-[13px] text-blue_gray-900_01 text-lg"
                size="txtMontserratRomanRegular18Bluegray90001"
              >
                Rating
              </Text>
              <Text
                className="mt-2.5 text-blue_gray-900_01 text-lg"
                size="txtMontserratRomanRegular18Bluegray90001"
              >
                Discount
              </Text>
              <Text
                className="mt-[13px] text-blue_gray-900_01 text-lg"
                size="txtMontserratRomanRegular18Bluegray90001"
              >
                Low to High
              </Text>
              <Text
                className="mt-3 text-blue_gray-900_01 text-lg"
                size="txtMontserratRomanRegular18Bluegray90001"
              >
                High to Low
              </Text>
            </div>
            <div className="absolute flex flex-row sm:gap-10 items-center justify-between left-[0] top-[0] w-[82%]">
              <Button
                className="cursor-pointer font-semibold min-w-[168px] rounded-[10px] text-base text-center"
                color="red_300"
                size="lg"
                variant="outline"
              >
                Show on map
              </Button>
              <div className="flex flex-row gap-2 items-start justify-start">
                <Img
                  className="h-6 md:h-auto object-cover w-6"
                  src="images/img_icon_24x24.png"
                  alt="icon_Three"
                />
                <Text
                  className="text-lg text-red-300"
                  size="txtMontserratRomanRegular18Red300"
                >
                  Filter
                </Text>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-semibold min-w-[229px] mt-[60px] rounded-[10px] text-base text-center"
            color="red_300"
            size="lg"
            variant="fill"
          >
            View More
          </Button>
        </div>
        <Footer className="bg-gray-100_01 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default LastminutedealsPage;
