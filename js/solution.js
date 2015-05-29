$(function() {
	var windowHeight = $.viewportH(),
		windowWidth = $.viewportW(),
		controller = new ScrollMagic.Controller();
	$("footer").click(function() {
		window.location.href = "./";
	});
});