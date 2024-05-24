import React from "react";
import { useParams } from "react-router-dom";
import useEventFarm from "./useEventFarm";

import "aos/dist/aos.css";
import { formatDateTime, formatTransactionHashTable } from "../../Utils/helpers";

const EventFarmComponent = () => {
  const { farmId } = useParams();
  const { allEventByFarm, isSuccessAllEventByFarm, isLoadingAllEventByFarm } = useEventFarm({
    farmId,
  });

  return (
    <>
    {
        isSuccessAllEventByFarm && allEventByFarm && allEventByFarm.length > 0 &&
        <div className="pt-[10vh]"> {
            allEventByFarm.map((event) => {
                return (
                    <div key={event.id} className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center w-11/12 h-40 bg-white rounded-lg shadow-md my-5">
                            <div className="flex flex-row items-center justify-between w-full h-1/2 px-5 py-2">
                                <div className="flex flex-row items-center justify-start w-1/2">
                                    <p className="text-lg font-semibold text-blue-800">{ formatTransactionHashTable({
                                        str: event.tx,
                                        a: 8,
                                        b: 5
                                    })}</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full h-1/2 px-5 py-2">
                                <div className="flex flex-row items-center justify-start w-1/2">
                                    <p className="text-lg font-semibold text-gray-800">{formatDateTime(event.timestamp)}</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full h-1/2 px-5 py-2">
                                <div className="flex flex-row items-center justify-start w-1/2">
                                    <p className="text-lg font-semibold text-gray-800">{event.event}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    }
    {
            isLoadingAllEventByFarm && 
            <div className="flex flex-col items-center justify-center pt-[10vh]">
                <p className="text-lg font-semibold text-gray-800">Loading...</p>
            </div>
        }
    {
        isSuccessAllEventByFarm && (!allEventByFarm || allEventByFarm.length === 0) &&
        <div className="flex flex-col items-center justify-center pt-[10vh]">
            <p className="text-lg font-semibold text-gray-800">Không có dữ liệu</p>
        </div>
    }
    </>
  );
};

export default EventFarmComponent;
