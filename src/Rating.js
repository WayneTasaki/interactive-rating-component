import { useState } from "react";

const Rating = (num) => {
  const [rating, setRating] = useState();
  const ratingNum = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    // route to thank you component
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
                setRating(nums);
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
