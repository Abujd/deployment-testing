import Image from "next/image";
import React from "react";
import TilesData from "../../constants/TilesData";

function LightFastPowerfulTiles() {
  return (
    <div className="relative overflow-hidden lg:mx-[120px] mx-[40px]">
      {TilesData.map((item, index) => (
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center" key={index}>
          <div className="md:py-[100px] py-[60px] order-last md:mt-0 mt-[40px]">
            <h2 className="text-[#091133] leading-[40px] font-medium">
              {item.heading}
            </h2>
            <div className="mt-[20px] mb-[30px]">
              <p className="text-[#505F98] text-[18px] leading-[30px]">
                {item.desc1}
              </p>
              <p className="text-[#505F98] text-[18px] leading-[30px]">
                {item.desc2}
              </p>
            </div>
            {item?.ctaCopy && (
            <button className="btn btn-primary mt-[20px] w-[100%] md:w-fit">{item?.ctaCopy}</button>
          )}
          </div>
          <div>
            <Image
              src={item.imageUrl}
              alt="Hero Image"
              width={480}
              height={315}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LightFastPowerfulTiles;
