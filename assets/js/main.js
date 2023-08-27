$(function(){
    $('.feedback-slider').slick({
      prevArrow:'<button type="button" class="feedback-prev"><i class="fa-solid fa-arrow-left fa-beat" style="color: #091242;"></i></button>',
      nextArrow:'<button type="button" class="feedback-next"><i class="fa-solid fa-arrow-right fa-beat" style="color: #091242;"></i></button>'
    });

    $('.goods-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      });
});

$(".toggle-btn").click(function(e) {
	e.preventDefault();
  $(this).prev().toggleClass("text-open")
})