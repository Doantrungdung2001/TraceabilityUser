import React, { useState, useEffect } from "react";
import Avarta from "../Avarta/Avarta";
import { formatDateTime } from "../../Utils/helpers";
import Aos from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import useProject from "./useProject";
import Footer from "../Footer/Footer";
import { Spinner } from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const ProjectDetail = () => {
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { projectId } = useParams();
  const { ProjectDetail, isSuccessProjectDetail, isLoadingProjectDetail } =
    useProject({
      projectId,
    });
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section data-aos="fade-up" className="mx-auto pt-20">
      {isSuccessProjectDetail && (
        <>
          <Avarta data={ProjectDetail.farm.images} />
          <section data-aos="fade-up" className="relative py-8 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="text-center mt-1">
                <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-1">
                  {ProjectDetail.farm.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-1 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {ProjectDetail.farm.address}
                </div>
                {ProjectDetail.farm?.email?.map((email) => (
                  <div className="mb-2 text-blue-500 mt-3">
                    <i class="fas fa-mail-bulk mr-2 text-lg"></i>
                    <span>{email}</span>
                  </div>
                ))}
                <div className="mb-2 text-blue-500">
                  <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
                  {ProjectDetail.farm?.phone?.map((phone) => (
                    <span> - {phone} </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="m-3 m-3 px-5 rounded-2xl bg-white">
            <>
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  What is Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </>
          </section>
          <Footer />
        </>
      )}
      {isLoadingProjectDetail && <Spinner />}
    </section>
  );
};

export default ProjectDetail;
