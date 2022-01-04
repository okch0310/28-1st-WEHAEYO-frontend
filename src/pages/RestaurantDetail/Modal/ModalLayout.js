import { useContext } from 'react';
import { ModalContext } from '../modalContext';
import { GrClose } from 'react-icons/gr';
import './Modal.scss';

export default function ModalLayout({ children }) {
  let { closeModal } = useContext(ModalContext);

  return (
    <div className="overlay" onClick={closeModal}>
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
          <button type="button">장바구니에 담기</button>
        </div>
      </div>
    </div>
  );
}
