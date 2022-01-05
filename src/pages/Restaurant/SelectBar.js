import React from 'react';
import './SelectBar.scss';

//option에 찍으면 어떻게 처리가 받아오나?
export default function SelectBar({ updateCategories }) {
  return (
    <div>
      <select className="selectOption" onClick={() => updateCategories()}>
        <option value="All">--Please choose an option--</option>
        <option value="ratingStars">별점 순으로</option>
        <option value="reviewsNumbers">리뷰 많은 순으로</option>
      </select>
    </div>
  );
}
