import Rating from "./Rating";
// import starIcon from 'src/images/icon-star.svg'
import starIcon from './images/icon-star.svg'

const RatingCard = () => {
  return (
    <div className="page-wrapper">

      <div className="main-card">
        <div className="star-icon-circle">
          <img src={starIcon} alt="" className="star-icon"/>
        </div>
        <h1>How did we do?</h1>
        <p className="main-text">Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
        <Rating />
      </div>

    </div>
  );
};

export default RatingCard;
