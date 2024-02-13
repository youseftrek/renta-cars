import Image from "next/image";
import React from "react";

const Card = ({ src, heading, description }) => {
  return (
    <div className="bg-secondary p-4 rounded-md hover:shadow-md duration-100 w-full lg:w-1/4 flex flex-col justify-center items-center gap-3 h-[300px]">
      <Image src={src} alt="why us" width={120} height={120} />
      <h3 className="font-bold text-lg">{heading}</h3>
      <p className="text-slate-700 text-center">{description}</p>
    </div>
  );
};

export default Card;
