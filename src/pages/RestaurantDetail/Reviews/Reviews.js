import { RenderStars } from '../../../utils/RenderStars';
import Review from './Review';
import './Reviews.scss';

export default function Reviews({ reviews, rating }) {
  return (
    <div className="reviews">
      <div className="stars">
        {rating}
        <br />
        {RenderStars(rating)}
      </div>
      <div className="review">
        <ul>
          {reviews.map(review => {
            return (
              <Review
                key={review.id}
                name={review.username}
                date={review.updated_at}
                rating={review.rating}
                order={review.order}
                comment={review.content}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
