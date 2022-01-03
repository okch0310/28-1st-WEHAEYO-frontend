import { useContext } from 'react';
import { ModalContext } from './modalContext';
import ModalLayout from './ModalLayout';

export default function Modal() {
  let { isModalOpen, modalContent } = useContext(ModalContext);

  return (
    <div>
      {isModalOpen && (
        <ModalLayout>
          <div className="modal">
            <div className="modal_content">
              <div className="modal_menu">
                <img
                  alt={modalContent?.menu_title}
                  src={`images/RestaurantDetail/${modalContent?.menu_image}`}
                />
                <p>{modalContent?.menu_title}</p>
              </div>
              <div className="modal_options">
                <ul>
                  {modalContent?.options.map(option => {
                    return (
                      <li key={option.option_id}>
                        <input type="radio" name="menu_option" />
                        {option.content}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </ModalLayout>
      )}
    </div>
  );
}
