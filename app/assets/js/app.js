$(window).scroll(function () {
	if ($(window).scrollTop() > 650) {
		$('#nav-menu-hamb').addClass('display-block');
	} else
	{
		$('#nav-menu-hamb').removeClass('display-block');
	}
});


$(document).ready(function() {

	$('#nav-menu-hamb').click(function(){
		$('#nav-menu').slideToggle('300');
	});


	$('[data-modal-target]').click(function(e) {
		e.preventDefault();

		var modalTarget 	= $(this).data('modal-target');
		var iframeContent	= $(this).data('iframe-content');
		var maskHeight 		= $(document).height();
		var maskWidth 		= $(window).width();

		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeIn(1000);
		$('#mask').fadeTo("slow",0.9);

		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
		$(modalTarget).fadeIn(2000);
		$('iframe',modalTarget).attr('src', iframeContent);
	});

	$('.window .close').click(function (e) {
		e.preventDefault();

		$('#mask').hide();
		$('.window').hide();
	});

	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});
});

$(function() {
  $('.scroll-smooth a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
