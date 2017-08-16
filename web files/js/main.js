$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).width() > 1024) {
  	if ($(document).scrollTop() < ($(window).height()-75)) {
    	$('#h-container').addClass('top');
      $('#header').addClass('top');
      $('#header_img').addClass('top');
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
		}
  });

});
