interface ReviewProps {
  date: string;
  documentId: string;
  rating: number;
  review: string;
  users_permissions_user: {
    username: string;
  };
}

export const calculateAverageRating = (reviews: ReviewProps[]) => {
  if (reviews.length === 0) return 0; // Avoid division by zero
  const total = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
  const average = total / reviews.length;

  return Math.min(Math.max(average, 0), 5); // Ensuring the value is within 0-5 range
};
