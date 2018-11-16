$(document).ready(function() {
  
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: true,

		fixedContentPos: false
	});
    

            $(document).on('click', '.youtube', function() {
                
                var videoId = $(this).data('video-id');
                // Create an iFrame with autoplay set to true
                var iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1&rel=0";
                if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

                // The height and width of the iFrame should be the same as parent
                var iframe = $('<iframe/>', {
                    'frameborder': '0',
                    'class': 'cast-shadow',
                    'src': iframe_url,
                    'width': '100%',
                    'height': '405.03'
                })

                // Replace the YouTube thumbnail with YouTube HTML5 Player
                $(this).replaceWith(iframe);
            });
       
});