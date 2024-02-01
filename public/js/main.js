/*=======================================
[Start Activation Code]
=========================================
* Sticky Header JS
* Search JS
* Mobile Menu JS
* Hero Slider JS
* Testimonial Slider JS
* gallery Slider JS
* Clients Slider JS
* Single gallery Slider JS
* Accordion JS
* Nice Select JS
* Date Picker JS
* Counter Up JS
* Checkbox JS
* Right Bar JS
* Video Popup JS
* Wow JS
* Scroll Up JS
* Animate Scroll JS
* Stellar JS
* Google Maps JS
* Preloader JS
=========================================
[End Activation Code]
=========================================*/
(function ($) {
	"use strict";
	$(document).on("ready", function () {
		jQuery(window).on("scroll", function () {
			if ($(this).scrollTop() > 200) {
				$("#header .header-inner").addClass("sticky");
			} else {
				$("#header .header-inner").removeClass("sticky");
			}
		});

		/*====================================
			Sticky Header JS
		======================================*/
		jQuery(window).on("scroll", function () {
			if ($(this).scrollTop() > 100) {
				$(".header").addClass("sticky");
			} else {
				$(".header").removeClass("sticky");
			}
		});

		$(".pro-features .get-pro").on("click", function () {
			$(".pro-features").toggleClass("active");
		});

		/*====================================
			Search JS
		======================================*/
		$(".search a").on("click", function () {
			$(".search-top").toggleClass("active");
		});

		/*====================================
			Mobile Menu
		======================================*/
		$(".menu").slicknav({
			prependTo: ".mobile-nav",
			duration: 300,
			closeOnClick: true,
		});

		/*===============================
			Hero Slider JS
		=================================*/
		$(".hero-slider").owlCarousel({
			loop: true,
			autoplay: true,
			smartSpeed: 500,
			autoplayTimeout: 3500,
			singleItem: true,
			autoplayHoverPause: true,
			items: 1,
			nav: true,
			navText: [
				'<i class="fa fa-angle-left" aria-hidden="true"></i>',
				'<i class="fa fa-angle-right" aria-hidden="true"></i>',
			],
			dots: false,
		});

		/*===============================
			Testimonial Slider JS
		=================================*/
		$(".testimonial-slider").owlCarousel({
			items: 3,
			autoplay: true,
			autoplayTimeout: 4500,
			smartSpeed: 300,
			autoplayHoverPause: true,
			loop: true,
			merge: true,
			nav: false,
			dots: true,
			responsive: {
				1: {
					items: 1,
				},
				300: {
					items: 1,
				},
				480: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1170: {
					items: 3,
				},
			},
		});

		/*===============================
			gallery Slider JS
		=================================*/
		$(".gallery-slider").owlCarousel({
			autoplay: true,
			autoplayTimeout: 4000,
			margin: 15,
			smartSpeed: 300,
			autoplayHoverPause: true,
			loop: true,
			nav: true,
			dots: false,
			responsive: {
				300: {
					items: 1,
				},
				480: {
					items: 2,
				},
				768: {
					items: 2,
				},
				1170: {
					items: 4,
				},
			},
		});

		/*=====================================
			Stats Counter
		======================================*/

		function isElementInViewport(el) {
			var rect = el.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <=
					(window.innerHeight ||
						document.documentElement.clientHeight) &&
				rect.right <=
					(window.innerWidth || document.documentElement.clientWidth)
			);
		}

		// Function to start the counter animation
		function startCounterAnimation(element) {
			// Check if the animation has already started
			if ($(element).data("animation-started")) {
				return;
			}

			// Set the flag to indicate that the animation has started
			$(element).data("animation-started", true);

			// Extract the initial and target values from the element
			var initialValue = 0; // Change this to the initial value of your counter
			var targetValue = parseInt($(element).text(), 10); // Parse the text content as an integer

			// Start the animation
			$(element)
				.prop("Counter", initialValue)
				.animate(
					{
						Counter: targetValue,
					},
					{
						duration: 3500,
						easing: "swing",
						step: function (now) {
							// Update the text content during the animation
							$(element).text(Math.ceil(now) + "+");
						},
					}
				);
		}

		// Iterate through each counter element
		$(".counter").each(function () {
			var element = this;

			function checkAndStartAnimation() {
				if (isElementInViewport(element)) {
					// Start the counter animation if the element is in the viewport
					startCounterAnimation(element);

					// Remove the scroll event listener once the animation has started
					$(window).off("scroll", checkAndStartAnimation);
				}
			}

			// Check initially
			checkAndStartAnimation();

			// Attach a scroll event listener to check and start the animation when the element comes into view
			$(window).on("scroll", checkAndStartAnimation);
		});

		/*===================
			Accordion JS
		=====================*/
		$(".accordion > li:eq(0) a").addClass("active").next().slideDown();
		$(".accordion a").on("click", function (j) {
			var dropDown = $(this).closest("li").find("p");
			$(this).closest(".accordion").find("p").not(dropDown).slideUp(300);
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
			} else {
				$(this)
					.closest(".accordion")
					.find("a.active")
					.removeClass("active");
				$(this).addClass("active");
			}
			dropDown.stop(false, true).slideToggle(300);
			j.preventDefault();
		});

		/*====================================
			Nice Select JS
		======================================*/
		$("select").niceSelect();

		/*=====================================
			Date Picker JS
		======================================*/
		
			$("#datepicker").datepicker();

		

		/*===============================
			Checkbox JS
		=================================*/
		$('input[type="checkbox"]').change(function () {
			if ($(this).is(":checked")) {
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});

		/*===============================
			Right Bar JS
		=================================*/
		$(".right-bar .bar").on("click", function () {
			$(".sidebar-menu").addClass("active");
		});
		$(".sidebar-menu .cross").on("click", function () {
			$(".sidebar-menu").removeClass("active");
		});

		/*=====================
			Video Popup JS
		=======================*/
		// $(".video-popup").magnificPopup({
		// 	type: "video",
		// });

		/*================
			Wow JS
		==================*/
		var window_width = $(window).width();
		if (window_width > 767) {
			new WOW().init();
		}

		/*===================
			Scroll Up JS
		=====================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: "easeInOutExpo",
			scrollSpeed: 900,
			animation: "fade",
		});

		/*=======================
			Animate Scroll JS
		=========================*/
		$(".scroll").on("click", function (e) {
			var anchor = $(this);
			$("html, body")
				.stop()
				.animate(
					{
						scrollTop: $(anchor.attr("href")).offset().top - 100,
					},
					1000
				);
			e.preventDefault();
		});

		/*=======================
			Stellar JS
		=========================*/
		$.stellar({
			horizontalOffset: 0,
			verticalOffset: 0,
		});

		/*====================
		    Preloader JS
	    ======================*/
		$(window).on("load", function () {
			$(".preloader").addClass("preloader-deactivate");
		});
	});
})(jQuery);
