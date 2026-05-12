import React from 'react'
import HeroSection from '../components/HomePage/HeroSection'
import Section1 from '../components/HomePage/Section1'
import Section2 from '../components/HomePage/Section2'
import Section3 from '../components/HomePage/Section3'
import Header from '../components/Layout/UserLayout/Header'
import Footer from '../components/Layout/UserLayout/Footer'
export default function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        
 <Footer/>
    </div>
  )
}
