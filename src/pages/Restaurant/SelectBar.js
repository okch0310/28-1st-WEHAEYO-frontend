import React, { useState, useEffect } from 'react';
import './SelectBar.scss';

export default function SelectBar({ updateCategories }) {
  const [selectedOption, setSelectOption] = useState('');

  useEffect(() => {
    selectedOption && updateCategories(selectedOption);
  }, [selectedOption]);

  return (
    <div className="selectBar">
      <select
        className="selectOption"
        onChange={e => setSelectOption(e.target.value)}
      >
        <option value="all">옵션을 선택해주세요</option>
        <option value="-avg_rating">별점 순으로</option>
        <option value="-review_count">리뷰 많은 순으로</option>
      </select>
    </div>
  );
}
