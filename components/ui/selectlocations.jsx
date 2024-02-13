import React from "react";
import { Locations } from "@/constants/const";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectLocations = () => {
  return (
    <Select>
      <SelectTrigger className="w-full xl:w-[280px]">
        <SelectValue placeholder="Select a location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Egypt</SelectLabel>
          {Locations.map((location) => (
            <SelectItem key={location.name} value={location.name}>
              {location.name + " (" + location.carsNum + ")"}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectLocations;
