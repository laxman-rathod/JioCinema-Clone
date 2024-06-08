import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterBig = () => {
  return (
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
  );
};

export default FooterBig;
