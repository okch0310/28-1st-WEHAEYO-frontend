import { ImStarEmpty, ImStarHalf, ImStarFull } from 'react-icons/im';
import { MdPlace } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import './RestaurantDetail.scss';

export default function RestaurantInfo({
  title,
  image,
  address,
  phone,
  rating,
}) {
  return (
    <section className="restaurant_info">
      <img alt={`${title}`} src={`images/RestaurantDetail/${image}`} />
      <div className="info">
        <h1>{title}</h1>
        <p className="stars">
          <ImStarFull />
          <ImStarHalf />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          {rating}점
        </p>
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
