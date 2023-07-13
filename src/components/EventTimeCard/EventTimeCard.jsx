import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BiRupee } from "react-icons/bi";

const EventTimeCard = ({
  eventStartTime,
  eventEndTime,
  location,
  address,
  price
}) => {
  return (
    <div className="p-2 bg-white ">
      <div>
        <div className=" p-2 flex  items-start ">
          <AiOutlineClockCircle className="p-1 text-2xl " />
          <div>
            <p>{eventStartTime}</p>
            <p>{eventEndTime}</p>
          </div>
        </div>
        <div className=" p-2 flex items-start   ">
          <CiLocationOn className="p-1 text-2xl " />
          <div>
            <p>{location}</p>
            <p>{address}</p>
          </div>
        </div>
        <div className=" p-2 flex items-center  ">
          <BiRupee className="p-1 text-2xl " />
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default EventTimeCard;
