import { useState, useContext } from "react";
import RatingContext from "./RatingContext";

const Rating = (props) => {
  const { rating, setRating, wasRated, setWasRated, inProp, setInProp } =
    useContext(RatingContext);

  const ratingNum = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    // could eventually POST submitted rating to db
  };

  const handleClick = (rating) => {
    if(rating >= 1) {
      setWasRated(true)
      setInProp(true)
    }
  }
  return (
    <div className="rating-component">
      <form onSubmit={handleSubmit}>
        <div className="rating-wrapper ">
          {ratingNum.map((nums) => (
            <div
              className={
                "rating-icon " + (nums <= rating ? "selected-icon" : "")
              }
              key={nums}
              onClick={() => {
                setRating(nums);
              }}
            >
              <span className="num">{nums}</span>
            </div>
          ))}
        </div>

        <button type="submit" onClick={() => handleClick(rating)}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Rating;
