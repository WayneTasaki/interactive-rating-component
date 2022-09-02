import React, { useState, useContext } from "react";
import { Transition } from "react-transition-group";
import Rating from "./Rating";
import RatingCard from "./RatingCard";
import ThankYou from "./ThankYou";
import RatingContext from "./RatingContext";

const MainCard = () => {
  const { rating, setRating, wasRated, setWasRated, inProp, setInProp } =
    useContext(RatingContext);
  
  if(wasRated == false) {
    return (
      <div className="page-wrapper">
        <div className='main-card'>
          <RatingCard />
          <Rating />
        </div>
      </div>
    )
  } 
    return (
      <div className="page-wrapper">
      <Transition in={inProp} timeout={1000} appear>
        {state => (
          <div className={`main-card ${state}`}>
            <ThankYou />
          </div>
        )}
      </Transition>
      </div>
    )
  }

export default MainCard;
