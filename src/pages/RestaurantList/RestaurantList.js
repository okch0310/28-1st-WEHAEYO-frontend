import React, { useState, useEffect } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import { useNavigate, useLocation } from 'react-router-dom';
import './RestaurantList.scss';
import Buttons from '../Restaurant/Buttons';
import SelectBar from '../Restaurant/SelectBar';
// import mixin from '../../styles/mixin.scss';

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedKeyword, setKeyword] = useState('');

  useEffect(() => {
    fetch(`http://10.58.0.52:8000/restaurants/list${location.search}`)
      .then(res => res.json())
      .then(result => setRestaurants(result.result));
  }, [location.search]);

  const updateKeywords = buttonKeyword => {
    const keyword = buttonKeyword;

    const queryString = `?category=${keyword}`;

    navigate(`/restaurants/list${queryString}`);
    setKeyword(queryString);
  };

  const updateCategories = optionKeyword => {
    const sortedOption = optionKeyword;
    const sortedqueryString = `sort=${sortedOption}`;

    selectedKeyword
      ? navigate(`/restaurants/list${selectedKeyword}&${sortedqueryString}`)
      : navigate(`/restaurants/list?${sortedqueryString}`);
  };

  return (
    <>
      {restaurants.length > 0 && (
        <div className="restaurantList">
          <div className="listOptions">
            <SelectBar updateCategories={updateCategories} />
            <Buttons updateKeywords={updateKeywords} />
          </div>
          <div className="restaurantListMain">
            {restaurants.map(restaurant => {
              return (
                <Restaurant
                  key={restaurant.id}
                  id={restaurant.id}
                  image={restaurant.image}
                  name={restaurant.name}
                  rating={restaurant.rating === null ? 0 : restaurant.rating}
                  reviews={restaurant.reviews}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
