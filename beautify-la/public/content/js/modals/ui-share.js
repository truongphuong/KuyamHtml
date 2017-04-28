'use strict';

$(document).ready(function () {

	$('#shareModal').on('shown.bs.modal', function () {
		iscrollContent('#shareList');
	});
});