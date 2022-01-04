import { useContext, useState } from 'react';
import { ModalContext } from './modalContext';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import ModalLayout from './ModalLayout';

export default function Modal() {
  let { isModalOpen, modalContent } = useContext(ModalContext);
  const [menuAmount, setMenuAmount] = useState(1);

  const getMenuAmount = e => {
    setMenuAmount(e.target.value);
  };

  const increaseMenuAmount = plusMinus => {
    setMenuAmount(plusMinus + Number(menuAmount));
  };
  console.log(menuAmount);

  const isDisabled = Number(menuAmount) > 1;

  return (
    <div>
      {isModalOpen === true && modalContent && (
        <ModalLayout>
          <div className="modal_content">
            <div className="modal_menu">
              <div className="image_container">
                <img
                  alt={modalContent.menu_title}
                  src={`images/RestaurantDetail/${modalContent.menu_image}`}
                />
              </div>
              <div className="menu_title">{modalContent.menu_title}</div>
              <div className="menu_price">
                <p>가격</p>
                <p>{modalContent.menu_price}원</p>
              </div>
            </div>
            <div className="modal_options">
              <ul>
                {modalContent.options.map(option => {
                  return (
                    <li key={option.option_id}>
                      <label htmlFor={'option' + option.option_id}>
                        <div className="radio_option">
                          <input
                            type="radio"
                            name="menu_option"
                            id={'option' + option.option_id}
                          />
                          {option.content}
                        </div>
                        <div className="option_price">+ {option.price}원</div>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="menu_amount">
              <p>수량</p>
              <div>
                <button
                  type="button"
                  disabled={!isDisabled}
                  onClick={() => increaseMenuAmount(-1)}
                >
                  <HiMinusSm />
                </button>
                <input
                  type="number"
                  min={1}
                  value={menuAmount}
                  onChange={getMenuAmount}
                />
                <button type="button" onClick={() => increaseMenuAmount(1)}>
                  <HiPlusSm />
                </button>
              </div>
            </div>
          </div>
        </ModalLayout>
      )}
    </div>
  );
}
