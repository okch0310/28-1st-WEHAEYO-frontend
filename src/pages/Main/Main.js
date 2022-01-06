import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

export default function Main() {
  const [foodKindList, setFoodKindList] = useState({});
  useEffect(() => {
    fetch('http://10.58.0.52:8000/restaurants/categories', { method: 'GET' }) //method get 은 생략 가능
      .then(res => res.json())
      .then(res => setFoodKindList(res.result));
  }, []);
  const navigate = useNavigate();
  function selectMenuCategory(category_name) {
    if (category_name === '한식') {
      navigate('/restaurants/list?category=korean');
    } else if (category_name === '중식') {
      navigate('/restaurants/list?category=chinese');
    } else {
      navigate('/restaurants/list?category=japanese');
    }
  }

  return (
    <div className="Main">
      <div className="mainPageSearch">
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
      <div className="mainPageSelect">
        <div className="foodKindList">
          {foodKindList.length &&
            foodKindList.map((ele, idx) => {
              return (
                <div
                  className="foodKind"
                  key={idx}
                  onClick={() => selectMenuCategory(ele.category_name)}
                >
                  <img src={ele.image_url} alt="대체이미지" />
                  <div className="foodName">{ele.category_name}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
