$(document).ready(function() {

	$('#menu_link').on('click', function() {

		$("#menulist").toggleClass("open");
		$("#menulist ul").toggleClass("open");

	});
	$(window).scroll(function() {
		if ($(window).width() > 1024) {
  	if ($(document).scrollTop() < ($(window).height()-75)) {
    	$('#h-container').addClass('top');
      $('#header').addClass('top');
      $('#header_img').addClass('top');
			$('#ftitle').addClass('top');
    }
    else {
      $('#h-container').removeClass('top');
      $('#header').removeClass('top');
      $('#header_img').removeClass('top');
    }
		}
		else {
			$('#h-container').removeClass('top');
			$('#header').removeClass('top');
			$('#header_img').removeClass('top');
			$('#ftitle').removeClass('top');
		}
  });

	$('#arrow_down').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: (target.offset().top - 30)
		}, 250);

	});

});
