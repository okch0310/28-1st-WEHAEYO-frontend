import React, { useState, useEffect } from 'react';
import './SelectBar.scss';

//option에 찍으면 어떻게 처리가 받아오나?
export default function SelectBar({ updateCategories }) {
  const [selectedOption, setSelect] = useState('');

  useEffect(() => {
    updateCategories(selectedOption);
  }, []);

  return (
    <div>
      <select
        className="selectOption"
        onChange={e => setSelect(e.target.value)}
      >
        <option selected value="all">
          --Please choose an option--
        </option>
        <option value="avg_rating">별점 순으로</option>
        <option value="reviews">리뷰 많은 순으로</option>
      </select>
    </div>
  );
}
