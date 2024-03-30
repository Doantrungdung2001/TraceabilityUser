import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Spinner,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import useProfile from "../Profile/useProfile";
import Avarta from "../Avarta/Avarta";
import { formatDateTime } from "../../Utils/helpers";

const MAX_DESCRIPTION_LENGTH = 100; // Số ký tự tối đa bạn muốn hiển thị

const ListPlant = () => {
  const { farmId } = useParams();
  const {
    farmInfo,
    isSuccessFarmInfo,
    isLoadingFarmInfo,
    allPlant,
    isSuccessPlant,
    isLoadingPlant,
  } = useProfile({
    farmId,
  });

  const [openPlantDetail, setOpenPlantDetail] = useState(false);
  const handleOpenPlantDetail = () => setOpenPlantDetail(!openPlantDetail);
  const [selectedPlantDetail, setSelectedPlantDetail] = useState(null);
  return (
    <>
      <div className="mx-auto pt-20">
        {isSuccessFarmInfo && <Avarta data={farmInfo.images} />}
        {isLoadingFarmInfo && <Spinner />}
        <section className="relative py-2 bg-blueGray-200">
          {isSuccessFarmInfo && (
            <div className="container mx-auto px-4">
              <div className="text-center mt-1">
                <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-1">
                  {farmInfo.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-1 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {farmInfo.address}
                </div>
                {farmInfo?.email?.map((email) => (
                  <div className="mb-2 text-blue-500 mt-3">
                    <i class="fas fa-mail-bulk mr-2 text-lg"></i>
                    <span>{email}</span>
                  </div>
                ))}
                <div className="mb-2 text-blue-500">
                  <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
                  {farmInfo?.phone?.map((phone) => (
                    <span> - {phone} </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {isLoadingFarmInfo && <Spinner />}
        </section>
        <section className="pt-[4vh] px-8 mb-5">
          <span className="orangeText">Danh sách cây trồng</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {isSuccessPlant &&
              allPlant?.map((card) => (
                <Card className="max-w-xs overflow-hidden mt-5">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                  >
                    <img
                      src={card.image}
                      alt="ui/ux review check"
                      className="h-32"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h6" color="blue-gray">
                      {card.name}
                    </Typography>
                    <Typography
                      variant="h8"
                      color="gray"
                      className="mt-2 font-normal"
                    >
                      {card.description.length > MAX_DESCRIPTION_LENGTH
                        ? `${card.description.substring(
                            0,
                            MAX_DESCRIPTION_LENGTH
                          )}...`
                        : card.description}
                    </Typography>
                  </CardBody>
                  <CardFooter className="flex items-center justify-between">
                    <Button
                      onClick={() => {
                        setSelectedPlantDetail(card);
                        handleOpenPlantDetail();
                      }}
                    >
                      Chi tiết
                    </Button>
                    <Typography className="font-normal">
                      {formatDateTime(card.createdAt)}
                    </Typography>
                  </CardFooter>
                </Card>
              ))}
            {isLoadingPlant && <Spinner />}
          </div>

          <Dialog open={openPlantDetail} handler={handleOpenPlantDetail}>
            {selectedPlantDetail && (
              <>
                <DialogHeader> {selectedPlantDetail.name} </DialogHeader>
                <DialogBody>
                  <div className="max-w-screen-md text-sm sm:text-base">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Ngày trồng
                    </h4>
                    <p className="font-normal text-gray-800 mb-4">
                      {formatDateTime(selectedPlantDetail.createdAt)}
                    </p>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Phân loại
                    </h4>
                    <p className="font-normal text-gray-800 mb-4">
                      {selectedPlantDetail.type}
                    </p>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Trạng thái
                    </h4>
                    <p className="font-normal text-gray-800 mb-4">
                      {selectedPlantDetail.isActive
                        ? "Đang thực hiện"
                        : "Không thực hiện"}
                    </p>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Mô tả
                    </h4>
                    <p className="font-normal text-gray-800">
                      {selectedPlantDetail.description}
                    </p>
                  </div>
                </DialogBody>
              </>
            )}

            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpenPlantDetail}
                className="mr-1"
              >
                <span>Thoát</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </section>
      </div>
    </>
  );
};

export default ListPlant;
