$(function() {
	var smallScreen = window.matchMedia("only screen and (max-width: 480px)").matches;
	// Setup menu animation
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