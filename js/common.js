$(document).ready(function(){

    $('.product-view a').click(function(e){
        e.preventDefault();
        let view = $(this).data('view');
        if(!$(this).hasClass('active')) {
            $('.product-view a').toggleClass('active');    
        }
        if(view == "grid") {
          $('#products').addClass('grid-view').removeClass('list-view');
        } else {
          $('#products').removeClass('grid-view').addClass('list-view');
        }
    });

    $('.delivery').tooltip();

    $('#rateBlock label').on('mouseenter', function(){
        $('.hoverText').html($(this).data('text'));
    });

    $('#rateBlock label').on('mouseleave', function(){
        if($('#rateBlock input:checked').length === 0) {
            $('.hoverText').html('');    
        }
        $('.hoverText').html($('#rateBlock input:checked').next('label').data('text'));
        $('#rateBlock input:checked').next('label').addClass('checked');
    });

    var windowScrollTop;
    var descriptionTop;
    $(window).on('scroll resize', function(){
        windowScrollTop = $(window).scrollTop();
        descriptionTop = $('#description').offset().top;
        if(windowScrollTop - 50 > descriptionTop) {
            $('.fixed-head').addClass('fix');
        } else {
            $('.fixed-head').removeClass('fix');
        }
    });

    $('.image-wrapp .image').click(function(e){
        $('#imagesGallery').modal();
        console.log($(e.target).data('index'));
    });



    function slickHeight() {
      var winWidth = $(window).width();
        if (winWidth > 767) {
            var sliderHeight = $('.slick-slider').height();
            console.log(sliderHeight);
            $('#slick-pager .slick-pager').css('height', sliderHeight - 60);
        }
    }
    $( window ).resize(function() {
        slickHeight();
    });

        $('.featuredPostSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            adaptiveHeight: true,
            asNavFor: '.slick-pager'
        });
        $('.slick-pager').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: $('.pagerNavigation .bottom'),
            prevArrow: $('.pagerNavigation .top'),
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
        slickHeight();

});
