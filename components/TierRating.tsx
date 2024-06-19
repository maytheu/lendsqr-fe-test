import React from "react";
import Rating from "react-rating";

const TierRating = ({ tier }: { tier: number }) => {
  return (
    <Rating
      readonly
      initialRating={tier}
      stop={3}
      emptySymbol={<img src="/icons/empty_star.png" />}
      fullSymbol={<img src="/icons/full_star.png" />}
    />
  );
};

export default TierRating;
