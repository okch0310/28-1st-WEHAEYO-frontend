export default function ModalLayout({ children }) {
  return (
    <div className="modal_layout">
      <div className="modal_header">
        <p>메뉴상세</p>
      </div>
      {children}
      <div className="modal_footer"></div>
    </div>
  );
}
