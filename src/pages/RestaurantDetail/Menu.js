import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Menu({ category_name, foods }) {
  return (
    <div className="menu">
      <div className="menu_category">
        <span>{category_name}</span>
        <MdKeyboardArrowDown />
      </div>
      <div className="menu_content">
        <ul>
          {foods.map(food => {
            return (
              <li key={food.id}>
                <div className="menu_title">
                  <h4>{food.menu_title}</h4>
                  <p>{food.price}원</p>
                </div>
                <div className="menu_photo">
                  <img
                    alt={`${food.menu_title}`}
                    src={`images/RestaurantDetail/${food.menu_image}`}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
