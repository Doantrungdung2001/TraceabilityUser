import publicHttp from "./Http/publicHttp.config";

const PROJECT = {
    // Lấy ảnh 
  getOutput: async (projectId) => {
    return await publicHttp({
      method: "GET",
      url: `/project/${projectId}/output`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
    // Lấy thông tin
  getProjectByProjectId: async (projectId) => {
    return await publicHttp({
      method: "GET",
      url: `/project/${projectId}`,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
    // Lấy quá trình canh tác, timeline
  getProcess: async (projectId) => {
    return await publicHttp({
      method: 'GET',
      url: `/project/${projectId}/process`
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },
    // Lấy quy trình canh tác
  getPlantFarmingFromProject: async (projectId) => {
    return await publicHttp({
      method: 'GET',
      url: `/project/${projectId}/plantFarming`
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },
    // Chi tiết 
  getExpect: async (projectId) => {
    return await publicHttp({
      method: 'GET',
      url: `/project/${projectId}/expect`
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },
    // Ảnh chứng nhận của nông trại
  getCertificateImages: async ({ projectId }) => {
    return await publicHttp({
      method: 'GET',
      url: `/project/${projectId}/certificateImages`
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },
};

export default PROJECT;
