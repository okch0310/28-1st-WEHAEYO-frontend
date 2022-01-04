import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './Main.scss';

export default function Main() {
  const [foodKindList, setFoodKindList] = useState({});
  useEffect(() => {
    fetch('', { method: 'GET' }) //method get 은 생략 가능
      .then(res => res.json())
      .then(res => setFoodKindList(res));
  }, []);
  return (
    <div className="Main">
      <div className="mainPage1">
        <img
          className="mainImg"
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="메인이미지"
        />
        <div className="mainSearchWrap">
          <input className="mainInput" placeholder="검색" />
          <button className="mainBtn">검색</button>
        </div>
      </div>
      <div className="mainPage2">
        <div className="foodKindList">
          {foodKindList.map((ele, idx) => {
            return (
              <div className="foodKind" key={idx}>
                <div>{ele.category_name}</div>
                <img src={ele.img_url} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
