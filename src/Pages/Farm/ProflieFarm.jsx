import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Project from "../../Components/Project/Project";
import Footer from "../../Components/Footer/Footer";
import ProfileFarm from "../../Components/Profile/Profile";
import Plant from "../../Components/Plant/Plant";
const ProflieFarm = () => {
  return (
    <div className="layout-proflie-farm">
      <div className="white-gradient">
        <Navbar />
        <ProfileFarm />
        <Plant />
        <Project />
        <Footer />
      </div>
    </div>
  );
};

export default ProflieFarm;
