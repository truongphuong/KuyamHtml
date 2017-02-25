'use strict';

$(document).ready(function () {
	$('#select-guest, #select-glass, #select-gender1, #select-gender2, #select-kid, #select-food').selectpicker();
	$('.btn-timer').click(function (e) {
		var slideNext = "#" + $(this).attr("slideNext"),
		    slideCurrent = "#" + $(this).attr("slideCurrent");
		$(slideCurrent).addClass("hide");
		$(slideNext).removeClass("hide");
		if (slideNext == "#timer-form4") {
			tdInfo();
		}
	});

	function tdInfo() {
		var tableWidth = $('.ticket-fieldset .table-ticket').width();
		var tdPrice = $('.ticket-fieldset .td-price').width();
		$('.ticket-fieldset .td-info').css({ 'width': tableWidth - tdPrice });
	}

	$(window).resize(function () {
		tdInfo();
	});
});