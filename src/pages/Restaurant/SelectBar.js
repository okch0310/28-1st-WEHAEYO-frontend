import React from 'react';
import './SelectBar.scss';

export default function SelectBar() {
  return (
    <div>
      <select className="selectOption" onClick={() => updateCategories()}>
        <option value="">--Please choose an option--</option>
        <option value="ratingStars">별점 순으로</option>
        <option value="reviewsNumbers">리뷰 많은 순으로</option>
      </select>
    </div>
  );
}
