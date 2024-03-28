import publicHttp from "./Http/publicHttp.config";

const FARM = {
  getFarmById: async (farmId) => {
    return await publicHttp({
      method: "GET",
      url: `/farm/${farmId}`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};

export default FARM;
