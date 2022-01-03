import { useContext } from 'react';
import { ModalContext } from './modalContext';
import { GrClose } from 'react-icons/gr';

export default function ModalLayout({ children }) {
  let { closeModal } = useContext(ModalContext);
  return (
    <div className="overlay">
      <div className="modal_layout">
        <div className="modal_header">
          <p>메뉴상세</p>
          <GrClose onClick={closeModal} />
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
