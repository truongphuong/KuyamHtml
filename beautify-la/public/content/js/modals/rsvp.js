'use strict';

function dropdownCalendar() {
	var tempId, currentId;
	var $calendar = $(".add-to-calendar");

	$(document).click(function () {
		tempId = "";
		$calendar.find("ul").hide();
	});

	$('.add-to-calendar').on('click', function (e) {
		e.stopPropagation();
		var $this = $(this);
		currentId = $this.attr('id');
		if (currentId != null) {

			if (currentId != tempId) {
				$calendar.find('ul').hide();
				$this.find('ul').show();
				tempId = currentId;
			}
			else {
				tempId = "";
				$calendar.find('ul').hide();
			}
		}
	});
}

$(document).ready(function(){
	$('#modal-rsvp').on('shown.bs.modal', function () {	
		var contentCalendar = $('.addtocalendar-rsvp').html();
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

			document.querySelector('.addtocalendar-rsvp').appendChild(myCalendar);
		}	
		
		dropdownCalendar();		
		
	});
});