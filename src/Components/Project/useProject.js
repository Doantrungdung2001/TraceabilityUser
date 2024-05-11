import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import PROJECT from "../../Services/projectService";
import { formatDateTime } from "../../Utils/helpers";

export default function useProject({ projectId }) {
  const parseDataProjectDetail = useCallback((data) => {
    const projectdetail = {
      id: data?._id,
      title: data?.plant?.plant_name,
      farm: data?.farm,
      plant: data?.plant,
      seed: data?.seed,
      startDate: data?.startDate,
      image: data?.plant?.plant_thumb,
      square: data?.square,
      status: data?.status,
      description:
        data?.description ||
        `Đây là dự án được khởi tạo vào ngày ${formatDateTime(
          data?.startDate
        )}, cho ${data?.plant?.plant_name} với hạt giống là ${
          data?.seed?.seed_name
        }`,
      txHash: data?.txHash,
      historyProcess: data?.historyInfo,
      output: data?.output,
    };
    return {
      projectdetail,
    };
  }, []);

  const {
    data: ProjectDetail,
    isSuccess: isSuccessProjectDetail,
    isLoading: isLoadingProjectDetail,
  } = useQuery({
    queryKey: ["projectsDetail", projectId],
    queryFn: () => PROJECT.getProjectByProjectId(projectId),
    staleTime: 20 * 1000,
    select: (data) => parseDataProjectDetail(data.data.metadata),
    enabled: !!projectId,
  });

  return {
    ProjectDetail: ProjectDetail?.projectdetail,
    isSuccessProjectDetail,
    isLoadingProjectDetail,
  };
}
