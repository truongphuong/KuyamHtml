'use strict';

$(document).ready(function () {
	var $modal = $('#modal-create-category');
	$modal.find('.btn-positive').on('click', function(){
		$('#categorySection').removeClass('hide');
		$modal.modal('hide');
	});
});