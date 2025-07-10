"use strict";
/**
 * 評価を星の数として出力します
 */
const createStars = () => {
  const stars = document.querySelectorAll('.card-review_star');

  stars.forEach(star => {
    const reviewEl = star.querySelector('.card-review_number');
    const review = parseFloat(reviewEl.textContent);
    const roundReview = Math.round(review * 10) / 10;
    const widthPercentage = roundReview * 20;

    star.style.setProperty('--starWidth', `${widthPercentage}%`);
  });
};

document.addEventListener('DOMContentLoaded', createStars);

