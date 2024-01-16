import React, { useState } from "react";
import { Button, Text } from "components";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import notificationPopup from "components/notification";



// Signup component
const SignUp = () => {
  const BASE_URL = "https://glidee-api.onrender.com"
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signupErrors, setSignupErrors] = useState([])
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setSignupErrors([])
    try {
      const response = await axios.post(`${BASE_URL}/signup`, data);
      
      if (response.status === 201) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        alert("Registration successful! You can now login.");
        window.location.replace("/signin");
      } else {
        throw new Error("Registration failed"); 
      }
    
    } catch (error) {
    
      let messages = [];
    
      if (error.response) {
        // Request was made but server responded with something other than 2xx
        messages = error.response.data.errors || [error.response.data.message];
      } else {
        // Something else happened while setting up the request
        messages = [error.message];  
      }
    
      setSignupErrors(messages);
    
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {/* Main container with background gradient */}
      <div className="bg-gradient2 font-ruluko mx-auto p-[47px] md:px-10 sm:px-5 relative w-full h-screen m-0">

        {/* Main Content container */}
        <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-start justify-between m-auto max-w-[1083px] w-full bg-cover bg-center p-8"
        style={{ backgroundImage: `url('images/img_maldivesisland.png')` }}
        >

          {/* Left content container*/}
          <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
            {/* Navigation bar */}
            <div className="flex flex-row font-rosarivo items-start justify-between w-full">
              {/* Dot indicator */}
              <div className="border-[10px] border-solid h-[50px] indigo_A700_purple_A400_border rounded-[50%] shadow-bs3 w-[50px]"></div>
              {/* Navigation links */}
              <Text className="mt-[9px] text-black-900 text-xl" size="txtRosarivoRegular20">
                HOME
              </Text>
              <Text className="mt-[9px] text-black-900 text-xl" size="txtRosarivoRegular20">
                SERVICES
              </Text>
              {/* Login button */}
              <Button
                className="cursor-pointer leading-[normal] min-w-[120px] rounded-[20px] text-center text-xl"
                color="black_900"
                size="sm"
                variant="outline"
              >
                <Link to="/signin">LOG IN</Link>
              </Button>
            </div>
            {/* Title */}
            <Text className="mt-[84px] md:text-5xl text-[64px] text-gray-900_01" size="txtRuluko64">
              <>
                ENJOY YOUR
                <br />
                STAY IN
                <br />
                MALDIVES!
              </>
            </Text>
            {/* Call-to-action button */}
            <Button
              className="bg-light_blue-A400 h-[50px] justify-center mt-[95px] pb-2.5 pt-[13px] px-1 rounded-[20px] text-lg text-shadow-ts text-white-A700 w-[120px]"
              size="txtRosarivoRegular18"
            >
              <Link to="/">BOOK NOW</Link>
            </Button>
          </div>

          {/* Right content Container (Sign Up form) */}
          <div className="backdrop-opacity-[0.5] bg-teal-300_b2  flex md:flex-1 flex-col items-center justify-start p-[42px] md:px-10 sm:px-5 rounded-[20px] w-[43%] md:w-full">
            {/* Dot indicator */}
            <div className="border-[10px] border-solid h-[50px] indigo_A700_purple_A400_border2 rounded-[50%] shadow-bs3 w-[50px]"></div>
            {/* Sign Up text */}
            <Text className="mt-[37px] sm:text-2xl md:text-[26px] text-[28px] text-black-900" size="txtRuluko28">
              <>
                Don’t have an Account? <br /> Sign Up now!
              </>
            </Text>
            {/* Sign Up form */}
            <div className="flex flex-col items-center justify-start mb-[33px] mt-[18px] w-[81%] md:w-full">

            <form onSubmit={handleSubmit(onSubmit)} className="my-7 text-gray-600">
              {signupErrors.map((error, index) => (
                alert(error)
              ))}
              {/* Email input */}
              <input
                {...register("email", { required: true })}
                name="email"
                placeholder="Email Address"
                className="leading-[normal] text-black-900 md:text-[22px] p-2 placeholder:text-gray-900_02 sm:text-xl text-2xl text-left w-full rounded-[20px] h-[80px] bg-gradient-to-b from-[rgba(88,186,225,0.80)] to-[rgba(158,113,231,0.80)]"
                type="email"
                size="xs"
              />

              {/* First Name input */}
              <input
                {...register("first_name", { required: true })}
                name="first_name"
                placeholder="First Name"
                className="leading-[normal] text-black-900 md:text-[22px] p-2 placeholder:text-gray-900_02 sm:text-xl text-2xl text-left w-full mt-[15px] rounded-[20px] h-[80px] bg-gradient-to-b from-[rgba(88,186,225,0.80)] to-[rgba(158,113,231,0.80)]"
                type="text"
                size="xs"
              />

              {/* Last Name input */}
              <input
              {...register("last_name", { required: true })}
                name="last_name"
                placeholder="Last Name"
                className="leading-[normal] text-black-900 md:text-[22px] p-2 placeholder:text-gray-900_02 sm:text-xl text-2xl text-left w-full mt-[15px] rounded-[20px] h-[80px] bg-gradient-to-b from-[rgba(88,186,225,0.80)] to-[rgba(158,113,231,0.80)]"
                type="text"
                size="xs"
              />

              {/* Password input */}
              <input
                {...register("password", { required: true })}
                name="password"
                placeholder="Password"
                className="leading-[normal] text-black-900 md:text-[22px] p-2 placeholder:text-gray-900_02 sm:text-xl text-2xl text-left w-full mt-[15px] rounded-[20px] h-[80px] bg-gradient-to-b from-[rgba(88,186,225,0.80)] to-[rgba(158,113,231,0.80)]"
                type="password"
                size="xs"
              />
              {/*Confirm Password input */}
              <input
                {...register("password_confirm", { required: true })}
                name="password_confirm"
                placeholder="Confirm Password"
                className="leading-[normal] text-black-900 md:text-[22px] p-2 placeholder:text-gray-900_02 sm:text-xl text-2xl text-left w-full mt-[15px] rounded-[20px] h-[80px] bg-gradient-to-b from-[rgba(88,186,225,0.80)] to-[rgba(158,113,231,0.80)]"
                type="password"
                size="xs"
              />
              {errors.password_confirm && <span> {errors.password_confirm?.message}</span>}
              {/* Sign Up button */}
              <Button
                className="cursor-pointer leading-[normal] min-w-[150px] mt-[29px] rounded-[20px] text-2xl md:text-[22px] text-center sm:text-xl"
                size="lg"
                variant="gradient"
                color="teal_A100_teal_100"
                type="submit"
                disabled={loading}

              >
               {loading ? "Signing Up..." : "Sign Up"}
              </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

