import { useContext } from 'react';
import { ModalContext } from './modalContext';
import ModalLayout from './ModalLayout';

export default function Modal() {
  let { isModalOpen, modalContent } = useContext(ModalContext);

  return (
    <div>
      {isModalOpen && (
        <ModalLayout>
          <div className="modal_content">
            <div className="modal_menu">
              <div className="image_container">
                <img
                  alt={modalContent?.menu_title}
                  src={`images/RestaurantDetail/${modalContent?.menu_image}`}
                />
              </div>
              <div className="menu_title">{modalContent?.menu_title}</div>
            </div>
            <div className="modal_options">
              <ul>
                {modalContent?.options.map(option => {
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
              <input type="number" min={1} />
            </div>
          </div>
        </ModalLayout>
      )}
    </div>
  );
}
