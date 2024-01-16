import React, { useState } from "react";
import { Button, Text } from "components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import notificationPopup from "components/notification";

// SignIn component
const SignIn = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [loginErrors, setLoginErrors] = useState([]);
  const BASE_URL = "https://glidee-api.onrender.com";

  
    // Function to handle form submission
    const onSubmit = async (data) => {
      setLoading(true);
      // Clear previous login errors
      setLoginErrors([]);
      
  
      // Making a POST request to the backend login endpoint

      try {
        const response = await axios.post(`${BASE_URL}/login`, data);
  
        if (response.data?.data) {
          localStorage.setItem("user", JSON.stringify(response.data.data));
          alert("Login successful! Redirecting to dashboard.");
          window.location.replace("/bookingstepone");
        } else {
          setLoginErrors(["Login failed. Please try again."]);
        }
      } catch (err) {
        setLoginErrors(err.response?.data?.errors || [err.response?.data?.message] || ['An error occurred']);
      } finally {
        setLoading(false);
      }
    };
    
    

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
              <button
                className="cursor-pointer leading-[normal] min-w-[120px] rounded-[20px] text-center text-xl"
                color="black_900"
                size="sm"
                variant="outline"
              >
              <Link to="/signup">
               Sign Up
              </Link>
              </button>
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
            <button
              className="bg-light_blue-A400 h-[50px] justify-center mt-[95px] pb-2.5 pt-[13px] px-1 rounded-[20px] text-lg text-shadow-ts text-white-A700 w-[120px]"
              size="txtRosarivoRegular18"
            >
              <Link to="/">BOOK NOW</Link>
            </button>
          </div>

          {/* Right content Container (Sign In form) */}
          <div className="backdrop-opacity-[0.5] bg-teal-300_b2  flex md:flex-1 flex-col items-center justify-start p-[42px] md:px-10 sm:px-5 rounded-[20px] w-[43%] md:w-full">
            {/* Dot indicator */}
            <div className="border-[10px] border-solid h-[50px] indigo_A700_purple_A400_border2 rounded-[50%] shadow-bs3 w-[50px]"></div>
            {/* Sign Up text */}
            <Text className="mt-[37px] sm:text-2xl md:text-[26px] text-[28px] text-black-900" size="txtRuluko28">
              <>
              Have an Account? <br /> Sign In now!
              </>
            </Text>
            {/* Sign Up form */}
            <div className="flex flex-col items-center justify-start mb-[33px] mt-[18px] w-[81%] md:w-full">

              {/* Form for user login */}
              <form onSubmit={handleSubmit(onSubmit)}>
                
                 {/* Display login errors as popups */}
                {loginErrors.map((error, index) => (
                <notificationPopup key={index} message={error}/>
                  ))}


                {/* Email input */}
                <input
                
                  placeholder="Email Address"
                  className="leading-[normal]  md:text-[22px] p-2 placeholder:text-gray-900_02 sm:text-xl text-2xl text-left w-full rounded-[20px] h-[80px] bg-gradient-to-b from-[rgba(88,186,225,0.80)] to-[rgba(158,113,231,0.80)]"
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  size="xs"
                />
                {errors.email && <span> {errors.email?.message}</span>}

                {/* Password input */}
                <input
                
                  placeholder="Password"
                  className="leading-[normal] md:text-[22px] p-2 placeholder:text-gray-900_02 sm:text-xl text-2xl text-left w-full mt-[37px] rounded-[20px] h-[80px] bg-gradient-to-b from-[rgba(88,186,225,0.80)] to-[rgba(158,113,231,0.80)]"
                  type="password"
                  size="xs"
                  name="password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span> {errors.password?.message}</span>}

                
                {/* Sign In button */}
                <Button
                  className="cursor-pointer leading-[normal] min-w-[150px] mt-[29px] rounded-[20px] text-2xl md:text-[22px] text-center sm:text-xl"
                  size="lg"
                  variant="gradient"
                  color="teal_A100_teal_100"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log In"}
                </Button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;