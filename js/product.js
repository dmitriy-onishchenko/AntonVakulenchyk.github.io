$(document).ready(function(){

    $('.delivery').tooltip();

    var windowScrollTop;
    var descriptionTop;
    $(window).on('scroll resize', function(){
        windowScrollTop = $(window).scrollTop();
        descriptionTop = $('#description').offset().top;
        if(windowScrollTop - 50 > descriptionTop && $(window).width() > 992) {
            $('.fixed-head').addClass('fix');
        } else {
            $('.fixed-head').removeClass('fix');
        }
    });

    $('.image-wrapp .image').click(function(e){
        $('#imagesGallery').modal();
        $('.featuredPostSlider').slick('slickGoTo', parseInt($(e.target).data('index')));
    });

    $('.featuredPostSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: false,
        adaptiveHeight: false,
        asNavFor: '.slick-pager',
        responsive: [{
            breakpoint: 567,
            settings: {
                arrows: true,
                fade: false,
                prevArrow: '<div class="slick-prev"><img src="img/slider-arrow-left_mobile.svg"></div>',
                nextArrow: '<div class="slick-next"><img src="img/slider-arrow-right_mobile.svg"></div>'
            }
        }]
    });

    $('.slick-pager').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: $('#next-slide'),
        prevArrow: $('#prev-slide'),
        asNavFor: '.featuredPostSlider',
        focusOnSelect: true,
        vertical: true,
        draggable: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                vertical: false
            }
        }]
    });
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };


    $('.images-grid').on('init', function(){
         $('.slick-arrow').on('mousedown touchstart',function(){
            $(this).addClass('focus');
        });
         $('.slick-arrow').on('mousedown touchend',function(){
            $(this).removeClass('focus');
        });
    });
    
    if(isMobileDevice() & $(window).width() < 767) {
        console.log('qqq');
        $('.images-grid').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $('.slide-counter').text(i + '/' + slick.slideCount);
        });

        if(!$('.images-grid').hasClass('slick-initialized')) {
            $('.images-grid').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<div class="slick-prev"><img src="img/slider-arrow-left_mobile.svg"></div>',
                nextArrow: '<div class="slick-next"><img src="img/slider-arrow-right_mobile.svg"></div>'
            });    
        }
    }

   
   
    
    

});

