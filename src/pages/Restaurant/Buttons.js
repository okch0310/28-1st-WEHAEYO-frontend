import React from 'react';
import './Buttons.scss';

export default function Buttons({ updateKeywords }) {
  return (
    <div className="restaurantMenuTap">
      <button onClick={() => updateKeywords('All')} value="all">
        전체보기
      </button>
      <button onClick={() => updateKeywords('korean')} value="korean">
        한식
      </button>
      <button onClick={() => updateKeywords('chinese')} value="chinese">
        중식
      </button>
      <button onClick={() => updateKeywords('japanese')} value="japanese">
        일식
      </button>
    </div>
  );
}
