
import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutUs } from '@/components/AboutUs';
import { WhyUs } from '@/components/WhyUs';
import { ServiceSection } from '@/components/Service-Section';
import { Contact } from '@/components/Contact';

async function getData() {
  const sheetId = '1nWbNT4fpJ-gSUQ3awi-C9YbnVld9aRpKJPploPqF6Xo';
  const res = await fetch(
    `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`
    
  );
  
  if (!res.ok) throw new Error('Failed to fetch data');
  
  const rawText = await res.text();
  const jsonString = rawText.match(/google\.visualization\.Query\.setResponse\(([\s\S]+?)\);/)?.[1];
  return jsonString ? JSON.parse(jsonString) : null;
}

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
