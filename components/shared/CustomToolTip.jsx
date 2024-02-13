import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GiCarDoor } from "react-icons/gi";
import { IoMan } from "react-icons/io5";

const CustomToolTip = ({ data, version }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="flex justify-center items-center gap-1 bg-secondary py-2 px-4 rounded-lg">
          {version === "1" && `${data}`}
          {version == "2" && <IoMan />}
          {version === "2" && `${data}`}
          {version === "3" && <GiCarDoor />}
          {version === "3" && `${data}`}
        </TooltipTrigger>
        <TooltipContent>
          {version === "1" && <p>Car model is {data}</p>}
          {version === "2" && <p>{data} adult passengers</p>}
          {version === "3" && <p>{data} doors</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomToolTip;
