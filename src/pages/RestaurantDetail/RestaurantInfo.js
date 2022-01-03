import { RenderStars } from '../../utils/RenderStars';
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
        <div className="stars">
          {RenderStars(rating)}
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
