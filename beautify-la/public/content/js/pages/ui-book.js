"use strict";

$(document).ready(function () {
	$("#tabs").tabs({
		create: function create(event, ui) {
			//resetScroll();
		},
		activate: function activate(event, ui) {
			//resetScroll();
		}
	});

	$('.select-options').click(function (e) {
		$(".options-icon").removeClass("z-index-12");
		$(this).find(".options-icon").addClass("z-index-12");
	});

	$('.options-text li.options-item').click(function (e) {
		var a = $(e.target).attr('class');
		if (a != "link-service" || a != "link-class") {
			$(".bg-white-50").fadeOut();
			$('.options-text li.options-item').removeClass("active");
			$(this).addClass("active");
			$('#select-who').fadeIn();
			$('#select-who').find(".select-text").html("");
			var getValue = $(this).find(".options-value").html();
			$(this).parent().parent().parent().find(".select-text").html(getValue);
			$(this).parent().parent().parent().find(".select-text").css({ 'visibility': 'visible' });
		}
	});

	$('.session-item').hover(function () {
		$(this).addClass("active");
	}, function () {
		$(this).removeClass("active");
	});

	$("#accordion").accordion({ heightStyle: "content" });
});