$(function() {
	var windowHeight = $.viewportH(),
		windowWidth = $.viewportW(),
		controller = new ScrollMagic.Controller();
	var $header = $("header");
	$("a[href*=#]:not([href=#])").click(function() {
		if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
			if (target.length) {
				$("html, body").animate({
					scrollTop: target.offset().top - $header.outerHeight()
				}, 500);
				return false;
			}
		}
	});
	$("footer").click(function() {
		window.location.href = "./";
	});
});