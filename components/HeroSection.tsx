import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[320px] overflow-hidden" id="home">
      <div className="absolute inset-0  ">
      <video 
        className="  w-full  float-right" 
        playsInline 
        muted 
        autoPlay 
        loop
      >
        <source src="https://downloads1.netgear.com/files/netgear/videos/full_asset_orbi970_desktop_20250105.mp4" type="video/mp4" />
      </video>
      </div>
      <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between text-white">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className=" font-medium text-4xl md:text-5xl leading-tight mb-2">
            Netgear Company
          </h1>
          <p className="font-normal text-xl mb-8 mt-4">
            {" "}
            NETGEAR SOLUTIONS started as a IT & Web based entrepreneur company in 2003. 
          </p>
          <a
            href="#contactUs"
            className="px-6 py-3 bg-[#c8a876] text-white   font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};
