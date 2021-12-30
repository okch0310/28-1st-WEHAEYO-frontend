import React from 'react';
import './Restaurant.scss';

export default function Restaurant({
  resId,
  resImg,
  resName,
  resRates,
  resReviews,
  resAddress,
  resTelephone,
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
            <span>별점: {resRates}</span>{' '}
            <span className="reviewNumber">리뷰수: {resReviews}</span>
            <p>주소: {resAddress}</p>
            <p>전화번호: {resTelephone}</p>
          </div>
        </div>
      </div>
    </>
  );
}
