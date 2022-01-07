import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ModalProvider } from './modalContext';
import { DEV_URL } from '../../config';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import RestaurantInfo from './RestaurantInfo';
import Tabs from './Tabs';
import Menus from './Menus/Menus';
import Reviews from './Reviews/Reviews';
import './RestaurantDetail.scss';

export default function RestaurantDetail() {
  const [menus, setMenus] = useState();
  const [reviews, setReviews] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  const restaurantId = useParams();

  useEffect(() => {
    fetch(`${DEV_URL}/${restaurantId.id}`)
      .then(res => res.json())
      .then(result => setMenus(result.restaurants_detail));

    fetch('/data/RestaurantDetail/restaurantreview.json')
      .then(res => res.json())
      .then(result => setReviews(result));
    return () => {};
  }, [restaurantId.id]);

  const selectTabMenu = idx => {
    setCurrentTab(idx);
  };

  const navigate = useNavigate();
  const goBackToList = () => {
    navigate(-1);
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
        <div className="go_back_btn">
          <button type="button" onClick={goBackToList}>
            <AiOutlineArrowLeft />
            <span>&nbsp;목록으로</span>
          </button>
        </div>
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
            <Menus
              menus={menus.category.filter(menu => menu.category_id !== 1)}
              signature={menus.category[0].food}
            />
          </ModalProvider>
        ) : (
          <Reviews reviews={reviews.reviews} rating={menus.rating} />
        )}
      </main>
    </div>
  );
}
