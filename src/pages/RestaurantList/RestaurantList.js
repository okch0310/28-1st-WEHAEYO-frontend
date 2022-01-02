import React, { useState, useEffect } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import './RestaurantList.scss';

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  const onMenu = event => {
    let menuCategory = [...restaurants];
    if (event.target.value === 'all') {
      setRestaurants(menuCategory);
    }
    if (event.target.value === 'korean') {
      setRestaurants(
        menuCategory.filter(menu => menu.resCategory.includes('한식'))
      );
    }
    if (event.target.value === 'chinese') {
      setRestaurants(
        menuCategory.filter(menu => menu.resCategory.includes('중식'))
      );
    }
    if (event.target.value === 'japanese') {
      setRestaurants(
        menuCategory.filter(menu => menu.resCategory.includes('일식'))
      );
    }
  };

  useEffect(() => {
    fetch('/data/infoList.json')
      .then(res => res.json())
      .then(result => setRestaurants(result));
  }, []);

  const sortByRates = event => {
    if (event.target.value === 'ratingStars') {
      restaurants.sort(function (a, b) {
        if (a.resRates > b.resRates) {
          return -1;
        }
        if (a.resRates < b.resRates) {
          return 1;
        }
        return 0;
      });
      let addResult = [...restaurants];
      setRestaurants(addResult);
    }
  };

  return (
    <div className="restaurantList">
      <select className="selectOption" onChange={sortByRates}>
        <option value="">--Please choose an option--</option>
        <option value="ratingStars">별점 순으로</option>
        <option value="reviewsNumbers">리뷰 많은 순으로</option>
      </select>

      <div className="restaurantMenuTap">
        <ul>
          <li>
            <button value="all" onClick={onMenu}>
              전체보기
            </button>
          </li>
          <li>
            <button value="korean" onClick={onMenu}>
              한식
            </button>
          </li>
          <li>
            <button value="chinese" onClick={onMenu}>
              중식
            </button>
          </li>
          <li>
            <button value="japanese" onClick={onMenu}>
              일식
            </button>
          </li>
        </ul>
      </div>

      <div className="restaurantListMain">
        {restaurants.map(restaurant => {
          return (
            <Restaurant
              key={restaurant.resId}
              resCategory={restaurant.resCategory}
              resImg={restaurant.resImg}
              resName={restaurant.resName}
              resRates={restaurant.resRates}
              resReviews={restaurant.resReviews}
              resAddress={restaurant.resAddress}
              resTelephone={restaurant.resTelephone}
            />
          );
        })}
      </div>
    </div>
  );
}
