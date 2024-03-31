import React from "react";
import Footer from "../../Components/Footer/Footer";
import Main from "../../Components/Main/Main";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import useListFarm from "../../Components/Farm/useListFarm";
import useInformation from "../../Components/Information/useInformation";
import { useParams } from "react-router-dom";
const Home = () => {
  const projectId = useParams().projectId;
  const { allFarm, isSuccessAllFarm, isLoadingAllFarm } = useListFarm();

  const {
    ImageProduct,
    allDistributerWithAmount,
    Output,
    isSuccessOutput,
    isLoadingOutput,
    projectInfo,
    isSuccessProjectInfo,
    isLoadingProjectInfo,
    dataProcess,
    isSuccessProcess,
    isLoadingProcess,
    dataExpect,
    isSuccessExpect,
    isLoadingExpect,
    dataCertificateImages,
    isSuccessCertificateImages,
    isLoadingCertificateImages,
    dataPlantFarming,
    isSuccessPlantFarming,
    isLoadingPlantFarming,
  } = useInformation({ projectId });
  return (
    <>
      <Navbar />
      <Search />
      <Main farm={allFarm} />
      <Footer />
    </>
  );
};

export default Home;
