import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="navInside">
        <h1>
          <Link to="/main">
            WE<span>해요</span>
          </Link>
        </h1>
        <div>
          <button type="button">로그인</button>
          <button type="button">장바구니</button>
        </div>
      </div>
    </div>
  );
}
