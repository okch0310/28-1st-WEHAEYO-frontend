import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu_category">
        <span>햄버거</span>
        <MdKeyboardArrowDown />
      </div>
      <div className="menu_content">
        <ul>
          <li>
            <div className="menu_title">
              <h4>빅맥</h4>
              <p>5000원</p>
            </div>
            <div className="menu_photo">
              <img alt="빅맥" src="images/RestaurantDetail/bigmac.png" />
            </div>
          </li>
          <li>
            <div className="menu_title">
              <h4>리치포테이토버거</h4>
              <p>8500원</p>
            </div>
            <div className="menu_photo">
              <img
                alt="리치포테이토버거"
                src="images/RestaurantDetail/richpotatoburger.png"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
