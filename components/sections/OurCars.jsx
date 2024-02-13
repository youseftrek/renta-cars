import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import CarCard from "../shared/CarCard";
import { Cars } from "@/constants/const";

const OurCars = () => {
  return (
    <section className="flex justify-center mb-10">
      <container className="flex justify-center max-w-[1920px] w-full mt-6 p-4">
        <div className="w-[1300px]">
          <div className="flex justify-between">
            <h2 className="font-bold text-3xl mb-10">Our Cars</h2>
            <Button variant="ghost" aschild>
              <Link className="text-primary" href="/cars">
                View all
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10 place-items-center">
            {Cars.filter((car) => car.id < 7).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </container>
    </section>
  );
};

export default OurCars;
