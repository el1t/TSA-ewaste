$(function() {
	var windowHeight = $.viewportH(),
		windowWidth = $.viewportW(),
		controller = new ScrollMagic.Controller();

	// Parallax phone
	var phone = $("#cellphone");
	phone.on("load", function() {
		phone.addClass("no-transition");
		phone.css("left", -phone.width() + "px");
		phone.width(); // trigger
		phone.removeClass("no-transition");
		phone.css("left", -phone.width() / 3 + "px");
		$(".phone-padding").css({
			marginLeft: phone.width() * 2/3 + "px",
			maxWidth: windowWidth - phone.width() * 2/3 + "px"
		});
	});
	var parallax = new TimelineLite()
		.fromTo(phone, 1, {top: "0"}, {top: "-100%", ease: Linear.easeNone});
	new ScrollMagic.Scene({
		triggerElement: "#case",
		triggerHook: "onCenter",
		duration: windowHeight * 2
	}).setTween(parallax)
		.setPin("#case")
		.addTo(controller);

	var $footer = $("footer");
	$footer.find(".left").click(function() {
		window.location.href = "./";
	});
	$footer.find(".right").click(function() {
		window.location.href = "solution.html"
	});
});