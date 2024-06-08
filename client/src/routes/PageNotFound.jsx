import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="px-12 py-3 flex justify-between items-center border-b border-lightish text-white">
        <div className="flex place-items-center gap-8 font-poppins">
          <div className="flex place-items-center gap-2 cursor-pointer">
            <Link to={"/"}>
              <img
                src="/assets/jc_logo.svg"
                className="size-30"
                alt="JioCinema logo"
              />
            </Link>
            <div className="flex place-items-center gap-1 py-[0.3rem] px-[0.7rem] text-[.770rem] font-[900] text-goldenC border-2 border-goldenC rounded-full">
              <img src="/assets/crown.svg" alt="crown svg" />
              Go Premium
            </div>
          </div>
          <div className="flex place-items-center gap-6 text-sm font-[900] no-underline cursor-pointer">
            <Link
              to={"/"}
              className="text-gray transition ease-in-out duration-150 hover:text-white"
            >
              Home
            </Link>
            <Link
              to={"/sports"}
              className="text-gray transition ease-in-out duration-150 hover:text-white"
            >
              Sports
            </Link>
            <Link
              to={"/movies"}
              className="text-gray transition ease-in-out duration-150 hover:text-white"
            >
              Movies
            </Link>

            <Link
              to={"/tv-shows"}
              className="text-gray transition ease-in-out duration-150 hover:text-white"
            >
              TV Shows
            </Link>
            <Link
              to={"/"} // change to be latter
              className="flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white"
            >
              More
              <FaAngleDown className="down-arrow transition ease-in-out delay-75 duration-300" />
            </Link>
          </div>
        </div>

        <div className="flex place-items-center gap-6">
          <div className="flex place-items-center px-3 py-[.17rem] bg-gray2 rounded-full cursor-pointer">
            <div className="p-2 rounded-full hover:bg-gray3 transition ease-in-out duration-150">
              <IoSearchSharp size={19} />
            </div>
            <div className="flex place-items-center">
              <input
                type="text"
                placeholder="Movies, Shows and more"
                className="ml-2 mr-4 bg-transparent font-poppins text-white text-sm outline-none placeholder:text-searchText placeholder:font-extrabold placeholder:text-sm"
              />
            </div>
            <div className="p-2 rounded-full hover:bg-gray3 transition ease-in-out duration-150">
              <FaMicrophone size={18} />
            </div>
          </div>

          <div className="size-10">
            <img src="/assets/avatar_guest.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="pt-12 flex flex-col items-center font-poppins w-full h-screen">
        <img
          className=" size-56"
          src="/assets/404_sad_svg.svg"
          alt="404 sad svg"
        />
        <h1 className="text-white text-2xl leading-6 font-extrabold">
          Page not found
        </h1>
        <h4 className="mt-3 leading-5 font-extrabold text-sm text-lightGray">
          There may be a typing mistake in the address Or the page may
        </h4>
        <h4 className="text-center font-extrabold text-sm text-lightGray">
          have been moved
        </h4>
        <Link
          to={"/"}
          className="underline mt-10 leading-4 font-extrabold text-white2 hover:text-pink"
        >
          Go To Home
        </Link>
      </div>
      <div className="px-6 pt-10 pb-2 border-b border-[#474a4b] font-poppins flex items-center justify-between bg-footerBG1">
        <div className="grid grid-cols-2 text-gainsboro text-sm font-extrabold">
          <div>
            <h3 className="text-white text-base mb-4">JioCinema</h3>
            <h4 className="mb-3 cursor-pointer">For You</h4>
            <h4 className="mb-3 cursor-pointer">Sports</h4>
            <h4 className="mb-3 cursor-pointer">Movies</h4>
            <h4 className="mb-3 cursor-pointer">TV Shows</h4>
          </div>
          <div>
            <h3 className="text-white text-base mb-4">Support</h3>
            <h4 className="mb-3 cursor-pointer">Help Center</h4>
            <h4 className="mb-3 cursor-pointer">Terms of Use</h4>
            <h4 className="mb-3 cursor-pointer">Privacy Policy</h4>
            <h4 className="mb-3 cursor-pointer">Content Complaints</h4>
          </div>
        </div>

        <div className="flex items-center gap-10 ">
          <div className="font-extrabold text-white text-2xl">
            <h3>Connect With Us</h3>
            <div className="flex items-center justify-start gap-2 mt-4">
              <div className="bg-suggestionsBg p-3 rounded-full cursor-pointer">
                <FaFacebookSquare />
              </div>
              <div className="bg-suggestionsBg p-3 rounded-full cursor-pointer">
                <FaXTwitter />
              </div>
              <div className="bg-suggestionsBg p-3 rounded-full cursor-pointer">
                <AiFillInstagram />
              </div>
              <div className="bg-suggestionsBg p-3 rounded-full cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="font-extrabold text-white text-2xl">
            <h3>Download the App</h3>
            <div className="flex items-center justify-start gap-3 mt-4">
              <Link
                to={
                  "https://play.google.com/store/apps/details?id=com.jio.media.ondemand&hl=en_IN&gl=US&pli=1"
                }
              >
                <img
                  src="/assets/googlePlay_market_button.svg"
                  alt="googlePlay_market_button"
                />
              </Link>

              <Link
                to={
                  "https://apps.apple.com/in/app/jiocinema-shows-movies-more/id1067316596"
                }
              >
                <img
                  src="/assets/appleStore_market_button.svg"
                  alt="appleStore_market_button"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-3 px-4 bg-footerBg2">
        <div className="font-medium text-xs text-white font-poppins cursor-pointer">
          Copyright © 2024 Viacom18 Media PVT LTD. All rights reserved.
        </div>
        <div className="size-12">
          <img
            src="https://rilstaticasset.akamaized.net/sites/default/files/2024-03/PNG_Download_Jio-Logo-Colour-Pink.png"
            alt="Jio Reliance logo"
          />
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
