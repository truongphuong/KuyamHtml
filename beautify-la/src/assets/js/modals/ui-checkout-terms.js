'use strict';

$( document ).ready(function() {
	var checkoutTerm = new IScroll('#checkout-term', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		click: true 
	});
	
	$('#modal-checkout-term').on('shown.bs.modal', function (e) {
		checkoutTerm.refresh();
	});
});