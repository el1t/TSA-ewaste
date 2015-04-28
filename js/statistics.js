$(function() {
	var $window = $(window),
		windowHeight = $window.height(),
		windowWidth = $window.width(),
		controller = new ScrollMagic.Controller();

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

	var bar = undefined,
		chartData = {
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
				text: 'E-Waste Production by Country'
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
					text: 'Discards (Million Tons)',
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
		})
	}).addTo(controller);
});