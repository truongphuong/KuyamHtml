'use strict';

$(document).ready(function () {
	var $modal = $('#tagsModal');
	$modal.find('.btn-positive').on('click', function () {
		$('#divTagesSelect').removeClass('hide');
		$('#tagsDescription').removeClass('hide');
		$modal.modal('hide');
	});
});