
 
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutUs } from '@/components/AboutUs';
import { WhyUs } from '@/components/WhyUs';
import { ServiceSection } from '@/components/Service-Section';
import { Contact } from '@/components/Contact';



export default async function Home() {
 
   

  return (

   < > <Navbar/>
     <HeroSection/>
     <AboutUs/>
     <WhyUs/>
     <ServiceSection/>
     <Contact/>
     </>
    
  );
}

// function processSheetData(rawData) {
//   // Implement your Google Sheets data transformation logic here
//   return {
//     hero: { title: 'Tech Solutions Inc', subtitle: 'Transform Your Digital Future' },
//     about: { title: 'About Us', items: [...] },
//     services: { title: 'Our Services', items: [...] },
//     whyus: { title: 'Why Choose Us?', items: [...] },
//     howitworks: { title: 'How It Works', items: [...] },
//     contact: { info: 'Get in touch!', details: [...] }
//   };
// }
