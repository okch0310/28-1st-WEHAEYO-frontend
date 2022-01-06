import React from 'react';
import './Buttons.scss';

export default function Buttons({ updateKeywords }) {
  return (
    <div className="restaurantMenuTap">
      <button type="button" onClick={() => updateKeywords('')} value="all">
        전 체
      </button>
      <button
        type="button"
        onClick={() => updateKeywords('korean')}
        value="korean"
      >
        한 식
      </button>
      <button
        type="button"
        onClick={() => updateKeywords('chinese')}
        value="chinese"
      >
        중 식
      </button>
      <button
        type="button"
        onClick={() => updateKeywords('japanese')}
        value="japanese"
      >
        일 식
      </button>
    </div>
  );
}
