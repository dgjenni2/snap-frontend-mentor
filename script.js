$(document).ready(function () {
	let mobileMenuOpen = false

	$("#mobile-menu-open").click(function () {
		$("body").toggleClass("darken-background")
		$("#mobile-menu-open").addClass("hidden")
		$("nav").removeClass("hidden")
		$("#mobile-menu-close").removeClass("hidden")
	})

	$("#mobile-menu-close").click(function () {
		$("body").toggleClass("darken-background")
		$("#mobile-menu-close").addClass("hidden")
		$("nav").addClass("hidden")
		$("#mobile-menu-open").removeClass("hidden")
	})

	$(".super-menu").click(function () {
		$(this).children("ul").toggleClass("hidden")
	})
})
