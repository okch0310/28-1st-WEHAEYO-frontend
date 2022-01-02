import { useContext } from 'react';
import { ModalContext } from './modalContext';
import ModalLayout from './ModalLayout';

export default function Modal(props) {
  let { isModalOpen, handleModal, modalContent } = useContext(ModalContext);
  console.log(modalContent);

  return (
    <>
      {isModalOpen && (
        <ModalLayout>
          <div className="modal">
            <div className="modal_content">
              <img
                alt={modalContent?.menu_title}
                src={`images/RestaurantDetail/${modalContent?.signature_menu[0].menu_image}`}
              />
              <p>빅맥</p>
            </div>
          </div>
        </ModalLayout>
      )}
    </>
  );
}
