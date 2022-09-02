import { useContext, useState } from 'react';
import { Transition } from 'react-transition-group';
import RatingContext from './RatingContext';
import thankYouImg from './images/illustration-thank-you.svg'

const ThankYou = () => {
  const { rating, setRating, wasRated, setWasRated, inProp, setInProp } =
  useContext(RatingContext);

  return (
    <div className="thankyou-wrapper">
    <img src={thankYouImg} alt="thank you image" id="thankYouImg"/>
    <span id="rating-text-wrapper">
      <p id='rating-text'>You selected {rating} out of 5</p>
    </span>
    <h1 id='ty-heading'>Thank You!</h1>
    <p className="ty-main-text">
      We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!
    </p>
  </div>
  );
};

export default ThankYou;