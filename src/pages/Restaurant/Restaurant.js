import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Restaurant.scss';

export default function Restaurant({ category, img, name, rates, reviews }) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate('/restaurants/detail/');
    //id등의 정보를 담아서 가야함 `/restaurants/detail/${props.id}`
  };

  return (
    <>
      <div className="restaurant" onClick={goToDetail}>
        <div className="listImg">
          <img alt="restaurantImage" src={img} />
        </div>
        <div className="listMain">
          <h2>{name}</h2>
          <div className="resInfo">
            <p>{category}</p>
            <span className="iconStar">★ 별점: {rates}</span>
            <span className="reviewNumber">리뷰갯수: {reviews}</span>
          </div>
        </div>
      </div>
    </>
  );
}
