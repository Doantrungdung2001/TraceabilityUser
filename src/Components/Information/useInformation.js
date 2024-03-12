import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import PROJECT from "../../Services/projectService";
export default function useInformation({ projectId }) {
  // output images
  const parseData = useCallback((data) => {
    let outputImages = [];
    data.forEach((item) => {
      item.images.forEach((img) => {
        outputImages.push({ img });
      });
    });
    return { outputImages };
  }, []);
  const {
    data: dataOutput,
    isSuccess: isSuccessOutput,
    isLoading: isLoadingOutput,
  } = useQuery({
    queryKey: ["projectOutput", projectId],
    queryFn: () => PROJECT.getOutput(projectId),
    staleTime: 20 * 1000,
    select: (data) => parseData(data?.data?.metadata),
    enabled: !!projectId,
  });

  const parseDataProjectInfo = useCallback((data) => {
    const projectInfo = {
      id: data?._id,
      plant: data?.plant,
      seed: data?.seed,
      startDate: data?.startDate,
      square: data?.square,
      status: data?.status,
      description: data?.description,
      isGarden: data?.isGarden,
      projectIndex: data?.projectIndex,
      txHash: data?.txHash,
      farm: data?.farm,
    };
    return {
      projectInfo,
    };
  }, []);

  const {
    data: dataProjectInfo,
    isSuccess: isSuccessProjectInfo,
    isLoading: isLoadingProjectInfo,
  } = useQuery({
    queryKey: ["projectInfo", projectId],
    queryFn: () => PROJECT.getProjectByProjectId(projectId),
    staleTime: 20 * 1000,
    select: (data) => parseDataProjectInfo(data?.data?.metadata),
    enabled: !!projectId,
  });

  const parseDataProcess = useCallback((data) => {
    const process = {
      cultivation: [],
      planting: [],
      fertilize: [],
      pesticide: [],
      other: [],
    };
    data.forEach((item) => {
      process[item.type].push(item);
    });

    let dataProcess = [];
    if (process.cultivation && process.cultivation.length > 0)
      process.cultivation.map((item) => {
        dataProcess.push({
          _id: item?._id,
          time: item?.time,
          type: item?.type,
          name: item?.cultivationActivity.name,
          detail: {
            tx: item?.tx,
            name: item?.cultivationActivity.name,
            description: item?.cultivationActivity.description,
          },
        });
      });

    process.planting.map((item) => {
      dataProcess.push({
        _id: item?._id,
        time: item?.time,
        type: item?.type,
        name: `Gieo trồng với mật độ ${item?.plantingActivity.density}`,
        detail: {
          tx: item?.tx,
          density: item?.plantingActivity.density,
          description: item?.plantingActivity.description,
        },
      });
    });

    process.fertilize.map((item) => {
      dataProcess.push({
        _id: item?._id,
        time: item?.time,
        type: item?.type,
        name: `Bón phân lúc ${item?.fertilizationActivity.fertilizationTime}`,
        detail: {
          tx: item?.tx,
          fertilizationTime: item?.fertilizationActivity.fertilizationTime,
          description: item?.fertilizationActivity.description,
          type: item?.fertilizationActivity.type,
        },
      });
    });

    process.pesticide.map((item) => {
      dataProcess.push({
        _id: item?._id,
        time: item?.time,
        type: item?.type,
        name: `Phòng trừ ${item?.pestAndDiseaseControlActivity.name}`,
        detail: {
          tx: item?.tx,
          name: item?.pestAndDiseaseControlActivity.name,
          symptoms: item?.pestAndDiseaseControlActivity.symptoms,
          solution: item?.pestAndDiseaseControlActivity.solution,
          type: item?.pestAndDiseaseControlActivity.type,
        },
      });
    });

    process.other.map((item) => {
      dataProcess.push({
        _id: item?._id,
        time: item?.time,
        type: item?.type,
        name: `${item?.other.description}`,
        detail: {
          tx: item?.tx,
          description: item?.other.description,
        },
      });
    });

    dataProcess.sort((a, b) => {
      const timeA = new Date(a.time).getTime();
      const timeB = new Date(b.time).getTime();
      return timeA - timeB;
    });

    return { dataProcess };
  }, []);

  const {
    data: dataProcess,
    isSuccess: isSuccessProcess,
    isLoading: isLoadingProcess,
  } = useQuery({
    queryKey: ["getProcess", projectId],
    queryFn: () => PROJECT.getProcess(projectId),
    staleTime: 20 * 1000,
    select: (data) => parseDataProcess(data?.data?.metadata),
    enabled: !!projectId,
  });

  const parseDataExpect = useCallback((data) => {
    const expect = data.map((item) => ({
      id: item?._id,
      tx: item?.tx,
      time: item?.time,
      amount: item?.amount,
      note: item?.note,
      isEdited: item?.isEdited,
      historyExpect: item?.historyExpect,
      createdAtTime: item?.createdAtTime,
    }));
    return { expect };
  }, []);

  const {
    data: dataExpect,
    isSuccess: isSuccessExpect,
    isLoading: isLoadingExpect,
  } = useQuery({
    queryKey: ["projectExpect", projectId],
    queryFn: () => PROJECT.getExpect(projectId),
    staleTime: 20 * 1000,
    select: (data) => parseDataExpect(data?.data?.metadata),
    enabled: !!projectId,
  });

  const parseDataCertificateImages = useCallback((data) => {
    const certificateImages = data.map((item) => {
      return {
        imgelink: item,
      };
    });
    return { certificateImages };
  }, []);
  const {
    data: dataCertificateImages,
    isSuccess: isSuccessCertificateImages,
    isLoading: isLoadingCertificateImages,
  } = useQuery({
    queryKey: ["getCertificateImages", projectId],
    queryFn: () => PROJECT.getCertificateImages({ projectId }),
    staleTime: 20 * 1000,
    select: (data) => parseDataCertificateImages(data?.data?.metadata),
    enabled: !!projectId,
  });

  return {
    ImageProduct: dataOutput?.outputImages,
    isSuccessOutput,
    isLoadingOutput,
    projectInfo: dataProjectInfo?.projectInfo,
    isSuccessProjectInfo,
    isLoadingProjectInfo,
    dataProcess: dataProcess?.dataProcess,
    isSuccessProcess,
    isLoadingProcess,
    dataExpect: dataExpect?.expect,
    isSuccessExpect,
    isLoadingExpect,
    dataCertificateImages: dataCertificateImages?.certificateImages,
    isSuccessCertificateImages,
    isLoadingCertificateImages,
  };
}
