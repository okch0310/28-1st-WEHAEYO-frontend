import React from 'react';
import './Restaurant.scss';

export default function Restaurant({
  resId,
  resImg,
  resName,
  resRates,
  resReviews,
}) {
  //여기는 componet가 구성되어있는 곳
  return (
    <>
      <div className="Restaurant">
        <div className="listImg">
          <img key={resId} alt="restaurantImage" src={resImg} />
        </div>
        <div className="listMain">
          <h3>{resName}</h3>
          <div className="resInfo">
            <span>{resRates}</span> <span>{resReviews}</span>
          </div>
        </div>
      </div>
    </>
  );
}
