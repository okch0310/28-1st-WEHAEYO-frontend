import Tabs from './Tabs';
import Menus from './Menus/Menus';
import RestaurantInfo from './RestaurantInfo';
import Reviews from './Reviews/Reviews';
import { useEffect, useState } from 'react';
import { ModalProvider } from './modalContext';

export default function RestaurantDetail() {
  const [menus, setMenus] = useState();
  const [reviews, setReviews] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    fetch('/data/RestaurantDetail/restaurantinfo.json')
      .then(res => res.json())
      .then(result => setMenus(result));

    fetch('/data/RestaurantDetail/restaurantreview.json')
      .then(res => res.json())
      .then(result => setReviews(result));
    return () => {};
  }, []);

  const selectTabMenu = idx => {
    setCurrentTab(idx);
  };

  if (!menus || !reviews) {
    return (
      <div className="restaurant_detail">
        <div className="loading">
          <img alt="로딩" src="images/RestaurantDetail/loading.gif" />
        </div>
      </div>
    );
  }

  return (
    <div className="restaurant_detail">
      <main>
        <RestaurantInfo
          title={menus.name}
          image={menus.restaurant_img}
          address={menus.address}
          phone={menus.phone}
          rating={menus.rating}
        />
        <Tabs selectTabMenu={selectTabMenu} currentTab={currentTab} />
        {currentTab === 0 ? (
          <ModalProvider>
            <Menus menus={menus.category} signature={menus.signature_menu} />
          </ModalProvider>
        ) : (
          <Reviews reviews={reviews.reviews} rating={menus.rating} />
        )}
      </main>
    </div>
  );
}
