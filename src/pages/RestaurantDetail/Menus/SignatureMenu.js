import { useContext, useEffect, useRef, useState } from 'react';
import { ModalContext } from '../modalContext';
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io';

export default function SignatureMenu({ signatures }) {
  let { openModal } = useContext(ModalContext);
  const [isValidMoveMenu, setIsValidMoveMenu] = useState(true);
  const menuList = useRef(null);

  useEffect(() => {
    const sliderBox = menuList.current;
    const imageLiWidth = sliderBox.firstChild.clientWidth;
    const imageLiLength = sliderBox.childNodes.length;
    const imageTotalWidth = imageLiWidth * imageLiLength + imageLiLength * 20;
    const moveDistance = imageTotalWidth - sliderBox.clientWidth;

    if (isValidMoveMenu === false) {
      sliderBox.style.transform = `translateX(${-moveDistance}px)`;
    } else {
      sliderBox.style.transform = `translateX(0)`;
    }
  }, [isValidMoveMenu]);

  const slideToPrevImage = () => {
    if (isValidMoveMenu === false) setIsValidMoveMenu(true);
  };

  const slideToNextImage = () => {
    if (isValidMoveMenu === true) setIsValidMoveMenu(false);
  };

  return (
    <div className="signature_menu">
      <ul ref={menuList}>
        {signatures.map((signature, idx) => {
          return (
            <li
              key={idx}
              id={signature.id}
              onClick={() => openModal(signature.id)}
            >
              <img
                alt={signature.name}
                src={`images/RestaurantDetail/${signature.image}`}
              />
              <div className="menu_info">
                <p>{signature.name}</p>
                <p>{signature.price}원</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          type="button"
          className={isValidMoveMenu ? 'hidden' : ''}
          onClick={slideToPrevImage}
        >
          <IoMdArrowDropleftCircle />
        </button>
        <button
          type="button"
          className={isValidMoveMenu ? '' : 'hidden'}
          onClick={slideToNextImage}
        >
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
}
