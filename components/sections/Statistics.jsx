import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { Separator } from "../ui/separator";

const Statistics = () => {
  return (
    <section className="flex justify-center mb-10">
      <container
        className="-z-50 max-w-[1920px] w-full mt-6 p-8 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/assets/images/statistics.jpg')",
        }}>
        <div className=" -z-40 absolute inset-0 bg-primary opacity-80"></div>
        <div className="text-white flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0">
          <h3 className="text-xl flex flex-col justify-center items-center lg:w-1/3 ">
            <FaRegUser size={35} className="mb-2" />
            <span className="font-extrabold">1200+</span>
            <span>Active Users</span>
          </h3>
          <Separator className="lg:hidden bg-white" />
          <h3 className="text-xl flex flex-col justify-center items-center lg:w-1/3">
            <FaCar size={35} className="mb-2" />
            <span className="font-extrabold">70+</span>
            <span>Avilable Cars</span>
          </h3>
          <Separator className="lg:hidden bg-white" />
          <h3 className="text-xl flex flex-col justify-center items-center lg:w-1/3">
            <FaCodeBranch size={35} className="mb-2" />
            <span className="font-extrabold">30+</span>
            <span>Branches</span>
          </h3>
        </div>
      </container>
    </section>
  );
};

export default Statistics;
