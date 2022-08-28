import { useState } from "react";

const Rating = (props) => {
  const [rating, setRating] = useState(null);
  const [wasRated, setWasRated] = useState(false);
  const ratingNum = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(wasRated);
    // props.onSubmit(rating)
  };
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
                setRating(nums)
                setWasRated(true);
              }}
            >
              <span className="num">{nums}</span>
            </div>
          ))}
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Rating;
