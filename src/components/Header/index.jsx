import React from "react";
import { Link } from "react-router-dom";

import { Img, Line, Button, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="md:mt-0 mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-blue-600"
          size="txtMontserratRomanBold32"
        >
          <span className="text-blue-600 font-montserrat text-left font-bold">
            Glidee
          </span>
          <span className="text-red-300 font-montserrat text-left font-bold">
            H
          </span>
        </Text>
        <ul className="flex sm:flex-col flex-row gap-10 sm:hidden items-center justify-start ml-10 md:ml-[0] md:mt-0 my-2 w-auto sm:w-full common-row-list">
          <li>
            <Text
              className="text-base text-gray-900"
              size="txtMontserratRomanMedium16"
            >
              Last Minute Deals
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-gray-900"
              size="txtMontserratRomanMedium16"
            >
              Blog
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-gray-900"
              size="txtMontserratRomanMedium16"
            >
              About us
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-gray-900"
              size="txtMontserratRomanMedium16"
            >
              Contacts
            </Text>
          </li>
        </ul>
        
        <Img
          className="h-8 md:h-auto md:ml-[0] ml-[30px] md:mt-0 my-1 object-cover w-8"
          src="images/img_icon.png"
          alt="icon"
        />
         <div className="flex items-center">

          {/* Sign In Button */}
          <Link
            smooth={true}
            duration={500}
            to="/signin"
            className="btn w-1/2 font-bold text-base text-gray-900 mx-[10px]"
          >
            Sign In
          </Link>

          {/* Sign Up Button */}
          <Link
            smooth={true}
            duration={500}
            to="/signup"
            className="btn w-1/2 font-bold text-base text-gray-900 mx-[10px]"
          >
            Sign Up
          </Link>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
