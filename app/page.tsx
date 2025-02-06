 import { HeroSection } from '@/components/HeroSection';
import { AboutUs } from '@/components/AboutUs';
import { WhyUs } from '@/components/WhyUs';
import { ServiceSection } from '@/components/Service-Section';
import { Contact } from '@/components/Contact';
import Navbar from '@/components/Navbar';


export default async function Home() {
 
 
  return (
    <>
      <Navbar />
      <HeroSection  />
      <AboutUs   />
      <WhyUs   />
      <ServiceSection  />
      <Contact  />
    </>
  );
}

 