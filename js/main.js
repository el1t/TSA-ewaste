$(document).ready(function() {
	var $window = $(window),
		windowHeight = $window.height(),
		windowWidth = $window.width(),
		controller = new ScrollMagic.Controller();

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

	// Pin first background for 3 screens
	new ScrollMagic.Scene({
		triggerElement: "#bg1",
		triggerHook: "onLeave",
		duration: windowHeight * 2
	}).setTween(new TimelineLite().to(
		$("#bg1"), 1, {css: {backgroundPosition: "center bottom"}}, 0
	)).setPin("#bg1")
		.addTo(controller);

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
				"Russia",
			],
			values: [
				10.3,
				10.9,
				8.0,
				3.0,
				3.0,
				1.6,
			]
		}
	};

	pie = undefined;
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
		pie.series[0].tooltipOptions.valueSuffix = "%"
		pie.series[0].name = "Percentage Recycled"
		pie.redraw();
	}).on("leave", function() {
		$.each(pie.series[0].data, function (i, point) {
			point.update(chartData.discard[i], false);
		});
		pie.series[0].tooltipOptions.valueSuffix = "k"
		pie.series[0].name = "Tons Discarded"
		pie.redraw();
	}).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#section3",
		triggerHook: "onCenter",
		duration: 0
	}).on("enter", function() {
		bar = bar || new Highcharts.Chart({
			chart: {
				type: 'bar',
				renderTo: "barchart"
			},
			title: {
				text: 'E-Waste Production by Country',
			},
			tooltip: {
				valueSuffix: " million"
			},
			xAxis: {
				categories: chartData.countries.names,
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Discards (Million Tons)',
					align: 'high',
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true,
					}
				}
			},
			series: [{
				name: "Top Countries",
				data: chartData.countries.values
			}]
		})
	}).addTo(controller);

	// Parallax phone
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