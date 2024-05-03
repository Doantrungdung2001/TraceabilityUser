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

    let allDistributerWithAmount = [];
    data.forEach((item) => {
      item.distributerWithAmount.forEach((distributerWithAmount) => {
        allDistributerWithAmount.push(distributerWithAmount);
      });
    });

    const output = data.map((item) => ({
      id: item?._id,
      tx: item?.tx,
      time: item?.time,
      amount: item?.amount,
      images: item?.images,
      note: item?.note,
      isEdited: item?.isEdited,
      historyOutput: item?.historyOutput,
      createdAtTime: item?.createdAtTime,
      distributerWithAmount: item?.distributerWithAmount,
      amountPerOne: item?.amountPerOne,
    }));

    return { outputImages, allDistributerWithAmount, output };
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
    data.processes.forEach((item) => {
      process[item.type].push(item);
    });

    let dataProcess = [];
    if (process.cultivation && process.cultivation.length > 0)
      process.cultivation.map((item) => {
        dataProcess.push({
          tx: item?.tx,
          _id: item?._id,
          time: item?.time,
          type: item?.type,
          name: item?.cultivationActivity.name,
          // detail: {
          //   tx: item?.tx,
          //   name: item?.cultivationActivity.name,
          //   description: item?.cultivationActivity.description,
          // },
          cultivationActivity: item?.cultivationActivity,
          historyProcess: item?.historyProcess,
          objectDetections: item?.objectDetections,
        });
      });

    process.planting.map((item) => {
      dataProcess.push({
        tx: item?.tx,
        _id: item?._id,
        time: item?.time,
        type: item?.type,
        name: `Gieo trồng với mật độ ${item?.plantingActivity.density}`,
        // detail: {
        //   tx: item?.tx,
        //   density: item?.plantingActivity.density,
        //   description: item?.plantingActivity.description,
        // },
        plantingActivity: item?.plantingActivity,
        historyProcess: item?.historyProcess,
        objectDetections: item?.objectDetections,
      });
    });

    process.fertilize.map((item) => {
      dataProcess.push({
        tx: item?.tx,
        _id: item?._id,
        time: item?.time,
        type: item?.type,
        name: `Bón phân lúc ${item?.fertilizationActivity.fertilizationTime}`,
        // detail: {
        //   tx: item?.tx,
        //   fertilizationTime: item?.fertilizationActivity.fertilizationTime,
        //   description: item?.fertilizationActivity.description,
        //   type: item?.fertilizationActivity.type,
        // },
        fertilizationActivity: item?.fertilizationActivity,
        historyProcess: item?.historyProcess,
        objectDetections: item?.objectDetections,
      });
    });

    process.pesticide.map((item) => {
      dataProcess.push({
        tx: item?.tx,
        _id: item?._id,
        time: item?.time,
        type: item?.type,
        name: `Phòng trừ ${item?.pestAndDiseaseControlActivity.name}`,
        // detail: {
        //   tx: item?.tx,
        //   name: item?.pestAndDiseaseControlActivity.name,
        //   symptoms: item?.pestAndDiseaseControlActivity.symptoms,
        //   solution: item?.pestAndDiseaseControlActivity.solution,
        //   type: item?.pestAndDiseaseControlActivity.type,
        // },
        pestAndDiseaseControlActivity: item?.pestAndDiseaseControlActivity,
        historyProcess: item?.historyProcess,
        objectDetections: item?.objectDetections,
      });
    });

    process.other.map((item) => {
      dataProcess.push({
        tx: item?.tx,
        _id: item?._id,
        time: item?.time,
        type: item?.type,
        name: `${item?.other.description}`,
        // detail: {
        //   tx: item?.tx,
        //   description: item?.other.description,
        // },
        other: item?.other,
        historyProcess: item?.historyProcess,
        objectDetections: item?.objectDetections,
      });
    });

    dataProcess.sort((a, b) => {
      const timeA = new Date(a.time).getTime();
      const timeB = new Date(b.time).getTime();
      return timeA - timeB;
    });

    // Mảng ban đầu chứa các đối tượng ObjectDetection
    const nonProcessObjectDetection = data?.nonProcessObjectDetection;

    // Tạo một đối tượng Map để nhóm các ObjectDetection theo ngày
    const groupedByDate = new Map();

    // Lặp qua từng ObjectDetection
    nonProcessObjectDetection.forEach((objectDetection) => {
      // Lấy ra ngày của start_time
      const date = new Date(objectDetection.start_time).toLocaleDateString();

      // Kiểm tra xem đã có một phần tử trong Map cho ngày này chưa
      if (groupedByDate.has(date)) {
        // Nếu đã có, thêm ObjectDetection vào mảng của ngày đó
        groupedByDate.get(date).objectDetections.push(objectDetection);
      } else {
        // Nếu chưa có, tạo một phần tử mới và thêm vào Map
        groupedByDate.set(date, {
          date: date,
          objectDetections: [objectDetection],
        });
      }
    });

    // Chuyển Map thành mảng để thuận tiện cho việc sử dụng
    const formatedNonProcessObjectDetectionewArray = [...groupedByDate.values()];

    // In ra mảng mới
    console.log(formatedNonProcessObjectDetectionewArray);

    return { dataProcess, formatedNonProcessObjectDetectionewArray };
  }, []);

  const {
    data: dataProcess,
    isSuccess: isSuccessProcess,
    isLoading: isLoadingProcess,
  } = useQuery({
    queryKey: ["getProcess", projectId],
    queryFn: () => PROJECT.getProcessWithObjectDetections(projectId),
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

  const parseDataPlantFarming = useCallback((data) => {
    if (!data)
      return {
        plantFarming: null,
      };
    const plantFarming = {
      id: data?._id,
      plant: data?.plant,
      seed: data?.seed,
      timeCultivates: data?.timeCultivates,
      cultivationActivities: data?.cultivationActivities,
      plantingActivity: data?.plantingActivity,
      fertilizationActivities: data?.fertilizationActivities,
      pestAndDiseaseControlActivities: data?.pestAndDiseaseControlActivities,
      bestTimeCultivate: data?.bestTimeCultivate,
      farmingTime: data?.farmingTime,
      harvestTime: data?.harvestTime,
      isEdited: data?.isEdited,
      historyPlantFarmingEdit: data?.historyPlantFarmingEdit,
      createdAtTime: data?.createdAtTime,
    };
    return { plantFarming };
  }, []);
  const {
    data: dataPlantFarming,
    isSuccess: isSuccessPlantFarming,
    isLoading: isLoadingPlantFarming,
  } = useQuery({
    queryKey: ["getPlantFarmingFromProject", projectId],
    queryFn: () => PROJECT.getPlantFarmingFromProject(projectId),
    staleTime: 20 * 1000,
    select: (data) => parseDataPlantFarming(data?.data?.metadata),
    enabled: !!projectId,
  });

  //get delete process information
  const parseDataDeleteProcess = useCallback((data) => {
    if (!data)
      return {
        dataDeleteProcess: null,
      };
    const dataDeleteProcess = {
      deletedProcess: data?.deletedProcess,
      deletedExpect: data?.deletedExpect,
      deletedOutput: data?.deletedOutput,
    };
    return { dataDeleteProcess };
  }, []);

  const {
    data: dataDeleteProcess,
    isSuccess: isSuccessDeleteProcess,
    isLoading: isLoadingDeleteProcess,
  } = useQuery({
    queryKey: ["projectDeleteProcess", projectId],
    queryFn: () => PROJECT.getInfoDeleteProcess(projectId),
    staleTime: 20 * 1000,
    select: (data) => parseDataDeleteProcess(data?.data?.metadata),
    enabled: !!projectId,
  });

  return {
    ImageProduct: dataOutput?.outputImages,
    allDistributerWithAmount: dataOutput?.allDistributerWithAmount,
    Output: dataOutput?.output,
    isSuccessOutput,
    isLoadingOutput,
    projectInfo: dataProjectInfo?.projectInfo,
    isSuccessProjectInfo,
    isLoadingProjectInfo,
    dataProcess: dataProcess?.dataProcess,
    nonProcessObjectDetection: dataProcess?.formatedNonProcessObjectDetectionewArray,
    isSuccessProcess,
    isLoadingProcess,
    dataExpect: dataExpect?.expect,
    isSuccessExpect,
    isLoadingExpect,
    dataCertificateImages: dataCertificateImages?.certificateImages,
    isSuccessCertificateImages,
    isLoadingCertificateImages,
    dataPlantFarming: dataPlantFarming?.plantFarming,
    isSuccessPlantFarming,
    isLoadingPlantFarming,
    dataDeleteProcess: dataDeleteProcess?.dataDeleteProcess,
    isSuccessDeleteProcess,
    isLoadingDeleteProcess,
  };
}
