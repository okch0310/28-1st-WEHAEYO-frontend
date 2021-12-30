import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/wehaeyo/src/pages/Main');
    // 이후에 상세페이지로 넘어가는 것으로 수정 필요
  };

  return (
    <>
      <div className="Restaurant" onClick={goToMain}>
        <div className="listImg">
          <img key={resId} alt="restaurantImage" src={resImg} />
        </div>
        <div className="listMain">
          <h3>{resName}</h3>
          <div className="resInfo">
            <span className="iconStar">★ 별점: {resRates}</span>
            <span className="reviewNumber">리뷰갯수: {resReviews}</span>
            <p>주소: {resAddress}</p>
            <p>전화번호: {resTelephone}</p>
          </div>
        </div>
      </div>
    </>
  );
}
