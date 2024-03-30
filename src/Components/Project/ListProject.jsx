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

const MAX_DESCRIPTION_LENGTH = 100; // Số ký tự tối đa bạn muốn hiển thị

const ListProject = () => {
  const { farmId } = useParams();
  const {
    farmInfo,
    isSuccessFarmInfo,
    isLoadingFarmInfo,
    allProject,
    isSuccessProject,
    isLoadingProject,
  } = useProfile({
    farmId,
  });
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
          <span className="orangeText">Danh sách dự án</span>
          {isSuccessProject &&
            allProject?.map((card) => (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
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
                    <Button>Chi tiết</Button>
                    <Typography className="font-normal">January 10</Typography>
                  </CardFooter>
                </Card>
              </div>
            ))}
          {isLoadingProject && <Spinner />}
          {/* <Dialog open={openPlantDetail} handler={handleOpenPlantDetail}>
            <DialogHeader>Họat động làm đất </DialogHeader>
            {selectedPlantDetail && (
              <DialogBody>
                <div>
                  <div className="max-w-screen-md text-xs">
                    <h4 className="text-lg font-semibold  text-gray-800">
                      Tên hoạt động
                    </h4>
                    <p className="font-semibold text-gray-600 mb-4">ầdfadf</p>
                    <h3 className="text-lg  text-gray-800 font-semibold">
                      Mô tả
                    </h3>
                    <p className="font-semibold text-gray-600">fadadfasd</p>
                  </div>
                </div>
              </DialogBody>
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
          </Dialog> */}
        </section>
      </div>
    </>
  );
};

export default ListProject;
