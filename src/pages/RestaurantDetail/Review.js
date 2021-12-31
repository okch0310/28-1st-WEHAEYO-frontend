import { useCallback } from 'react';
import BlankStar from './BlankStar';
import FullStar from './FullStar';
import HalfStar from './HalfStar';

export default function Review({ name, date, order, rating, comment }) {
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
    <li>
      <p className="user">
        {name}님 <span>{date}</span>
      </p>
      <div className="rating">
        {renderStars()}
        &nbsp;{rating}점
      </div>
      <p className="order">{order}</p>
      <p className="comment">{comment}</p>
    </li>
  );
}
