import MenuReviewTab from './MenuReviewTab';
import RestaurantInfo from './RestaurantInfo';
import SignatureMenu from './SignatureMenu';

export default function RestaurantDetail() {
  return (
    <div className="restaurant_detail">
      <main>
        <RestaurantInfo />
        <MenuReviewTab />
        <div className="content">
          <SignatureMenu />
        </div>
      </main>
    </div>
  );
}
