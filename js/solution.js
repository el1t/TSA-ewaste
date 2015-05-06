$(function() {
	var $window = $(window),
		windowHeight = $window.height(),
		windowWidth = $window.width(),
		controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave"
	}).setTween(new TimelineLite()
			.fromTo("#pirate", 0.5, {css: {zoom: 2, autoAlpha: 0}}, {css: {zoom: 1, autoAlpha: 1}})
			.fromTo($("#pirate div"), 0.5, {css: {display: "block", autoAlpha: 0}}, {css: {autoAlpha: 1}})
	).addTo(controller);
});