import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
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
  Select,
  Option,
} from "@material-tailwind/react";

import useProfile from "../Profile/useProfile";
import Avarta from "../Avarta/Avarta";
import { formatDate, formatDateTime } from "../../Utils/helpers";
import { useNavigate } from "react-router-dom";
const MAX_DESCRIPTION_LENGTH = 100; // Số ký tự tối đa bạn muốn hiển thị

const ListProject = () => {
  const navigate = useNavigate();
  const [projectStatus, setProjectStatus] = React.useState("all");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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

  const filterProjects = allProject ? allProject.filter((project) => {
    console.log("project: ", project)
    if (projectStatus === "all") {
      return true;
    }
    if (projectStatus === "inProgress") {
      return project.status === "inProgress" && project.output?.length === 0;
    }
    if (projectStatus === "inSell") {
      return project.status === "inProgress" && project.output?.length > 0;
    }
    if (projectStatus === "done") {
      return project.status === "finished";
    }
    if (projectStatus === "cancel") {
      return project.status === "cancel";
    }
  }): [];
  
  return (
    <>
      <div data-aos="fade-up" className="mx-auto pt-20">
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
                    <i className="fas fa-mail-bulk mr-2 text-lg"></i>
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
        <section className="pt-[4vh] px-8 mb-5 ">
          <span className="orangeText">Danh sách dự án</span>
          <div className="w-72">
      <Select
        label="Lựa chọn trạng thái dự án"
        value={projectStatus}
        onChange={(val) => {
          console.log("val: ", val)
          setProjectStatus(val)}}
      >
        <Option value="all">Tất cả</Option>
        <Option value="inProgress">Chưa thu hoạch</Option>
        <Option value="inSell">Đang bày bán</Option>
        <Option value="done">Đã kết thúc</Option>
        <Option value="cancel">Đã hủy</Option>
      </Select>
    </div>
          <div className=" mx-auto grid flex justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {isSuccessProject &&
              filterProjects?.map((card) => (
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
                      className="h-auto"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h6" color="blue-gray">
                      {card.title}
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
                    <Button onClick={()=>{navigate(`/results/${card.id}`)}}>Chi tiết</Button>
                    <div className="flex items-center flex-col">
                    <Typography className="font-normal">{formatDate(card.startDate)}</Typography>
                    <Typography className="font-normal">{formatDate(card.expectedEndDate)}</Typography>
                    </div>
                  </CardFooter>
                </Card>
              ))}{" "}
          </div>
          {isLoadingProject && <Spinner />}
        </section>
      </div>
    </>
  );
};

export default ListProject;
