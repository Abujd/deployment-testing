import Image from "next/image";
import React from "react";

function LightFastPowerfulTilesCard(props) {
  return (
    <div className="relative overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="md:py-[100px] py-[60px] order-last md:mt-0 mt-[40px]">
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
        </div>
         <div>
        <Image src="/girlHoldingEmail.png" alt="Hero Image" width={480} height={315} />
      </div>
      </div>
    </div>
  );
}

export default LightFastPowerfulTilesCard;
