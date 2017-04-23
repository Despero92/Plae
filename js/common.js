$(document).ready(function () {
    var mySwiper = new Swiper ('.header_slider-wrapper .swiper-container', {
        direction: 'vertical',
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        speed: 500,
        pagination: '.swiper-pagination',
        //effect: 'fade',
        autoplay: 5000,
        loop: true
    })
});
$(document).ready(function () {
    var mySwiper = new Swiper ('.container_range .swiper-container', {
        direction: 'horizontal',
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        speed: 500,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    })
    $(".container_range .swiper-button-prev").append("<i class=\"fa fa-angle-left fa-4x\" aria-hidden=\"true\"></i>");
    $(".container_range .swiper-button-next").append("<i class=\"fa fa-angle-right fa-4x\" aria-hidden=\"true\"></i>");
});