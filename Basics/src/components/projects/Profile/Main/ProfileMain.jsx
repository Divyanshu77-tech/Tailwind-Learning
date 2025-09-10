import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileHead from "./ProfileHead";
import ProfileHero from "./ProfileHero";
import HeroUtility from "./HeroUtility";

const ProfileMain = () => {
  return (
    <div className="flex-1 h-fit flex flex-col items-center gap-8 border-l-2 border-gray-300 sm:grid grid-cols-3 sm:gap-2 xl:border-0 xl:grid-cols-4 ">
      <ProfileHead />
      <ProfileCard />
      <ProfileHero />
      <HeroUtility />
    </div>
  );
};

export default ProfileMain;
