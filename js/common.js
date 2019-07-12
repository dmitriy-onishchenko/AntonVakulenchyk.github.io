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
        } else {
            $('.hoverText').html($('#rateBlock input:checked').next('label').data('text'));
            $('#rateBlock input:checked').next('label').addClass('checked');
        }
        
    });
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };    
    

});

