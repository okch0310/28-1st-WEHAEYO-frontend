import Tabs from './Tabs';
import Menus from './Menus';
import RestaurantInfo from './RestaurantInfo';
import Reviews from './Reviews';
import { useEffect, useState } from 'react';

export default function RestaurantDetail() {
  const [menus, setMenus] = useState();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/RestaurantDetail/restaurantinfo.json')
      .then(res => res.json())
      .then(result => setMenus(result));
    return () => {};
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/RestaurantDetail/restaurantreview.json')
      .then(res => res.json())
      .then(result => setReviews(result));
    return () => {};
  }, []);

  if (!menus || !reviews) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="restaurant_detail">
      <main>
        <RestaurantInfo
          title={menus.title}
          image={menus.image}
          address={menus.address}
          phone={menus.phone}
          rating={menus.rating}
        />
        {/* 여기부터 아래는 children 사용하여 탭메뉴에서 Menu와 Review 컴포넌트를 각각 보여주도록 할 예정 */}
        <Tabs />
        <Menus menus={menus.category} signature={menus.signature_menu} />
        {/* <Reviews reviews={reviews} rating={menus.rating} /> */}
      </main>
    </div>
  );
}
