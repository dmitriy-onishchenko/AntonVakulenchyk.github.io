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
        $('.featuredPostSlider').slick('slickGoTo', parseInt($(e.target).data('index')));
    });

    $('.featuredPostSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: false,
        adaptiveHeight: false,
        asNavFor: '.slick-pager'
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

    

});


// var img_ele = null;

// function zoom(zoomincrement) {
//   img_ele = document.getElementById('drag-img');
//   var pre_width = img_ele.getBoundingClientRect().width,
//         pre_height = img_ele.getBoundingClientRect().height;
//   img_ele.style.width = (pre_width * zoomincrement) + 'px';
//   img_ele.style.height = (pre_height * zoomincrement) + 'px';
//   img_ele = null;
// }

// document.getElementById('zoomout').addEventListener('click', function() {
//   zoom(0.5);
// });
// document.getElementById('zoomin').addEventListener('click', function() {
//   zoom(1.5);
// });

// function start_drag() {
//   img_ele = this;
//   x_img_ele = window.event.clientX - document.getElementById('drag-img').offsetLeft;
//   y_img_ele = window.event.clientY - document.getElementById('drag-img').offsetTop;
//     console.log("start drag");
// }

// function stop_drag() {
//   img_ele = null;
//   console.log("stop drag");
// }

// function while_drag() {
//   var x_cursor = window.event.clientX;
//   var y_cursor = window.event.clientY;
//   if (img_ele !== null) {
//     img_ele.style.left = (x_cursor - x_img_ele) + 'px';
//     img_ele.style.top = ( window.event.clientY - y_img_ele) + 'px';
//       console.log('dragging > img_left:' + img_ele.style.left+' | img_top: '+img_ele.style.top);
//   }
// }

// document.getElementById('drag-img').addEventListener('mousedown', start_drag);
// document.getElementById('container').addEventListener('mousemove', while_drag);
// document.getElementById('container').addEventListener('mouseup', stop_drag);

var img_ele = null;

function zoom(zoomincrement) {
  img_ele = $('.slick-current img')
  var pre_width = img_ele.getBoundingClientRect().width,
        pre_height = img_ele.getBoundingClientRect().height;
  img_ele.style.width = (pre_width * zoomincrement) + 'px';
  img_ele.style.height = (pre_height * zoomincrement) + 'px';
  img_ele = null;
}

document.getElementById('zoomout').addEventListener('click', function() {
  zoom(0.5);
});
document.getElementById('zoomin').addEventListener('click', function() {
  zoom(1.5);
});

function start_drag() {
  img_ele = this;
  console.log(img_ele);
  x_img_ele = window.event.clientX - document.getElementById('drag-img').offsetLeft;
  y_img_ele = window.event.clientY - document.getElementById('drag-img').offsetTop;
    console.log("start drag");
}

function stop_drag() {
  img_ele = null;
  console.log("stop drag");
}

function while_drag() {
  var x_cursor = window.event.clientX;
  var y_cursor = window.event.clientY;
  if (img_ele !== null) {
    img_ele.style.left = (x_cursor - x_img_ele) + 'px';
    img_ele.style.top = ( window.event.clientY - y_img_ele) + 'px';
      console.log('dragging > img_left:' + img_ele.style.left+' | img_top: '+img_ele.style.top);
  }
}

document.getElementById('drag-img').addEventListener('mousedown', start_drag);
// $('.featuredPostSlider img').on('mousedown', function(){
//     start_drag();
// });
document.getElementById('container').addEventListener('mousemove', while_drag);
document.getElementById('container').addEventListener('mouseup', stop_drag);
