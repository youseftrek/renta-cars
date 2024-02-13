import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Nav from "@/components/sections/Nav";
import OurCars from "@/components/sections/OurCars";
import Statistics from "@/components/sections/Statistics";
import WhyUs from "@/components/sections/WhyUs";
import React from "react";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <OurCars />
      <Statistics />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Home;
