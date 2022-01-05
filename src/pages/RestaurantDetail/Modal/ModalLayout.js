import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../modalContext';
import { GrClose } from 'react-icons/gr';
import Toast from '../Toast/Toast';
import './Modal.scss';

export default function ModalLayout({ children }) {
  let { closeModal } = useContext(ModalContext);
  const [isActiveToast, setIsActiveToast] = useState(false);

  const submitMenuOrder = () => {
    setIsActiveToast(true);
  };
  useEffect(() => {
    if (isActiveToast) {
      setTimeout(() => {
        setIsActiveToast(false);
      }, 2000);
    }
  }, [isActiveToast]);

  return (
    <>
      <div className="overlay" onClick={closeModal} />
      <div className="modal_layout">
        <div className="modal_header">
          <p>메뉴상세</p>
          <button type="button" onClick={closeModal}>
            <GrClose />
          </button>
        </div>
        {children}
        <div className="modal_footer">
          <button type="button" onClick={closeModal}>
            취소하기
          </button>
          <button type="button" onClick={submitMenuOrder}>
            장바구니에 담기
          </button>
        </div>
      </div>
      {isActiveToast && <Toast />}
    </>
  );
}
