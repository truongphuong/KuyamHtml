'use strict';

$(document).ready(function(){
	$('#modal-access').on('show.bs.modal', function(){
		var austDay = new Date();
		austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
		$('#countdown1').countdown({until: austDay, format: 'dHM'});
	});
});