import React from "react";
import LightFastPowerfulCard from "./LightFastPowerfulCard";
import Image from "next/image";

function LightFastPowerful(props) {
  return (
    <div className="relative overflow-hidden lg:mx-[120px] mx-[40px]">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="md:py-[100px] py-[60px] lg:order-first order-last md:mt-0 mt-[40px]">
          <h2 className="text-[#091133] leading-[40px] font-medium">
            Light, Fast & Powerful
          </h2>
          <div className="mt-[20px] mb-[30px]">
            <p className="text-[#505F98] text-[18px] leading-[30px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="text-[#505F98] text-[18px] leading-[30px]">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div class="flex flex-col md:flex-row items-center gap-[60px] md:gap-[30px] mt-[40px] md:mt-[60px]">
            <LightFastPowerfulCard />
            <LightFastPowerfulCard />
          </div>
        </div>
        <div className="md:ml-[100px] ml-0">
        <Image src="/girlWithMobileLogin.png" alt="Hero Image" width={540} height={524} />
      </div>
      </div>
    </div>
  );
}

export default LightFastPowerful;
