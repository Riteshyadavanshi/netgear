import Image from "next/image";
import React from "react";

export const ServiceSection = () => {
  const services = [
    {
      title: "web Development",
      url: "/web-development.jpg",
      description:
        "Netgear Solutions is your personal web development company. We provide attractive, functional, animated and affordable Static and Dynamic website solutions. Our team of web professionals will work with you to create the exact vision or model of your business. Netgear Solutions can update and expand your current website, or build a brand new one to your exact specifications. We also Expertise in domain name registration, web space, web hosting and other web technologies with a very reputed server.",
    },
    {
      title: "Web Design",
      url: "/website-design.jpg",
      description:
        "At Netgear Solutions, we ensure that we provide the best of facilities for Customer's Satisfaction by making a unique, attractive and sleek web design so, that it gives the customer just the kind of look he desires. We never use a pre-designed template for your website. All design layouts are developed from ground up, meeting the exacting standards you demand. We can help with design, development, and maintenance of the website application.",
    },
    {
      title: "Mobile App",
      url: "/mobile-app.jpg",
      description:"Churning out thousands of app codes has gained us an expertise over it. Being one of the top app development companies, we blend our knowledge and skill to deliver world class mobile application development services. Our arsenal of chilled-out mobile app developers excels with confidence to churn out some of the coolest mobile apps.  "  },

  ];
  return (
    <section className="py-10 bg-gray-200" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
                services.map(service=><Card {...service} key={service.title}/>)
            }
            </div>

      </div>
    </section>
  );
};

interface CardProps {
  title: string;
  description: string;
  url: string;
}
const Card = ({ title, description, url }: CardProps) => {
  return (
    
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image
          src={url}
          alt={title}
          className="w-full h-64 object-cover"
          width={100}
          height={100}
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    
  );
};
