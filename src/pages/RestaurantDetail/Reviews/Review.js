import { RenderStars } from '../../../utils/RenderStars';

export default function Review({ name, date, order, rating, comment }) {
  return (
    <li>
      <p className="user">
        {name}님 <span>{date}</span>
      </p>
      <div className="rating">
        {RenderStars(rating)}
        &nbsp;{rating}점
      </div>
      <p className="order">{order}</p>
      <p className="comment">{comment}</p>
    </li>
  );
}
