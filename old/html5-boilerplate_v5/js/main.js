$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > ($(window).height()-75)) {
    	$('#h-container').addClass('shrink');
      $('#header').addClass('shrink');
      $('#header_img').addClass('shrink');
    }
    else {
      $('#h-container').removeClass('shrink');
      $('#header').removeClass('shrink');
      $('#header_img').removeClass('shrink');
    }
  });
});
