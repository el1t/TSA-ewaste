$(document).ready(function() {
	var $window = $(window);
	var windowHeight = $window.height();
	var windowWidth = $window.width();

	var image = $("#slider");
	var zoomDepth = Math.max(windowHeight / 2848, windowWidth / 4288);
	var sliderZoom = new TimelineLite({paused:true})
		.to(image, 1, {zoom:zoomDepth})
		.to($("#start"), 0.1, {css: {autoAlpha: "0", display: "none"}}, 0)
		.to(image, 0.5, {autoAlpha:"0"})
		.set(image, {css: {display: "none"}});

	var scrollTop = $window.scrollTop();
	$window.on("scroll", function() {
		scrollTop = $window.scrollTop();
		var scrollPercent = scrollTop / (windowHeight);
		if(scrollPercent >= 0) {
			TweenLite.to(sliderZoom.pause(), 0.1, {time: scrollPercent});
		}
	});

	// Chart setup
	var chartData = {
		discard: [
			['A', 45.0],
			['B', 26],
			['C', 13.6],
			['D', 8.5],
			['E', 6.9]
		],
		create: [
			['A', 30],
			['B', 25],
			['C', 20],
			['D', 15],
			['E', 10]
		]
	};
	// Create the chart
	pie = new Highcharts.Chart({
		chart: {
			type: 'pie',
			renderTo: 'chart'
		},
		title: {
			text: 'Chart!',
			align: 'center',
			verticalAlign: 'middle'
		},
		plotOptions: {
			pie: {
				shadow: false,
				center: ['50%', '50%']
			}
		},
		tooltip: {
			valueSuffix: '%'
		},
		series: [{
			type: 'pie',
			name: 'Units',
			innerSize: '50%',
			data: JSON.parse(JSON.stringify(chartData.discard))
		}]
	});

	var controller = new ScrollMagic.Controller();
	new ScrollMagic.Scene({
		triggerElement: '#pin', // starting scene, when reaching this element
		triggerHook: 'onLeave',
		duration: windowHeight  // length in pixels
	}).setPin('#pin')   // pin this element
		.addTo(controller);
	// Event to switch pie chart
	new ScrollMagic.Scene({
		triggerElement: '#section2',
		duration: 0
	}).on('enter',function () {
		$.each(pie.series[0].data, function (i, point) {
			point.update(chartData.create[i], false);
		});
		pie.redraw();
	}).on('leave',function () {
		$.each(pie.series[0].data, function (i, point) {
			point.update(chartData.discard[i], false);
		});
		pie.redraw();
	}).addTo(controller);

	// Parallax
	var phone = $("#cellphone");
	phone.on("load", function() {
		phone.css("left", -phone.width() / 3 + "px");
	});
	var parallax = new TimelineLite()
		.fromTo(phone, 1, {top: "0"}, {top: "-100%"});
	new ScrollMagic.Scene({
		triggerElement: "#case",
		triggerHook: "onCenter",
		duration: windowHeight * 2
	}).setTween(parallax)
		.setPin("#case")
		.addTo(controller);
});