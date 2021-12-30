import MenuReviewTab from './MenuReviewTab';
import Menus from './Menus';
import RestaurantInfo from './RestaurantInfo';
import Reviews from './Reviews';

export default function RestaurantDetail() {
  return (
    <div className="restaurant_detail">
      <main>
        <RestaurantInfo />
        <MenuReviewTab />
        {/* <Menus /> */}
        <Reviews />
      </main>
    </div>
  );
}
