import React from "react";
import Footer from "../../Components/Footer/Footer";
import Main from "../../Components/Main/Main";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";

const Home = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Main />
      <Footer/>
    </>
  );
};

export default Home;
