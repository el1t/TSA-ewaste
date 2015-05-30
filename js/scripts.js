$(function() {
	var smallScreen = window.matchMedia("only screen and (max-width: 480px)").matches;
	// Setup menu animation
	if (window.navigator.standalone) {
		$("header").addClass("webapp");
		// Redirect hrefs to manual redirect
		$("a").on("click", function(e) {
			var $target = $(e.target);
			if ($target.attr("target") != "_blank") {
				// Stop the default behavior of the browser, which is to change the URL of the page.
				e.preventDefault();
				// Manually change the location of the page to stay in "Standalone" mode.
				location.href = $target.attr("href");
			}
		});
	}
	if (smallScreen) {
		$("#title").after("<i class=\"fa fa-chevron-circle-down\" id=\"menu-toggle\" ontouchstart=\"\"></i>");
		var $menu = $("#menu"),
			$toggle = $("#menu-toggle");
			$main = $("main");
		$toggle.click(function() {
			$main.toggleClass("blur");
			$toggle.toggleClass("active");
			$menu.toggleClass("active");
		});
		$main.on("touchstart", function(e) {
			if ($(this).hasClass("blur")) {
				e.stopPropagation();
				$main.removeClass("blur");
				$toggle.removeClass("active");
				$menu.removeClass("active");
			}
		});
		$("header").on("touchmove", function(e) {
			if ($menu.hasClass("active")) {
				e.preventDefault();
			}
		});
	}
});