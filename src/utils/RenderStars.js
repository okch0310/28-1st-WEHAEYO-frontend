import BlankStar from '../pages/RestaurantDetail/Stars/BlankStar';
import FullStar from '../pages/RestaurantDetail/Stars/FullStar';
import HalfStar from '../pages/RestaurantDetail/Stars/HalfStar';

export const RenderStars = rating => {
  const stringRating = rating.toString().split('.');
  let resultArray = [];
  for (let i = 0; i < Number(stringRating[0]); i++) {
    resultArray.push(<FullStar key={i} />);
  }
  if (stringRating.length > 1 && Number(stringRating[1]) === 5)
    resultArray.push(<HalfStar key={resultArray.length} />);
  const resultArrayLength = resultArray.length;
  if (Number(stringRating[0]) < 5) {
    for (let j = 0; j < 5 - resultArrayLength; j++) {
      resultArray.push(<BlankStar key={resultArrayLength + j} />);
    }
  }
  return resultArray;
};
