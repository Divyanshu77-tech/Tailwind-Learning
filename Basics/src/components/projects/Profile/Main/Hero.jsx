import React from "react";
import Card from "./Card";
import Tasks from "./Tasks";
import Feature from "./Feature";

const Hero = () => {
  return (
    <div className="h-[80%] w-full grid grid-cols-4 ">
      <Card />
      <Tasks />
      <Feature />
    </div>
  );
};

export default Hero;
