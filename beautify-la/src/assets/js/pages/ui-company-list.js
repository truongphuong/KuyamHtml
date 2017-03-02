'use strict';

$(document).ready(function(){   
	$('#categorySelect').selectpicker();
	
	var austDay = new Date();
	austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
	$('#countdown1').countdown({until: austDay, format: 'dHM'});
	$('#countdown2').countdown({until: austDay, format: 'dHM'});
});