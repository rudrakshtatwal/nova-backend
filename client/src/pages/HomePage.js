import React from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import ProblemSection from '../components/HomePage/ProblemSection';
import SolutionSection from '../components/HomePage/SolutionSection';
import RoiSection from '../components/HomePage/RoiSection';
import ImplementationSection from '../components/HomePage/ImplementationSection';
import CtaSection from '../components/HomePage/CtaSection';
import UseCasesSection from '../components/HomePage/UseCasesSection';
import ContactSection from '../components/HomePage/ContactSection';
import Navbar from '../components/navbar';
const HomePage = () => {
  return (
    <div className="min-h-screen text-white relative" style={{
      backgroundImage: "url('../assets/image4.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed"
    }}>
      <Navbar/>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <RoiSection />
        <ImplementationSection />
        <CtaSection />
        <UseCasesSection />
        <ContactSection />
   
    </div>
  );
};

export default HomePage;