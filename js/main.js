var startTime = undefined,
	preloader = undefined;

$(window).load(function() {
	$(".noscroll").each(function() {
		$(this).removeClass("noscroll");
	});
	$("#preload-images").remove();
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
		windowHeight = $.viewportH(),
		windowWidth = $.viewportW(),
		controller = new ScrollMagic.Controller();
	var isMobile = window.matchMedia("only screen and (max-width: 480px)").matches;

	var image = $("#slider"),
		zoomDepth = windowHeight > windowWidth && windowHeight / 2848 || windowWidth / 4288,
		sliderZoom = new TimelineLite({paused: true})
			.to(image, 1, {css: {zoom: zoomDepth}, ease: Linear.easeNone, force3D: true})
			.to($("#title"), 0.1, {css: {autoAlpha: "0"}, ease: Linear.easeNone}, 0)
			.to($("#start"), 1, {css: {autoAlpha: "0", display: "none"}}, 0)
			.to(image, 0.5, {autoAlpha:"0", ease: Linear.easeNone, force3D: true})
			.set(image, {css: {display: "none"}});

	// Manually handle zoom animation for interpolation and performance
	$window.scroll(function() {
		var scrollPercent = $window.scrollTop() / (windowHeight);
		if(scrollPercent >= 0 && (sliderZoom.progress() < 1 || scrollPercent <= 1.5)) {
			TweenLite.to(sliderZoom.pause(), 0.1, {time: scrollPercent});
		}
	});

	$window.resize(function() {
		windowHeight = $.viewportH();
		windowWidth = $.viewportW();
		if (windowHeight > windowWidth) {
			$("#bg1").css("background-size", "auto 100%");
		}
		// Update zoomDepth of sliderZoom
		zoomDepth = windowHeight > windowWidth && windowHeight / 2848 || windowWidth / 4288;
		// Overwrite old tween
		sliderZoom.fromTo(image, 1, {css: {zoom: 1}}, {css: {zoom: zoomDepth}, ease: Linear.easeNone, force3D: true}, 0);
	});

	// Parallax first background
	new ScrollMagic.Scene({
		offset: windowHeight,
		duration: windowHeight * 3
	}).setTween(new TimelineLite().to(
		$("#bg1"), 1, {css: {top: "-18%"}, ease: Linear.easeNone}
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
	var pieTransition = new ScrollMagic.Scene({
		triggerElement: "#section2",
		duration: 0
	});

	// Formatting for screens < 480px
	if (isMobile) {
		// Fill barchart spacing with empty chart
		new Highcharts.Chart({
			chart: {
				type: "bar",
				renderTo: "barchart"
			},
			title: {text: "E-Waste Production by Country"}
		});
		pieTransition.offset(-windowHeight / 2);
	}

	pieTransition.on("enter", function() {
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

	// Create bar chart
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
				valueSuffix: " million tons"
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
	}).addTo(controller);

	$("footer").click(function() {
		window.location.href = "about.html";
	});
});
