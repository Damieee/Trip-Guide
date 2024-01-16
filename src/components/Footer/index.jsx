import React, { useState } from "react";
import { Button, Img, Input, Line, Text } from "components";

const Footer = () => {
    const [email, setEmail] = useState("");
  
    const handleSubscribe = () => {
      console.log(`Email sent to ezekieloluwadamy@gmail.com: ${email}`);
    };
  return (
    <>
      {/* Footer section */}
      <footer className="bg-gray-100_01 flex items-center justify-center mt-[100px] md:px-5 w-full">
        <div className="flex flex-col items-center justify-center mb-4 mt-[59px] mx-auto w-[92%]">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[11%] md:w-full">
                <Text
                  className="text-base text-gray-900"
                  size="txtMontserratRomanSemiBold16"
                >
                  Contact Us
                </Text>
                <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                  {/* List items */}
                  <li>
                    <a href="/ezekieloluwadamy@gmail.com" className="text-gray-900 text-sm">
                      <Text size="txtMontserratRomanRegular14">
                      +234-0906-453-1233
                    </Text>
                    </a>
                  </li>
                  <li>
                    <a href="ezekieloluwadamy@gmail.com" className="text-gray-900 text-sm">
                      <Text size="txtMontserratRomanRegular14">
                        ezekieloluwadamy@gmail.com
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="/accord" className="text-gray-900 text-sm">
                      <Text size="txtMontserratRomanRegular14">
                        CobbleStone,
                        Accord Estate, Abeokuta,
                        Ogun State, Nigeria.  
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Footer column 2 */}
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[11%] md:w-full">
                <Text
                  className="text-base text-gray-900"
                  size="txtMontserratRomanSemiBold16"
                >
                  Services
                </Text>
                <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                  {/* List items */}
                  <li>
                    <a href="Hotel Reservation" className="text-gray-900 text-sm">
                      <Text size="txtMontserratRomanRegular14">
                        Hotel Reservation
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Hotel Recommendations" className="text-gray-900 text-sm">
                      <Text size="txtMontserratRomanRegular14">
                        Hotel Recommendations
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Hotel Booking" className="text-gray-900 text-sm">
                      <Text size="txtMontserratRomanRegular14">
                        Hotel Booking
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Footer column 3 */}
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[11%] md:w-full">
                <Text
                  className="text-base text-gray-900"
                  size="txtMontserratRomanSemiBold16"
                >
                  About
                </Text>
                <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                  {/* List items */}
                  <li>
                    <a href="About Us" className="text-gray-900 text-sm">
                      <Text size="txtMontserratRomanRegular14">
                        About Us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="About Me" className="text-gray-900 text-sm">
                      <Text size="txtMontserratRomanRegular14">
                        About Me
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="About Glidee H" className="text-gray-900 text-sm">
                      <Text size="txtMontserratRomanRegular14">
                        About Glidee H
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Footer column 4 */}
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[11%] md:w-full">
                <Text
                  className="text-base text-gray-900"
                  size="txtMontserratRomanSemiBold16"
                >
                  More
                </Text>
                <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                  {/* List items */}
                  <li>
                    <a href="Blogs" className="text-gray-900 text-sm">
                      <Text size="txtMontserratRomanRegular14">
                        Blogs
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Pages" className="text-gray-900 text-sm">
                      <Text size="txtMontserratRomanRegular14">
                        Pages
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Screen" className="text-gray-900 text-sm">
                      <Text size="txtMontserratRomanRegular14">
                        Screen
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
                <div className="flex items-center justify-start w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="mt-[19px] text-gray-900 text-sm bg-white-A700 border border-red-300 border-solid p-2.5 rounded-bl-[10px] rounded-tl-[10px] w-full"
                  />
                  <Button
                    className="mt-[19px] border border-red-300 border-solid flex h-11 items-center justify-center rounded-br-[10px] rounded-tr-[10px] ml-[-1px]"
                    color="red_300"
                    size="sm"
                    variant="fill"
                    onClick={handleSubscribe}
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
                    Glidee
                  </span>
                  <span className="text-red-300 font-montserrat text-left font-bold">
                    H
                  </span>
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
    </>
  );
};

Footer.defaultProps = {};

export default Footer;



