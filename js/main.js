var startTime = undefined,
	preloader = undefined;
$(window).load(function() {
	$(".noscroll").each(function() {
		$(this).removeClass("noscroll");
	});
	// If load time takes more than 0.5s after document ready, animate preload
	var $preload = $("#preload");
	if (new Date() - startTime >= 500) {
		$preload.find("h1").text("Done!");
		setTimeout(function() {
			$preload.addClass("gone");
			setTimeout(function() {
				$preload.css("display", "none");
			}, 750);
		}, 1000);
	} else {
		clearTimeout(preloader);
		$preload.css("display", "none");
	}
});

$(document).ready(function() {
	// Initialize preload timer
	startTime = new Date();
	preloader = setTimeout(function() {
		// TODO: think of color for preload bg
		$("#preload").css("background-color", "#333");
	}, 500);

	var $window = $(window),
		windowHeight = $window.height(),
		windowWidth = $window.width(),
		controller = new ScrollMagic.Controller();

	var image = $("#slider");
	var zoomDepth = Math.max(windowHeight / 2848, windowWidth / 4288);
	var sliderZoom = new TimelineLite({paused: true})
		.to(image, 1, {zoom:zoomDepth, ease: Linear.easeNone, force3D: true})
		.to($("#start"), 0.1, {css: {autoAlpha: "0", display: "none"}}, 0)
		.to(image, 0.5, {autoAlpha:"0", ease: Linear.easeNone, force3D: true})
		.set(image, {css: {display: "none"}});

	// Manually handle zoom animation for interpolation and performance
	$window.on("scroll", function() {
		var scrollPercent = $window.scrollTop() / (windowHeight);
		if(scrollPercent >= 0 && (sliderZoom.progress() < 1 || scrollPercent <= 1.5)) {
			TweenLite.to(sliderZoom.pause(), 0.1, {time: scrollPercent});
		}
	});


	// Parallax first background
	new ScrollMagic.Scene({
		offset: windowHeight,
		duration: windowHeight * 2
	}).setTween(new TimelineLite().to(
		$("#bg1"), 1, {css: {top: "-18%"}}
	)).addTo(controller);

	// Shift color bg up fast
	new ScrollMagic.Scene({
		triggerElement: "#section3",
		triggerHook: "onEnter",
		duration: windowHeight
	}).on("enter",function() {
	}).setTween(new TimelineLite().to(
		$("#colorslider"), 1, {css: {top: "-=100%"}, ease: Linear.easeNone}
	)).addTo(controller);

	// Chart setup
	var chartData = {
		discard: [
			["Monitors", 595],
			["Computers", 423],
			["Hard Drives", 290],
			["Computer Peripherals", 67],
			["Mobile Devices", 19]
		],
		create: [
			['Computers', 40],
			['Monitors', 33],
			['Hard Drives', 33],
			['Peripherals', 10],
			['Mobile Devices', 11]
		],
		countries: {
			names: [
				"USA",
				"EU Nations",
				"China",
				"India", 
				"Japan",
				"Russia"
			],
			values: [
				10.3,
				10.9,
				8.0,
				3.0,
				3.0,
				1.6
			]
		}
	};

	var pie = undefined,
		bar = undefined;
	// Animate chart creation, but only once
	new ScrollMagic.Scene({
		triggerElement: "#pin",
		triggerHook: "onCenter",
		duration: 0
	}).on("enter", function() {
		pie = pie || new Highcharts.Chart({
			chart: {
				type: "pie",
				renderTo: "chart"
			},
			title: {
				text: "Waste",
				align: "center",
				verticalAlign: "middle"
			},
			plotOptions: {
				pie: {
					shadow: false,
					center: ["50%", "50%"]
				}
			},
			tooltip: {
				valueSuffix: "k"
			},
			series: [{
				type: "pie",
				name: "Tons Discarded",
				innerSize: "30%",
				data: JSON.parse(JSON.stringify(chartData.discard))
			}]
		});
	}).addTo(controller);


	// Pin pie chart
	new ScrollMagic.Scene({
		triggerElement: "#pin",
		triggerHook: "onLeave",
		duration: windowHeight
	}).setPin("#pin")
		.addTo(controller);

	// Event to switch pie chart
	new ScrollMagic.Scene({
		triggerElement: "#section2",
		duration: 0
	}).on("enter", function() {
		$.each(pie.series[0].data, function (i, point) {
			point.update(chartData.create[i], false);
		});
		pie.series[0].tooltipOptions.valueSuffix = "%";
		pie.series[0].name = "Percentage Recycled";
		pie.redraw();
	}).on("leave", function() {
		$.each(pie.series[0].data, function (i, point) {
			point.update(chartData.discard[i], false);
		});
		pie.series[0].tooltipOptions.valueSuffix = "k";
		pie.series[0].name = "Tons Discarded";
		pie.redraw();
	}).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#section3",
		triggerHook: "onCenter",
		duration: 0
	}).on("enter", function() {
		bar = bar || new Highcharts.Chart({
			chart: {
				type: "bar",
				renderTo: "barchart"
			},
			title: {
				text: "E-Waste Production by Country"
			},
			tooltip: {
				valueSuffix: " million"
			},
			xAxis: {
				categories: chartData.countries.names
			},
			yAxis: {
				min: 0,
				title: {
					text: "Discards (Million Tons)",
					align: 'high'
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				}
			},
			series: [{
				name: "Top Countries",
				data: chartData.countries.values
			}]
		});
		$("#section3").find(".left").addClass("active");
	}).addTo(controller);

	// Parallax cloud background
	//var cloudParallax = new TimelineLite()
	//	.fromTo($("#bg3"), 0.5, {css: {autoAlpha: 0}}, {css: {autoAlpha: 1}})
		//.to($("#bg3"), 1, {css: {top: 0}}, 0)
		//.to($("#bg3"), 1, {css: {top: "-100%"}}, "+=1")
		//.to($("#bg3"), 0.5, {css: {autoAlpha: 0}}, 3.5);
		//.to($("#bg3"), 1, {css: {top: "-200%"}});
	new ScrollMagic.Scene({
		triggerElement: "#smog",
		triggerHook: "onEnter",
		duration: windowHeight * 1
	}).setTween("#bg3", {css: {autoAlpha: 1}})
		.addTo(controller);
	new ScrollMagic.Scene({
		triggerElement: "#bg3-container",
		triggerHook: "onLeave",
		duration: windowHeight * 4
	}).setTween("#bg3", {css: {top: "-100%"}, ease: Linear.easeNone})
		.setPin("#bg3-container")
		.addTo(controller);

	// Parallax phone
	var phone = $("#cellphone");
	phone.on("load", function() {
		phone.css("left", -phone.width() / 3 + "px");
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
});
