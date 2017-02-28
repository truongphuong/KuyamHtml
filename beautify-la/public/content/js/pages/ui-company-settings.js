'use strict';

document.getElementById('settingsNav').className = "active";

$(document).ready(function () {
	$('.header-banner').on('click', function (e) {
		var $this = $(this);
		var $target = $(e.target);
		var obj = $target.attr('class');
		if (obj === 'logo' || $target.parents('.logo').length || obj === 'company-name' || obj === 'dropdown-toggle' || $target.parents('.li-account').length || obj === 'control' || $target.parents('.control').length) {
			return;
		} else {
			$('#fileBanner').click();
		}
	});

	$('.header-banner .change').on('click', function (e) {
		$('#modal-banner').modal('show');
	});

	$('#fileBanner').on('change', function (e) {
		$('#modal-banner').modal('show');
	});

	$('#sectionSelect, #caterogySelect, #stateSelect, #caterogySelect').selectpicker();
});