$(function() {
	var $window = $(window);
	var windowHeight = $window.height();
	var windowWidth = $window.width();

	var image = $("#slider");
	var zoomDepth = Math.max(windowHeight / 2848, windowWidth / 4288);
	var sliderZoom = new TimelineLite({paused:true})
		.to(image, 1, {zoom:zoomDepth})
		.to($("#title"), 0.1, {opacity: "0", zoom:1.5}, 0)
		.to(image, 0.5, {opacity:0});

	var scrollTop = $window.scrollTop();
	$window.on("scroll", function() {
		scrollTop = $window.scrollTop();
		var scrollPercent = scrollTop / (windowHeight * 1.5);
		if(scrollPercent >= 0) {
			sliderZoom.progress(scrollPercent).pause();
		}
		console.log(sliderZoom.progress());
	});
});