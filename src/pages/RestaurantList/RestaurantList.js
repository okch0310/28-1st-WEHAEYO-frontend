import React, { useState, useEffect } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import './RestaurantList.scss';

export default function RestaurantList() {
  // component를 구성해서 map을 돌린다.
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/data/infoList.json')
      .then(res => res.json())
      .then(result => setRestaurants(result));
  }, []);

  return (
    <div className="RestaurantList">
      {restaurants.map(restaurant => {
        return (
          <Restaurant
            key={restaurant.resId}
            resImg={restaurant.resImg}
            resName={restaurant.resName}
            resRates={restaurant.resRates}
            resReviews={restaurant.resReviews}
          />
        );
      })}
    </div>
  );
}
