import React from 'react';
import './NavBar.scss';

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="navInside">
        <h1>
          WE<span>해요</span>
        </h1>
        <div>
          <button type="button">로그인</button>
          <button type="button">장바구니</button>
        </div>
      </div>
    </div>
  );
}
