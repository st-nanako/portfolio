"use strict";

/**
 * 評価を星の数として出力します
 */
const createStar = () => {
  const starElement = document.querySelector('.card-review_star');
  const review = document.querySelector('.card-review_number').textContent;
  const roundReview = Math.round(review * 10) / 10;
  const widthPercentage = roundReview * 20;
  starElement.style.setProperty('--starWidth', `${widthPercentage}%`);
};

createStar();

$('.fa').on('mouseover', function(){
  var $this = $(this);
  $this.nextAll().removeClass('fa-star').addClass( "fa-star-o" );
  $this.prevAll().removeClass( "fa-star-o" ).addClass('fa-star');
  $this.removeClass( "fa-star-o" ).addClass('fa-star');
});
$('.fa').one('click',function(){
 var $this = $(this); $this.addClass('active').siblings().removeClass('active');
});
$('.fa').on('mouseleave', function(){
  var select = $('.active');
  select.nextAll().removeClass('fa-star').addClass('fa-star-o');
  select.prevAll().removeClass('fa-star-o').addClass('fa-star');
  select.removeClass('fa-star-o').addClass('fa-star');
});