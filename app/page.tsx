import React from "react";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="">
        <Body />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
