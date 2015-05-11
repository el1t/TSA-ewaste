$(function() {
	var windowHeight = $.viewportH(),
		windowWidth = $.viewportW(),
		controller = new ScrollMagic.Controller();

	// Parallax phone
	var phone = $("#cellphone");
	phone.on("load", function() {
		phone.css("left", -phone.width() / 3 + "px");
		$(".phone-padding").css("margin-left", phone.width() * 2/3 + "px")
			.css("max-width", windowWidth - phone.width() * 2/3);
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
	})
});