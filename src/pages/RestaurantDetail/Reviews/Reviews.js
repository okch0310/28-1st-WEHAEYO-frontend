import { useCallback } from 'react';
import FullStar from '../Stars/FullStar';
import HalfStar from '../Stars/HalfStar';
import BlankStar from '../Stars/BlankStar';
import Review from './Review';

export default function Reviews({ reviews, rating }) {
  const renderStars = useCallback(() => {
    const stringRating = rating.toString().split('.');
    let resultArray = [];
    for (let i = 0; i < Number(stringRating[0]); i++) {
      resultArray.push(<FullStar key={i} />);
    }
    if (stringRating.length > 1)
      resultArray.push(<HalfStar key={resultArray.length} />);
    const resultArrayLength = resultArray.length;
    if (Number(stringRating[0]) < 5) {
      for (let j = 0; j < 5 - resultArrayLength; j++) {
        resultArray.push(<BlankStar key={resultArrayLength + j} />);
      }
    }
    return resultArray;
  }, [rating]);

  return (
    <div className="reviews">
      <div className="stars">
        {rating}
        <br />
        {renderStars()}
      </div>
      <div className="review">
        <ul>
          {reviews.map(review => {
            return (
              <Review
                key={review.id}
                name={review.username}
                date={review.updated_at}
                rating={review.rating}
                order={review.order}
                comment={review.content}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
