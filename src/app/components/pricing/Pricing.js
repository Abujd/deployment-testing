import React from "react";

function Pricing() {
  return (
    <div className="relative overflow-hidden py-[100px] lg:px-[120px] px-[40px] background-container w">
      <div className="container flex items-center justify-center mx-auto w-full">
        <div className="text-center max-w-[600px]">
          <h2 className="text-[#091133] leading-[48px] font-medium">
            A Price To Suit Everyone
          </h2>
          <p className="text-[#6F7CB2] leading-[26px] mt-[10px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
          <div className="pt-[20px] pb-[40px]">
            <h1 className="text-[#222F65]">$40</h1>
            <p className="text-[#37447E] pt-[5px]">UI Design Kit</p>
          </div>
          <div>
            <p className="text-[#5D6970]">See, One price. Simple.</p>
            <button class="btn btn-primary w-[100%] md:w-fit mt-[5px]">
              Purchase UI Kit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
