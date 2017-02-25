$(document).ready(function(){
	$("#carousel-view").swiperight(function() {
		$("#carousel-view").carousel('prev');
	});
	$("#carousel-view").swipeleft(function() {
		$("#carousel-view").carousel('next');
	});
});