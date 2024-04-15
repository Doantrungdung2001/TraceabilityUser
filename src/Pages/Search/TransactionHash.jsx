import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SearchTransactionHash from "../../Components/Traceanility/SearchTransactionHash";
import Footer from "../../Components/Footer/Footer";

const TransactionHash = () => {
  return (
    <>
      <Navbar />
      <SearchTransactionHash />
      <Footer />
    </>
  );
};

export default TransactionHash;
