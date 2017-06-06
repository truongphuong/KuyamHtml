'use strict';

$(document).ready(function () {

	$('#scheduleModal').on('shown.bs.modal', function () {
		iscrollContent('#scheduleList');
	});
});