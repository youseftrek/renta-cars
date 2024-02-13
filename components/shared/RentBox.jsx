import React from "react";
import { DatePicker } from "../ui/datapicker";
import { Button } from "../ui/button";
import SelectLocations from "../ui/selectlocations";
import { FaSearch } from "react-icons/fa";

const RentBox = () => {
  return (
    <div className="flex flex-col w-full md:w-2/3 lg:flex-row items-end gap-3 bg-white rounded-md shadow-md p-6 bottom-0 lg:w-2/3">
      <div className="flex flex-col gap-1 w-full">
        <h3 className="text-primary font-bold">Pickup Location</h3>
        <SelectLocations />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h3 className="text-primary font-bold">Pickup Date</h3>
        <DatePicker />
      </div>
      <div className="w-full">
        <Button className="w-full flex gap-3" size="lg">
          <FaSearch />
          Search Cars
        </Button>
      </div>
    </div>
  );
};

export default RentBox;
