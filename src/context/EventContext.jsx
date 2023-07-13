import { createContext, useContext, useState } from "react";

export const EventContext = createContext();

export const EventContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState();
  return (
    <EventContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);
