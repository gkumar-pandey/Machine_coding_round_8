import React from "react";
import { useParams } from "react-router-dom";
import { eventData } from "../../data/data";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import EventTimeCard from "../../components/EventTimeCard/EventTimeCard";
import SpeakerProfileCard from "../../components/SpeakerProfileCard/SpeakerProfileCard";

const EventDetailsPage = () => {
  const { id } = useParams();
  const { meetups } = eventData;
  const meetupDetails = meetups.find((item) => item.id === id);

  const {
    hostedBy,
    title,
    eventThumbnail,
    eventDescription,
    additionalInformation,
    eventTags,
    eventStartTime,
    eventEndTime,
    address,
    location,
    isPaid,
    price,
    speakers
  } = meetupDetails;

  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 ">
          <div className="  w-3/4 ">
            <h1 className=" text-2xl font-bold  ">{meetupDetails.title}</h1>
            <div className=" my-2 ">
              <p>Hosted by</p>
              <p className=" font-bold">{hostedBy}</p>
            </div>
            <div className=" my-4 ">
              <img src={eventThumbnail} className="w-full h-full" alt={title} />
            </div>
            <div className="my-2">
              <h2 className="text-xl py-2 font-bold ">Details : </h2>
              <p>{eventDescription}</p>
            </div>
            <div>
              <h2 className=" text-xl py-2 font-bold ">
                Additional information :{" "}
              </h2>
              <div>
                <span className=" text-lg font-bold my-1 ">Dress code : </span>
                <span>{additionalInformation.dressCode}</span>
              </div>
              <div>
                <span className=" text-lg font-bold my-1 ">
                  Age Restrictions :{" "}
                </span>
                <span>{additionalInformation.ageRestrictions}</span>
              </div>
              <div>
                <h2 className=" text-xl my-1 font-bold ">Event Tags: </h2>
                <div className=" flex items-center gap-4 ">
                  {eventTags.map((item) => (
                    <Button title={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <EventTimeCard
                eventEndTime={eventEndTime}
                eventStartTime={eventStartTime}
                location={location}
                address={address}
                price={price}
              />
            </div>
            <div>
              <h2 className=" my-2 text-2xl font-bold ">
                Speakers(<>{speakers.length}</>)
              </h2>
              <div className=" flex gap-3 items-center  ">
                {speakers.map((item) => (
                  <SpeakerProfileCard {...item} />
                ))}
              </div>
            </div>
            <div>
              <Button title={"Rsvp"} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EventDetailsPage;
