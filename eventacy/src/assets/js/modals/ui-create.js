'use strict';

$(document).ready(function () {
	$('#btnRequestEvent').click(function(e){
		var slideNext = "#" + $(this).attr("slideNext"),
			slideCurrent = "#" + $(this).attr("slideCurrent");
		$(slideCurrent).addClass("hide");
		$(slideNext).removeClass("hide");
	});
					
	$('#txtDate1, #txtDate2, #txtDate3').datepicker({
		format: 'mm/dd/yy',
	}).on('changeDate', function(e){
		$(this).datepicker('hide');
	});
});