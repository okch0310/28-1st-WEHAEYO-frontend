import { useContext, useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ModalContext } from '../modalContext';

export default function Menu({ category_name, foods, id }) {
  let { openModal } = useContext(ModalContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsingMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const isFirstCategory = id === 1;
    if (isFirstCategory) {
      setIsCollapsed(isFirstCategory);
    }
  }, [id]);

  return (
    <div className="menu">
      <div className="category" onClick={toggleCollapsingMenu}>
        <span>{category_name}</span>
        <MdKeyboardArrowDown className={isCollapsed ? 'collapsed' : ''} />
      </div>
      <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
        <ul>
          {foods.map(food => {
            return (
              <li key={food.id} onClick={() => openModal(food.id)}>
                <div className="title">
                  <h4>{food.menu_title}</h4>
                  <p>{food.price}원</p>
                </div>
                <div className="photo">
                  <img
                    alt={food.menu_title}
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
