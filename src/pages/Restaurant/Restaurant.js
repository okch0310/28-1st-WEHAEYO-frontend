import React from 'react';
import './Restaurant.scss';

export default function Restaurant({ image, name, rates, reviews, altName }) {
  //여기는 componet가 구성되어있는 곳
  return (
    <div className="RestaurantContainer">
      <img alt="{altName}" src="{image}" />
      <h1>{name}</h1>
      <span>{rates}</span> <span>{reviews}</span>
    </div>
  );
}
