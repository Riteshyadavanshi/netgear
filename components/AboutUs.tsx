import Image from "next/image";
import React from "react";

export const AboutUs = () => {
  return (
    <section className="bg-gray-100  " id="aboutus">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Netgear Solutions is a pioneer IT Solution company based in Raipur
              Chhattisgarh, India which helps clients to grow their businesses
              through online platform by providing cost-effective web and mobile
              solutions. We started out 15 years ago as a small team and today
              known as reputed Website Design and Development Company in Raipur
              Chhattisgarh with our unique strategy, planning, user interface
              design, front-end & back-end web development and custom apps. We
              are the first ISO 9001 : 2015 Certified IT Company in Chhattisgarh
              which has fulfilled all the norns of Quality Management System
              (QMS).
            </p>
          </div>
          <div className="mt-12 md:mt-0">
            <Image
              width={700}
              height={700}
              src="/about-us.jpg"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
