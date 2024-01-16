import React, { useState, useEffect } from 'react';
import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import Footer from 'components/Footer';
import MainAdvantages from "components/MainAdvantages";
import MainHotel from "components/MainHotel";
import MainPost from "components/MainPost";
import MainReview from "components/MainReview";
import { faker } from '@faker-js/faker';


// MainPage component
const MainPage = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [hotels, setHotels] = useState([]);


  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('test.api.amadeus.com');
        const data = await response.json();
        setHotels(data);
      } catch (err) {
        console.log(err);
      }
    }
    
    fetchHotels();
  }, []);

  // Function to filter hotels based on the selected destination
  const filterHotels = () => {
    const filtered = mainHotelPropList.filter((hotel) => {
      const countryMatches = destination ? destination.toLowerCase().includes(hotel.country.toLowerCase()) : true;     
      return countryMatches;
    });
    setFilteredHotels(filtered);
  };


  

  // Array of properties for MainAdvantages component
  const mainAdvantagesPropList = [
    {},
    {
      paymentmethodstext: "Simple search process",
      iconadvantages: "images/img_iconadvantages_50x50.png",
      descriptiontext: (
        <>
          We checked it out, even the kid did it, but it was my mom's
          friend's son
        </>
      ),
    },
  ];

  const getRandomImage = () => {
    const imageNumber = Math.floor(Math.random() * 8) + 1;
    return `images/img_rectangle9_${imageNumber}.png`;
  };

  const generateHotelData = () => {
    const countries = ['NIGERIA', 'LONDON'];
    const hotelData = [];
  
    for (let i = 0; i < 20; i++) {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      const randomImage = getRandomImage();
  
      const hotel = {
        image: randomImage,
        rating: (Math.random() * (5 - 3) + 3).toFixed(1),
        country: randomCountry,
        hotelLocation: faker.company.name(),
        type: 'Standard Room',
        date: '8 October — 1 December',
        price: `$${(Math.random() * (1000 - 200) + 200).toFixed(2)}`,
        frequency: '/3 nights',
        bedscounter: '2 Beds',
        sleepscounter: '4 Sleeps',
        landscape: '2,000 Sq Ft',
      };
  
      hotelData.push(hotel);
    }
  
    return hotelData;
  };

  // Array of properties for MainHotel component
  const mainHotelPropList = generateHotelData();

  // Array of properties for MainReview component
  const mainReviewPropList = [
    {
      jannikeborgpublOne: (
        <Text className="text-gray-900 text-sm w-full">
          {/* ... (content) */}
        </Text>
      ),
    },
  ];

  // Array of properties for MainPost component
  const mainPostPropList = [
    {},
    {
      date: "May 22, 2022",
      triptitle: "Vilnius resorts",
      userimage: "images/img_rectangle17_250x370.png",
      tripdescription: (
        <>
          I haven't seen any resorts in Vilnius, but there are wonderful
          people and pubs
        </>
      ),
      duration: "1 minute",
    },
    // ... (similar objects)
  ];

  return (
    <>
      {/* Main container with white background */}
      <div className="bg-white-A700 flex flex-col font-montserrat sm:gap-10 md:gap-10 gap-[100px] items-center justify-end mx-auto pt-[17px] w-full">

        {/* Header section */}
        <div className="flex flex-col gap-[15px] items-center justify-start max-w-[1170px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />

          {/* Search section */}
          <div className="flex flex-col relative w-full">
            <div className="h-[500px] mx-auto w-full">
              {/* Image */}
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_rectangle5.png"
                alt="rectangleFive"
              />

              {/* Text content */}
              <div className="absolute flex flex-col gap-5 items-center justify-start left-[6%] top-[14%]">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-full"
                  size="txtMontserratRomanBold48"
                >
                  Find an apartment for your vacation
                </Text>
                <Text
                  className="leading-[30.00px] text-gray-900 text-xl w-[98%] sm:w-full"
                  size="txtMontserratRomanMedium20"
                >
                  <>
                    We have several thousand apartments <br />
                    for every taste in every corner of the globe
                  </>
                </Text>
              </div>
            </div>
            
            {/* Search form Section*/}
            <div className="bg-white-A700 border border-blue_gray-100 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-end mt-[-35px] mx-auto p-3.5 rounded-[35px] shadow-bs1 w-[49%] z-[1]">
              {/* Location search */}
              <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                {/* Location icon */}
                <Img
                  className="h-[22px] md:h-auto object-cover w-[22px]"
                  src="images/img_icon_22x22.png"
                  alt="icon_One"
                />
                
               <div className="md:h-[19px] h-[39px] relative w-[83%]">
                  {/* Search Destination input field */}
                  <input
                    className="absolute bottom-[0] inset-x-[0] mx-auto text-base w-max border-none outline-none"
                    type="text"
                    value={destination}
                    placeholder="Search Destination"
                    onChange={(e) => setDestination(e.target.value)}
                    onFocus={() => setDestination('')}
                    onBlur={() => {
                      if (!destination) {
                        setDestination('Search Destination');
                      }
                    }}
                  />
                </div>
              </div>
              {/* Divider line */}
              <Line className="bg-gray-200 sm:h-0.5 h-10 ml-20 sm:ml-[0] w-0.5 sm:w-full"

 />
              {/* Date selection */}
              <div className="flex flex-row gap-2.5 items-center justify-center sm:ml-[0] ml-[18px] w-[23%] sm:w-full">
                {/* Calendar icon */}
                <Img
                  className="h-[22px] md:h-auto object-cover w-[22px]"
                  src="images/img_icon_1.png"
                  alt="icon_Two"
                />
                <div className="md:h-[19px] h-[39px] relative w-3/4">                  
                  {/* Select Date placeholder */}
                  <input
                    className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-gray-500 w-max border-none outline-none"
                    type="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onFocus={() => setDate('')}
                    onBlur={() => {
                      if (!date) {
                        setDestination('Check in Date');
                      }
                    }}/>
                </div>
              </div>
              
              {/* Search button */}
              <Button
                className="flex h-10 items-center justify-center sm:ml-[0] ml-[80px] rounded-[50%] w-10"
                color="red_300"
                size="md"
                variant="fill"
                onClick={filterHotels}  
              >
                <Img
                  className="h-3.5"
                  src="images/img_button.png"
                  alt="button"
                />
              </Button>
            </div>
          </div>
        </div>


        {/* Available Hotels  section */}
        <div className="flex flex-col items-center justify-start max-w-[1170px] mt-[102px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[57px] items-center justify-start w-full">

            {/* Section title */}
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtMontserratRomanSemiBold40"
            >
              Available Hotels
            </Text>
            {/* List of hotels */}
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              {filteredHotels.length > 0
              ? filteredHotels.map((props, index) => (
                  <React.Fragment key={`MainHotel${index}`}>
                    {/* MainHotel component */}
                    <MainHotel
                      className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[25px] items-center justify-start p-2.5 rounded-[12px] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))
              : mainHotelPropList.map((props, index) => (
                  <React.Fragment key={`MainHotel${index}`}>
                    {/* MainHotel component */}
                    <MainHotel
                      className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[25px] items-center justify-start p-2.5 rounded-[12px] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
            </List>
          </div>
        </div>

        {/* Why Choose Us section */}
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-100 flex flex-col items-center justify-start p-[55px] md:px-10 sm:px-5 w-full">

            {/* Section title */}
            <Text
              className="mt-[18px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtMontserratRomanSemiBold40"
            >
              Why Choose Us
            </Text>
            {/* Section description */}
            <Text
              className="leading-[28.00px] mt-[22px] text-blue_gray-900 text-center text-xl w-[49%] sm:w-full"
              size="txtMontserratRomanRegular20"
            >
              <>
                The main reason is because our competitors have disgusting
                sites, but we can't write that here, <br />
                so the text here will be different
              </>
            </Text>
            {/* List of advantages */}
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1170px] mb-[15px] mt-[54px] mx-auto w-full"
              orientation="horizontal"
            >
              {mainAdvantagesPropList.map((props, index) => (
                <React.Fragment key={`MainAdvantages${index}`}>
                  {/* MainAdvantages component */}
                  <MainAdvantages
                    className="flex flex-col gap-5 items-center justify-start w-[270px]"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
        </div>

        {/* Reviews section */}
        <div className="flex flex-col items-center justify-start max-w-[1170px] mt-[131px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            {/* Section title */}
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtMontserratRomanSemiBold40"
            >
              Reviews
            </Text>
            {/* Review navigation and list */}
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[60px] w-full">
              {/* Left navigation button */}
              <Button
                className="flex h-[50px] items-center justify-center mb-32 md:mt-0 mt-[125px] rounded-[10px] w-[50px]"
                color="gray_300"
                size="lg"
                variant="fill"
              >
                <Img src="images/img_arrowleft.svg" alt="arrowleft" />
              </Button>

              {/* List of reviews */}
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3"
                orientation="horizontal"
              >
                {mainReviewPropList.map((props, index) => (
                  <React.Fragment key={`MainReview${index}`}>
                    {/* MainReview component */}
                    <MainReview
                      className="flex flex-col gap-5 items-center justify-start sm:ml-[0] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
              {/* Right navigation button */}
              <Button
                className="flex h-[50px] items-center justify-center mb-32 md:mt-0 mt-[125px] rotate-[180deg] rounded-[10px] w-[50px]"
                color="red_300"
                size="lg"
                variant="fill"
              >
                <Img
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrowleft_One"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Posts section */}
        <div className="flex flex-col items-center justify-start max-w-[1170px] mt-[104px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[55px] items-center justify-start w-full">
            {/* Section title */}
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtMontserratRomanSemiBold40"
            >
              Recent posts
            </Text>
            {/* List of recent posts */}
            <List
              className="sm:flex-col flex-row gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              {mainPostPropList.map((props, index) => (
                <React.Fragment key={`MainPost${index}`}>
                  {/* MainPost component */}
                  <MainPost
                    className="flex flex-1 flex-col items-center justify-start w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
        </div>
        <Footer/>
              </div>
    </>
  );
};

export default MainPage;

