import React from "react";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Users from "../components/Users";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="">
        <Body />
      </div>
      <Users />
      <Footer />
    </>
  );
};

export default Home;
