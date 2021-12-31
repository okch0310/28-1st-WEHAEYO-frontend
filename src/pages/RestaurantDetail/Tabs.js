export default function Tabs({ selectTabMenu, currentTab }) {
  return (
    <div className="tabs">
      <ul>
        <li
          className={currentTab === 0 ? 'active' : ''}
          onClick={() => selectTabMenu(0)}
        >
          메뉴
        </li>
        <li
          className={currentTab === 1 ? 'active' : ''}
          onClick={() => selectTabMenu(1)}
        >
          리뷰
        </li>
      </ul>
    </div>
  );
}
