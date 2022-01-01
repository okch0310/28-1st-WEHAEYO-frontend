export default function SignatureMenu({ signatures }) {
  return (
    <div className="signature_menu">
      <ul>
        {signatures.map(signature => {
          return (
            <li key={signature.id}>
              <img
                alt={signature.menu_title}
                src={`images/RestaurantDetail/${signature.menu_image}`}
              />
              <div className="menu_info">
                <h4>{signature.menu_title}</h4>
                <p>{signature.price}원</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
