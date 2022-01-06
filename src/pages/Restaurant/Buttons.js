import React from 'react';
import './Buttons.scss';

export default function Buttons({ updateKeywords }) {
  return (
    <div className="restaurantMenuTap">
      <button type="button" onClick={() => updateKeywords('')} value="all">
        전체
      </button>
      <button
        type="button"
        onClick={() => updateKeywords('korean')}
        value="korean"
      >
        한식
      </button>
      <button
        type="button"
        onClick={() => updateKeywords('chinese')}
        value="chinese"
      >
        중식
      </button>
      <button
        type="button"
        onClick={() => updateKeywords('japanese')}
        value="japanese"
      >
        일식
      </button>
    </div>
  );
}
