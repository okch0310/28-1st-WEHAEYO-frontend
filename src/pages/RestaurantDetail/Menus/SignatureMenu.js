import { useContext, useEffect, useRef, useState } from 'react';
import { ModalContext } from '../modalContext';
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io';

export default function SignatureMenu({ signatures }) {
  let { openModal } = useContext(ModalContext);
  const menuList = useRef(null);
  const [currentMenuIdx, setCurrentMenuIdx] = useState(0);

  useEffect(() => {
    const sliderBox = menuList.current;
    const imageLiWidth = sliderBox.firstChild.clientWidth;
    const imageTotalWidth =
      imageLiWidth * sliderBox.childNodes.length +
      (sliderBox.childNodes.length - 1) * 20;
    const moveDistance =
      (imageTotalWidth - sliderBox.clientWidth) * currentMenuIdx;

    sliderBox.style.transform = `translateX(${-moveDistance}px)`;
  }, [currentMenuIdx]);

  const slideToPrevImage = () => {
    if (currentMenuIdx > 0) {
      setCurrentMenuIdx(currentMenuIdx - 1);
    }
  };

  const slideToNextImage = () => {
    if (currentMenuIdx < menuList.current.childNodes.length - 1)
      setCurrentMenuIdx(currentMenuIdx + 1);
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
                alt={signature.menu_title}
                src={`images/RestaurantDetail/${signature.menu_image}`}
              />
              <div className="menu_info">
                <p>{signature.menu_title}</p>
                <p>{signature.price}원</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <button type="button">
          <IoMdArrowDropleftCircle onClick={slideToPrevImage} />
        </button>
        <button type="button" onClick={slideToNextImage}>
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
}
