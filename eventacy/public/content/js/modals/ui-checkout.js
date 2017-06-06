'use strict';

$(document).ready(function () {
	$("#btn-gift-card").click(function () {
		$('#checkout-step1').addClass("hide");
		$('#checkout-step2').removeClass("hide");
	});

	$("#link-back").click(function () {
		$('#checkout-step1').removeClass("hide");
		$('#checkout-step2').addClass("hide");
	});

	$("#btn-confirm").click(function () {
		$('#checkout-step2').addClass("hide");
		$('#checkout-step3').removeClass("hide");
		$('.checkout-discount-giftcard, .checkout-total').removeClass("hide");
	});

	$(".btn-promo").click(function () {
		$('.method-promo').addClass("checkout-promo-applied");
		$('.promo-applied, .checkout-discount-promo, .checkout-total').removeClass("hide");
	});

	$('.btn-settings').click(function (e) {
		var slideNext = "#" + $(this).attr("slideNext"),
		    slideCurrent = "#" + $(this).attr("slideCurrent"),
		    navClass = "." + $(this).attr("slideNext");
		$(slideCurrent).addClass("hide");
		$(slideNext).removeClass("hide");
	});
});