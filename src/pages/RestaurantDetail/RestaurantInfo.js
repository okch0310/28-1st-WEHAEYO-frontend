import { useCallback } from 'react';
import { MdPlace } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import './RestaurantDetail.scss';
import FullStar from './FullStar';
import HalfStar from './HalfStar';
import BlankStar from './BlankStar';

export default function RestaurantInfo({
  title,
  image,
  address,
  phone,
  rating,
}) {
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
    <section className="restaurant_info">
      <img alt={`${title}`} src={`images/RestaurantDetail/${image}`} />
      <div className="info">
        <h1>{title}</h1>
        <div className="stars">
          {renderStars()}
          &nbsp;{rating}점
        </div>
        <p>리뷰 15개</p>
        <p>
          <MdPlace /> {address}
        </p>
        <p>
          <BsFillTelephoneFill /> {phone}
        </p>
      </div>
    </section>
  );
}
