import React from "react";
import "./styleButtons.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

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

      <div className="flex items-center gap-10 relative -top-7">
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
            <a
              href="https://www.jiocinema.com/"
              target="_blank"
              className="market-btn google-btn"
              role="button"
            >
              <span className="market-button-subtitle">Download on the</span>
              <span className="market-button-title">Google Play</span>
            </a>
            <a
              href="https://www.jiocinema.com/"
              target="_blank"
              className="market-btn apple-btn"
              role="button"
            >
              <span className="market-button-subtitle">Download on the</span>
              <span className="market-button-title">App Store</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBig;
