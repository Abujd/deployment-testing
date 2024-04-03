import React from "react";
import LightFastPowerfulCard from "../components/lightFastPowerful/LightFastPowerfulCard";
import Image from "next/image";

function LearnMore(props) {
  return (
    <div className="overflow-hidden lg:px-[120px] px-[40px]">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="py-[60px] lg:order-first order-last md:mt-0 mt-[40px] z-[2]">
          <h1 className="text-[#091133] leading-[66px] font-medium md:block hidden">
            Design & Build Your Own <br /> Landing Pages
          </h1>
          <h2 className="text-[#091133] leading-[40px] font-medium md:hidden block ">
            Design & Build Your Own Landing Pages
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
          <div className="flex flex-col md:flex-row items-center gap-[60px] md:gap-[30px] mt-[40px] md:mt-[60px]">
            {[...Array(2)].map((_, index) => (
              <LightFastPowerfulCard key={index} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-[60px] md:gap-[30px] mt-[40px] md:mt-[60px]">
            {[...Array(2)].map((_, index) => (
              <LightFastPowerfulCard key={index} />
            ))}
          </div>
        </div>
        <div className="w-[500px] h-[600px] absolute top-[10%] right-[10%] lg:block hidden">
          <Image
            src="/verticleMobile.png"
            alt="Hero Image"
            width={500}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
