import React from "react";
import FacebookIcon from "../svgs/FacebookIcon";
import LinkedInIcon from "../svgs/LinkedInIcon";
import TwitterIcon from "../svgs/TwitterIcon";
import YoutubeIcon from "../svgs/YoutubeIcon";
import InstagramIcon from "../svgs/InstagramIcon";

function Footer(props) {
  return (
    <div className="relative overflow-hidden bg-[#E7ECFF] lg:px-[120px] px-[40px]">
      <div className="container">
        <div className="md:flex flex-wrap justify-between items-center py-[50px] lg:flex-row md:flex-col sm:flex-col">
          <p className="text-[#939EA4] order-1 lg:order-1">©2023 Yourcompany</p>
          <div className=" md:mt-0 mt-[20px] text-[#37447E] text-[26px] font-[900] leading-[38px] flex-grow-1 order-2 lg:order-2">
            Landing
          </div>
          <div className="order-3 lg:order-3 md:mt-0 mt-[20px]">
            <button className="btn btn-primary w-full">Purchase now</button>
          </div>
        </div>
        <div className="border-bottom mb-[40px]"></div>
      </div>

      <div className="flex flex-wrap justify-between items-center">
        <div className="flex gap-[40px] order-1 lg:order-1">
          <div className="text-[14px] text-[#929ECC]">Home</div>
          <div className="text-[14px] text-[#929ECC]">About</div>
          <div className="text-[14px] text-[#929ECC]">Contact</div>
        </div>
        <div className="flex md:gap-[20px] gap-[40px] py-[40px] order-2 lg:order-2 justify-between">
          <FacebookIcon />
          <LinkedInIcon />
          <TwitterIcon />
          <YoutubeIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
