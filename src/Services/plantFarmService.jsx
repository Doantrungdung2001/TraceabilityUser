import publicHttp from "./Http/publicHttp.config";

const PLANT_FARMING = {
  getListPlantFarmingFromPlant: async (plantId) => {
    return await publicHttp({
      method: "GET",
      url: `/plantFarming/plant/${plantId}`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  getPlantFarmingFromSeed: async (seed) => {
    return await publicHttp({
      method: "GET",
      url: `/plantFarming/seed/${seed}`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  getRecommendPlantFarmingFromPlantNameAndSeedName: async ({
    plantName,
    seedName,
  }) => {
    return await publicHttp({
      method: "GET",
      url: `/plantFarming/recommend/${plantName}?seedName=${seedName}`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};

export default PLANT_FARMING;
