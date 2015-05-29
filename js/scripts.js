$(function() {
	var smallScreen = window.matchMedia("only screen and (max-width: 480px)").matches;
	// Setup menu animation
	if (window.navigator.standalone) {
		$("header").addClass("webapp");
		// Redirect hrefs to manual redirect
		$("a").on("click", function(e) {
			var link = $(e.target).attr("href");
			// Check external link
			if (!link.match(/^(..\/|http:\/\/)/)) {
				// Stop the default behavior of the browser, which is to change the URL of the page.
				e.preventDefault();
				// Manually change the location of the page to stay in "Standalone" mode.
				location.href = link;
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
	}
});