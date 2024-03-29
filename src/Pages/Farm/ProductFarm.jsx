import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ProductFarm = () => {
  return (
    <>
      <Navbar />
      <section className="pt-[15vh] px-6 py-7">
      <span className="orangeText">Danh sách dự án</span>
        <Card className="max-w-xs overflow-hidden mt-3">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
              className="h-32"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="blue-gray">
              UI/UX Review Check
            </Typography>
            <Typography variant="h8" color="gray" className="mt-2 font-normal">
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between">
            <Button>Chi tiết</Button>
            <Typography className="font-normal">January 10</Typography>
          </CardFooter>
        </Card>
      </section>
      <Footer />
    </>
  );
};

export default ProductFarm;
