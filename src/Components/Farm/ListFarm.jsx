import React from "react";
import "./listfarm.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Data = [
  {
    id: 1,
    name: "Farm 1",
    location: "Viet Nam - Bac Ninh",
    grade: "CUL TURAL RELAX",
    quantity: "50",
    description: "good farm",
    rate: 3,
  },
  {
    id: 2,
    name: "Farm 2",
    location: "Viet Nam - Ninh Binh",
    grade: "CUL TURAL RELAX",
    quantity: "51",
    description: "good farm",
    rate: 4,
  },
  {
    id: 3,
    name: "Farm 3",
    location: "Viet Nam - Ha Tinh",
    grade: "CUL TURAL RELAX",
    quantity: "52",
    description: "good farm",
    rate: 5,
  },
  {
    id: 4,
    name: "Farm 4",
    location: "Viet Nam - Thanh Hoa",
    grade: "CUL TURAL RELAX",
    quantity: "53",
    description: "good farm",
    rate: 4.5,
  },
  {
    id: 5,
    name: "Farm 4",
    location: "Viet Nam - Thanh Hoa",
    grade: "CUL TURAL RELAX",
    quantity: "53",
    description: "good farm",
    rate: 4.5,
  },
  {
    id: 6,
    name: "Farm 4",
    location: "Viet Nam - Thanh Hoa",
    grade: "CUL TURAL RELAX",
    quantity: "53",
    description: "good farm",
    rate: 4.5,
  },
];

const ListFarm = () => {
  return (
    <section className="mx-auto px-12 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {Data.map((farm) => (
          <Card
            key={farm.id}
            className="w-80 sm:w-full md:w-full lg:w-full xl:w-full"
          >
            <CardHeader color="blue-gray" className="relative h-40">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ListFarm;
