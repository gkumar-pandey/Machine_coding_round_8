import React from "react";
import { eventData } from "../../data/data";
import EventCard from "../../components/EventCard/EventCard";
import { Link } from "react-router-dom";
import { searchByTitleAndTag } from "../../utils/Filter";
import { useEvent } from "../../context/EventContext";

const Home = () => {
  const { meetups } = eventData;
  const { searchQuery } = useEvent();

  const filterEvents = () => {
    if (searchQuery) {
      return searchByTitleAndTag(meetups, searchQuery);
    }

    return [...meetups];
  };
  return (
    <div>
      <div className=" m-4 flex items-center justify-between px-4 ">
        <h1 className=" text-3xl font-bold  ">Meetup Events</h1>
        <div className="border">
          <input type="select" />
        </div>
      </div>
      <div className=" flex gap-4 flex-wrap justify-center ">
        {filterEvents().map((item) => (
          <Link to={`/eventDetail/${item.id}`}>
            <EventCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
