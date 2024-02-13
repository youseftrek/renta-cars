import Image from "next/image";
import React from "react";
import CustomToolTip from "./CustomToolTip";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MdOutlineCarCrash } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { IoMan } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
import { GiElectric } from "react-icons/gi";
import { GiGears } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";
import { DatePicker } from "../ui/datapicker";
import { TiPlus } from "react-icons/ti";

const CarCard = ({ car }) => {
  return (
    <containe className="w-fit bg-secondary p-5 rounded-xl hover:scale-105 transition-all shadow-md">
      <Image
        src={`/assets/images/${car.image}`}
        alt={car.name}
        width={350}
        height={350}
      />
      <h3 className="font-extrabold text-xl text-center">{car.name}</h3>
      <div className="mt-2 flex justify-center gap-3">
        <CustomToolTip data={car.model} version="1" />
        <CustomToolTip data={car.passengers} version="2" />
        <CustomToolTip data={car.doors} version="3" />
      </div>
      <div className="flex flex-col justify-center gap-1 mt-2">
        <p className="font-bold text-center text-2xl text-primary">
          <span className="font-light text-sm">Price: </span>
          {car.price}
        </p>
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Book Now</Button>
          </DrawerTrigger>
          <DrawerContent className="h-screen flex justify-center items-center">
            <DrawerHeader className="h-1/3">
              <DrawerTitle className="flex flex-col justify-center items-center">
                <Image
                  src={`/assets/images/${car.image}`}
                  alt={car.name}
                  width={280}
                  height={280}
                />
                <h3 className="font-bold text-3xl mb-2">
                  {car.name}
                  <span className="text-sm text-primary"> {car.model}</span>
                </h3>
              </DrawerTitle>
            </DrawerHeader>
            <div className="md:w-2/3 h-2/3 overflow-scroll m-2 rounded-md md:shadow-none md:overflow-clip md:flex justify-center items-center ">
              <DrawerDescription className="flex flex-col gap-5 w-full p-2 mt-2">
                <p className="text-center">{car.description}</p>
                <div className="flex flex-col gap-6 bg-secondary rounded-md p-2">
                  <div>
                    <h4 className="flex gap-2 items-center font-semibold w-full text-left text-primary text-xl mb-3">
                      <MdOutlineCarCrash size={30} />
                      Specifications
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="text-black flex gap-2 text-md items-center">
                        <GiCarDoor size={20} />
                        <p>{car.doors} Doors</p>
                      </li>
                      <li className="text-black flex gap-2 text-md items-center">
                        <IoMan size={20} />
                        <p>{car.passengers} Passengers</p>
                      </li>
                      <li className="text-black flex gap-2 text-md items-center">
                        <IoCarSportSharp size={20} />
                        <p>{car.type}</p>
                      </li>
                      <li className="text-black flex gap-2 text-md items-center">
                        <GiElectric size={20} />
                        <p>{car.fuelType}</p>
                      </li>
                      <li className="text-black flex gap-2 text-md items-center">
                        <GiGears size={20} />
                        <p>{car.gearbox}</p>
                      </li>
                      <li className="text-black flex gap-2 items-center">
                        <IoIosColorPalette size={20} />
                        <p>{car.color}</p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="flex gap-2 items-center font-semibold w-full text-left text-primary text-xl mb-3">
                      <TbListDetails size={30} />
                      Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {car.features.map((feature) => (
                        <li
                          className="text-black flex gap-2 items-center"
                          key={feature}>
                          <TiPlus />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DrawerDescription>

              <DrawerFooter className=" mt-0">
                <div className="flex flex-col gap-1 w-full mb-3">
                  <h3 className="text-primary font-bold">Pickup Date</h3>
                  <DatePicker />
                </div>
                <Button>
                  Submit(&nbsp;
                  <span className="font-bold text-xl">Price:{car.price}</span>
                  &nbsp;)
                </Button>
                <DrawerClose>
                  <Button className="w-full" variant="outline">
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </containe>
  );
};

export default CarCard;
