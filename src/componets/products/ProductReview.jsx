import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './ProductReview.css';

const ProductReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newReview = {
      id: Date.now(),
      rating,
      comment,
      userName: 'Guest User',
      date: new Date().toLocaleDateString()
    };

    setReviews([newReview, ...reviews]);
    setRating(0);
    setComment('');
  };

  return (
    <section className="review-container">
      <div className="review-header">
        <h3>Customer Reviews</h3>
      </div>

      <form className="review-form" onSubmit={handleSubmit}>
        <div className="rating-container">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <button
                type="button"
                key={index}
                onClick={() => setRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              >
                <FaStar 
                  color={ratingValue <= (hover || rating) 
                    ? 'var(--clr-primary-5)' 
                    : 'var(--clr-grey-8)'}
                />
              </button>
            );
          })}
        </div>

        <textarea
          className="review-input"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts about this product..."
          required
        />

        <button 
          className="submit-btn"
          type="submit"
          disabled={!rating || !comment.trim()}
        >
          Submit Review
        </button>
      </form>

      <div className="reviews-list">
        {reviews.map((review) => (
          <article className="review-item" key={review.id}>
            <div className="review-header">
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    color={index < review.rating 
                      ? 'var(--clr-primary-5)' 
                      : 'var(--clr-grey-8)'}
                  />
                ))}
              </div>
              <span className="review-info">
                {review.userName} • {review.date}
              </span>
            </div>
            <p className="review-text">{review.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductReview;