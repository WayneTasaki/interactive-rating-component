import { createContext, useState } from "react";

const RatingContext = createContext();

export function RatingProvider({ children }) {
  const [rating, setRating] = useState(null);
  const [wasRated, setWasRated] = useState(false);
  const [inProp, setInProp] = useState(false)

  
  return (
    <RatingContext.Provider value={{ rating, setRating, wasRated, setWasRated, inProp, setInProp }}>
      {children}
    </RatingContext.Provider>
  );
}

export default RatingContext;
