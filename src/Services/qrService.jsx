import publicHttp from "./Http/publicHttp.config";

const QR = {
  getStatsQRByFarmId: async (farmId) => {
    return await publicHttp({
      method: "GET",
      url: `/qr/stats/${farmId}`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
};

export default QR;
