"use client";
import { useState } from 'react';
import styles from './page.module.css'
import TopBar from './TopBar';
import HeroSection from './HeroSection';
import GainLoss from './GainLoss';
import NewsSection from './NewsSection';
import WhyUs from './WhyUs';
import FooterSection from './FooterSection'
import { ChakraProvider } from '@chakra-ui/react';
import Faq from './Faq';

export default function Home() {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <ChakraProvider>
    <div className={styles.container}>
      <TopBar search={search} onSearchChange={handleSearch} />
      <HeroSection  search={search} onSearchChange={handleSearch}/>
      <GainLoss />
      <NewsSection />
      <WhyUs />
      <Faq />

      <footer>
        <FooterSection />
        
      </footer>
    </div>
    </ChakraProvider>
  );
}