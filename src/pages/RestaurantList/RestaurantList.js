import React, { useState, useEffect } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import { useNavigate, useLocation } from 'react-router-dom';
import './RestaurantList.scss';
import Buttons from '../Restaurant/Buttons';

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);  

  //데이터 로딩
  useEffect(() => {
    fetch(`{API}/user${location.search}`)
      .then(res => res.json())
      .then(result => setRestaurants(result));
  }, [location.search]);

  const updateKeywords = (buttonKeyword) => {
    const keyword = 'buttonKeyword';
    const queryString =`keyword=${keyword}`; 
    console.log(keyword);
    console.log(queryString);

    navigate(queryString);
  };

  return (
    <div className="restaurantList">
      <select className="selectOption" onChange={}>
        <option value="">--Please choose an option--</option>
        <option value="ratingStars">별점 순으로</option>
        <option value="reviewsNumbers">리뷰 많은 순으로</option>
      </select>

      <div className="restaurantListMain">
        {restaurants.map(restaurant => {
          return (
            <Buttons updateKeywords={updateKeywords}/>
            <Restaurant
              key={restaurant.id}
              img={restaurant.img}
              name={restaurant.name}
              rates={restaurant.rates}
              reviews={restaurant.reviews}
            />
          );
        })}
      </div>
    </div>
  );
}