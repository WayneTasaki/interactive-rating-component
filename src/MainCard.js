import { useState } from "react";
import Rating from "./Rating";
import RatingCard from "./RatingCard";
import ThankYou from "./ThankYou";

const MainCard = () => {
  const [wasRated, setWasRated] = useState()
  const [rating, setRating] = useState()

  const getData = (s) => {
    // setWasRated(s)
    // setRating(r)
    console.log(wasRated)
  }
  return (
    <div className="page-wrapper">
      <div className="main-card">
        {!wasRated ? 
        <> 
        <RatingCard />
        <Rating onSubmit={getData}/>
        </>
        :
        <ThankYou rating={5}/>
        }

      </div>
    </div>
  );
};

export default MainCard;
