import { ImStarEmpty, ImStarHalf, ImStarFull } from 'react-icons/im';
import { MdPlace } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import './RestaurantDetail.scss';

export default function RestaurantInfo() {
  return (
    <section>
      <img alt="맥도날드 선릉점" src="images/RestaurantDetail/macdonalds.png" />
      <div className="restaurant_info">
        <h1>맥도날드 선릉점</h1>
        <p className="stars">
          <ImStarFull />
          <ImStarHalf />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          1.5점
        </p>
        <p>리뷰 15개</p>
        <p>
          <MdPlace /> 서울시 강남구 선릉1로 104
        </p>
        <p>
          <BsFillTelephoneFill /> 02-172-2847
        </p>
      </div>
    </section>
  );
}
