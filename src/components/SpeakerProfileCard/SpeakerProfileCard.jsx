import React from "react";

const SpeakerProfileCard = ({ name, image, designation }) => {
  return (
    <div className="p-4 max-w-[200px] m-1 rounded border-gray-300 shadow-md ">
      <div className="  flex justify-center items-center flex-col ">
        <div className="w-[100px] h-[100px] rounded-xl  ">
          <img
            className="w-full h-full rounded-[50%] "
            src={image}
            alt={name}
          />
        </div>
        <h3 className=" text-xl font-bold  ">{name}</h3>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default SpeakerProfileCard;
