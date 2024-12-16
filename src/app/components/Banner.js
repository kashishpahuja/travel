import React from "react";
import { FaPlane, FaArrowRight, FaVideo } from "react-icons/fa";

function Banner() {
  return (
    <div className="w-full h-auto bg-[#8ab2da] text-gray-800">
      <div className="text-center py-10 px-4 md:py-14">
        {/* Heading Section */}
        <h3 className="text-md md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-5">
          Jet-Set with Confidence!
        </h3>
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          Find Your Ideal Travel Companion.
        </h3>

        {/* Options Section */}
        <div className="my-6 lg:my-8">
          <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <li className=" text-sm md:text-lg lg:text-xl font-semibold text-gray-800 flex items-center">
              <input type="radio" className="mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
              <label>Tickets booked</label>
            </li>
            <li className=" text-sm md:text-lg lg:text-xl font-semibold text-gray-800 flex items-center">
              <input type="radio" className="mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
              <label>Yet to book</label>
            </li>
          </ul>

          {/* Flight Search Section */}
          <div className="flex justify-center mt-6 mx-auto px-4  md:px-0 overflow-hidden">
            <div className="relative flex  w-[full] lg:w-[800px] p-3 bg-white items-center border-2 border-blue-500 rounded-full px-4 shadow-md">
              {/* Plane Icon */}
              <div className="flex justify-center items-center rounded-full border-2 border-blue-500 p-3 mr-4">
                <FaPlane className="text-blue-500 text-sm md:text-2xl" />
              </div>

              {/* Input Field */}
              <input
                type="text"
                className="flex-grow text-lg md:text-[22px] placeholder:text-base md:placeholder:text-[20px] placeholder:text-gray-500 placeholder:font-medium outline-none"
                placeholder="Enter Flight Number"
                minLength="3"
                maxLength="6"
              />

              {/* Arrow Icon */}
              <div className="flex justify-center items-center text-white bg-blue-500 hover:bg-blue-600 w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full cursor-pointer">
                <FaArrowRight className="text-xl md:text-2xl" />
              </div>
            </div>
          </div>

          {/* Frequently Booked Flights Section */}
          <div className="pt-12 pb-6 px-6 md:px-8 w-full max-w-[560px] mx-auto relative rounded-xl my-10 border-2 border-gray-50">
            <h2 className="text-white absolute left-1/2 transform -translate-x-1/2 -top-6 p-2 md:p-3 rounded-xl bg-[#4A51F8] text-base md:text-lg font-medium mb-4">
              Frequently Booked Flights
            </h2>
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-3">
              {[
                {
                  code: "AI127",
                  logo: "https://storage.googleapis.com/mmf-fe-assets/airlines/AI.png",
                },
                {
                  code: "AI126",
                  logo: "https://storage.googleapis.com/mmf-fe-assets/airlines/AI.png",
                },
                {
                  code: "QR730",
                  logo: "https://storage.googleapis.com/mmf-fe-assets/airlines/QR.png",
                },
                {
                  code: "EK221",
                  logo: "https://storage.googleapis.com/mmf-fe-assets/airlines/EK.png",
                },
                {
                  code: "EK529",
                  logo: "https://storage.googleapis.com/mmf-fe-assets/airlines/EK.png",
                },
              ].map((flight, index) => (
                <div
                  key={index}
                  className="flex hover:cursor-pointer justify-center gap-1 p-2 rounded-xl bg-white items-center"
                >
                  <img
                    src={flight.logo}
                    alt="Not available"
                    className="h-4 w-4 rounded-full"
                  />
                  <span className="text-gray-500 text-sm md:text-base font-medium">
                    {flight.code}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Search Flight by Airport/City */}
          <div className="w-fit font-semibold text-base md:text-xl mx-auto underline mt-5 hover:cursor-pointer">
            Search Flight by Airport/City
          </div>
        </div>
      </div>
      <div className="pb-12 flex mx-4 justify-between items-center">
        <div className="p-3 bg-white text-blue-500 rounded-xl text-md lg:text-xl font-bold ">
          Most trusted platform by Indian community.
        </div>
        <div className="flex items-center gap-2 text-md lg:text-xl font-bold">
          <FaVideo /> How it Works?
        </div>
      </div>
    </div>
  );
}

export default Banner;
