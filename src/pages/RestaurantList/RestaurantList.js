import React, { useState, useEffect } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import './RestaurantList.scss';

export default function RestaurantList() {
  // component를 구성해서 map을 돌린다.
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/infoList.json')
      .then(res => res.json())
      .then(result => setRestaurants(result));
  }, []);

  return (
    <div className="restaurantName">
      {restaurants.map(restaurant => {
        return (
          <Restaurant
            key={restaurant.Res_id}
            Res_img={restaurant.Res_img}
            Res_name={restaurant.Res_name}
            Rates={restaurant.Rates}
            Reviews={restaurant.Reviews}
            Reviews={restaurant.Reviews}
          />
        );
      })}
    </div>
  );
}
