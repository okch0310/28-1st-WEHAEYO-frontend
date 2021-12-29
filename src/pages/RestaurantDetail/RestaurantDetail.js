import MenuReviewTab from './MenuReviewTab';
import Menus from './Menus';
import RestaurantInfo from './RestaurantInfo';

export default function RestaurantDetail() {
  return (
    <div className="restaurant_detail">
      <main>
        <RestaurantInfo />
        <MenuReviewTab />
        <Menus />
      </main>
    </div>
  );
}
