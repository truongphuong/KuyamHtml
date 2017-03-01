'use strict';

$(document).ready(function () {
	var tabTerm = new IScroll('#tab-term', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		click: true
	});

	var tabPolicy = new IScroll('#tab-policy', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		click: true
	});

	var tabServices = new IScroll('#tab-services-list', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		click: true
	});

	$('#modal-terms-privacy').on('shown.bs.modal', function (e) {
		tabTerm.refresh();

		$('#tab-rule a[data-toggle="tab"]').on('show.bs.tab', function (e) {
			var tabID = $(e.target).attr("href");
			if (tabID == "#tab-term") {
				setTimeout(function () {
					tabTerm.refresh();
				}, 300);
			} else if (tabID == "#tab-policy") {
				setTimeout(function () {
					tabPolicy.refresh();
				}, 300);
			} else if (tabID == "#tab-services-list") {
				setTimeout(function () {
					tabServices.refresh();
				}, 300);
			}
		});
	});
});