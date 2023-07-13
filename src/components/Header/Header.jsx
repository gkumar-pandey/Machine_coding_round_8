import React from "react";
import { Link } from "react-router-dom";
import { useEvent } from "../../context/EventContext";

const Header = () => {
  const { searchQuery, setSearchQuery } = useEvent();
  return (
    <div className="shadow px-4 ">
      <div className="flex items-center justify-between p-3 ">
        <Link to={"/"}>
          <h2 className=" text-3xl font-bold mx-2 text-pink-500  font-sans ">
            Meetup
          </h2>
        </Link>
        <div className="p-1">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="search by title and tag"
            className=" focus:outline-none border px-2 text-lg  rounded  border-gray-500 "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
