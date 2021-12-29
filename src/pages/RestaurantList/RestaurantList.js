import React, { useState, useEffect } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import './RestaurantList.scss';

export default function RestaurantList() {
  // component를 구성해서 map을 돌린다.
  const [restaurants, setStores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/infoList.json')
      .then(res => res.json())
      .then(result => setStores(result));
  }, []);

  return (
    <div className="restaurantName">
      {restaurants.map(restaurant => {
        return (
          <>
            <Restaurant
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
            />
          </>
        );
      })}
    </div>
  );
}
