import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Project from "../../Components/Project/Project";
import Avatar from "../../Components/Avatar/Avatar";
import Footer from "../../Components/Footer/Footer";
import ProfileFarm from "../../Components/Profile/Profile";
const ProflieFarm = () => {
  return (
    <div className="layout-proflie-farm">
      <div className="white-gradient">
        {/* <Navbar /> */}
        {/* <Avatar /> */}
        {/* <Project /> */}
        <ProfileFarm />
        <Footer/>
      </div>
    </div>
  );
};

export default ProflieFarm;
