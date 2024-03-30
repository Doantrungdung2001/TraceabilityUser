import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import FARM from "../../Services/farmService";

export default function useListFarm() {
  const parseDataAllFarm = useCallback((data) => {

    const allfarm = data.map((farm) => ({
      _id: farm._id,
      name: farm.name,
      status: farm.status,
      district: farm.district,
      address: farm.address,
      email: farm.email,
      isActive: farm.isActive,
      walletAddress: farm.walletAddress,
      description: farm.farm_description,
      createdAt: farm.createdAt,
    }));
    console.log("allfarm", allfarm)
    return { allfarm };
  }, []);

  
  const {
    data: dataAllFarm,
    isSuccess: isSuccessAllFarm,
    isLoading: isLoadingAllFarm,
  } = useQuery({
    queryKey: ["getAllFarm"],
    queryFn: () => FARM.getAllFarm(),
    staleTime: 20 * 1000,
    select: (data) => parseDataAllFarm(data.data.metadata),
  });


  return {
    allFarm: dataAllFarm?.allfarm,
    isSuccessAllFarm,
    isLoadingAllFarm,
  };
}
