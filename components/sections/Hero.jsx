import Image from "next/image";
import React from "react";
import HeroCar from "/public/assets/images/heroCar.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import RentBox from "../shared/RentBox";

const Hero = () => {
  return (
    <section className="h-fit flex justify-center bg-red-50 mb-10">
      <container className="max-w-[1920px] w-full p-4">
        <div className="mt-10">
          <h1 className="font-bold text-xl text-center xl:text-2xl">
            Your Journey Starts Here:
            <br />
            <span className="text-primary text-3xl xl:text-5xl">
              Rent a Car, Own the Road
            </span>
          </h1>
          <p className="text-center mt-3">
            Empower your travels with the perfect ride.
            <br /> Our car rental options give you the flexibility to craft a
            journey that suits your style and aspirations.
          </p>
          <div className="flex gap-3 justify-center mt-4">
            <Link href="#cars">
              <Button size="lg">Rent Now</Button>
            </Link>
            <Link href="#info">
              <Button variant="outline" size="lg">
                More Info
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center mt-6 xl:mt-0">
          <Image src={HeroCar} width={700} height={500} alt="car" />
        </div>
        <div className="flex w-full items-center justify-center">
          <RentBox />
        </div>
      </container>
    </section>
  );
};

export default Hero;
