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
			TweenLite.to(sliderZoom.pause(), 0.1, {time: scrollPercent});
		}
		console.log(sliderZoom.progress());
	});
});

$(function () {
	// Create the chart
	$('#container').highcharts({
		chart: {
			type: 'pie'
		},
		title: {
			text: 'Some chart!'
		},
		yAxis: {
			title: {
				text: 'What a nice animation'
			}
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
			name: 'Data',
			innerSize: '50%',
			data: [
				['A', 45.0],
				['B', 26],
				['C', 13.6],
				['D', 8.5],
				['E', 6.2],
				{
					name: 'F',
					y: 0.7,
					dataLabels: {
						enabled: false
					}
				}
			]
		}]
	});
});