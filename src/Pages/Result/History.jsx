import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import TimelineHistory from "../../Components/Timeline/TimelineHistory";
const History = () => {
  return (
    <>
      <Navbar />
      {/* <TimelineWork /> */}
      <TimelineHistory/>
      <Footer />
    </>
  );
};

export default History;
