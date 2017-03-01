$(document).ready(function(){
	$('#select-guest, #select-glass, #select-gender1, #select-gender2, #select-kid, #select-food').selectpicker();
	$('.btn-timer').click(function(e){
		var slideNext = "#" + $(this).attr("slideNext"),
			slideCurrent = "#" + $(this).attr("slideCurrent");
		$(slideCurrent).addClass("hide");
		$(slideNext).removeClass("hide");
		if(slideNext == "#timer-form4"){
			tdInfo();
		}
	});

	function tdInfo(){
		var tableWidth = $('.ticket-fieldset .table-ticket').width();
		var tdPrice = $('.ticket-fieldset .td-price').width();
		$('.ticket-fieldset .td-info').css({'width': tableWidth - tdPrice});
	}

	$(window).resize(function(){
		tdInfo();
	});
	
	$('#modal-rsvp').on('shown.bs.modal', function () {	
		var contentCalendar = $('.addtocalendar').html();
		if(contentCalendar ==  ''){
			var myCalendar = createCalendar({
				options: {
					class: 'my-calendar',
					id: 'my-calendar'                               // You need to pass an ID. If you don't, one will be generated for you.
				},
				data: {
					title: 'Get on the front page of HN',     // Event title
					start: new Date('June 15, 2013 19:00'),   // Event start date
					duration: 120,                            // Event duration (IN MINUTES)
					end: new Date('June 15, 2013 23:00'),     // You can also choose to set an end time.
															// If an end time is set, this will take precedence over duration
					address: 'The internet',
					description: 'Get on the front page of HN, then prepare for world domination.'
				}
			});

			document.querySelector('.addtocalendar').appendChild(myCalendar);
		}	
		
		dropdownCalendar();		
		
	});
    
});  
      
function dropdownCalendar() {
	var tempId, currentId;

	$(document).click(function () {
		 tempId = "";
		$(".add-to-calendar ul").hide();
	});

	$('.add-to-calendar').on('click', function (e) {
		e.stopPropagation();
		currentId = $(this).attr('id');
		if (currentId != null) {

			if (currentId != tempId) {
				$('.add-to-calendar').find('ul').hide();
				$(this).find('ul').show();
				tempId = currentId;
			}
			else {
				tempId = "";
				$('.add-to-calendar').find('ul').hide();
			}
		}
	});
}
