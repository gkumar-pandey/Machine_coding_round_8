import React from "react";

const EventCard = ({ title, eventThumbnail, eventType, eventStartTime }) => {
  return (
    <div className=" m-2">
      <div className=" relative  ">
        <div className="w-[200px] h-[200px]  ">
          <img
            className="w-full h-full rounded-md "
            src={eventThumbnail}
            alt={title}
          />
        </div>
        <div>
          <div>
            <p>{eventStartTime}</p>
            <h2 className=" text-lg font-bold ">{title}</h2>
          </div>
        </div>
        <button className=" absolute left-2 top-2 px-2 rounded bg-white text-gray-950 ">
          {eventType}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
