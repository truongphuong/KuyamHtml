function iscrollSelectTabs(tabContentID){	
	if(tabContentID === "formAppointment"){
		iscrollSelectSearchModal('divClientAppointment', 'iscrollClientAppointment', 'addClientModal');
		iscrollSelectSearchModal('divStaffAppointment', 'iscrollStaffAppointment', 'addStaffModal');
		iscrollSelect('divCategoryAppointment', 'iscrollCategoryAppointment');
		iscrollSelect('divServiceAppointment', 'iscrollServiceAppointment');
	}else if(tabContentID === "formClass"){		
		iscrollSelectSearchModal('divClientClass', 'iscrollClientClass', 'addClientModal');
		iscrollSelectSearchModal('divStaffClass', 'iscrollStaffClass', 'addStaffModal');
		iscrollSelect('divCategoryClass', 'iscrollCategoryClass');
		iscrollSelect('divClass', 'iscrollClass');
	}else{		
		iscrollSelectSearchModal('divStaffBlocker', 'iscrollStaffBlocker', 'addStaffModal');
	}
}

$(document).ready(function(){
	
	iscrollSelectModal('divStaffCalendar', 'iscrollStaffCalendar', 'addStaffModal');	
	
	existSelect('calendar-select-status');
	
	$('.calendar-select-status select').change(function(){
		
		var thisVal = $(this).val();
		if(thisVal === "0"){
			$('#cancelCalendarModal').modal('show');
		}
	});
	
	$('#addCalendarModal').on('shown.bs.modal', function(e){
	
		// Repeat select
		existSelect('form-select-repeat');
		
		weekRepeat();
		
		$('.form-select-repeat select').change(function(){
			if($(this).val() === "0"){
				$(this).parents('.repeat-section').find('.week-list').addClass('hide');
			}else{
				$(this).parents('.repeat-section').find('.week-list').removeClass('hide');
			}
		});
		
		// Datetimepicker
		$('.txt-date').datetimepicker({
			format: 'ddd, MMM Do'
		});
		
		$('.timepicker-section').datetimepicker({
			inline: true,
			sideBySide: true,
			format: 'LT'
		}).on('dp.change', function(e){
			var dataSection = $(this).attr('data-section');
				$parent = $('#' + dataSection);
			customPickTime($parent, e.date, 30);
		});
		
		// Tabs
		var tabContentID = $('#tabsCalendar li.active a[data-toggle="tab"]').attr('aria-controls'),
			iscrollActive = $('#tabsCalendar li.active a[data-toggle="tab"]').attr('aria-iscroll');
		if(iscrollActive === true){
			return;
		}
		
		$('#tabsCalendar li.active a[data-toggle="tab"]').attr('aria-iscroll', 'true');
		
		iscrollSelectTabs(tabContentID);
		
	});
		
	$('#tabsCalendar a[data-toggle="tab"]').on('shown.bs.tab', function (e){
		var tabContentID = $(e.target).attr('aria-controls'),
			iscrollActive = $(e.target).attr('aria-iscroll');
		if(iscrollActive === true){
			return;
		}
		
		$(e.target).attr('aria-iscroll', 'true');
		
		iscrollSelectTabs(tabContentID);
	});
	
	$('#detailsModal').on('shown.bs.modal', function(e){
		maxCol('#blockDetails');
		iscrollContent('#iscrollBlockNotes');
	});
	
	$('#attendeeModal').on('shown.bs.modal', function(e){
		iscrollContent('#iscrollAttendeeList');
	});
	
	if(wScreen < 1024){
	
		$('.calendar-details').click(function(e){
			e.preventDefault();
			$('#detailsModal').modal('show');
		});
		
		$('.calendar-attendee').click(function(e){
			e.preventDefault();
			$('#attendeeModal').modal('show');
		});
	}else{
		var detailContent = '';
			detailContent += '<div id="appointmentDetails" class="block-details">';
			detailContent += '<div class="modal-header">';
			detailContent += '<button type="button" class="close">x</button>';
			detailContent += '<h4>Wedmesday, Nov 18th</h4>';
			detailContent += '<p>11:00 AM - 12:30 PM</p>';
			detailContent += '</div>';
			detailContent += '<div class="modal-body">';
			detailContent += '<div class="table-css">';
			detailContent += '<div class="tr">';
			detailContent += '<div class="td col-title">Client:</div>';
			detailContent += '<div class="td col-info">Jane Rodriguez</div>';
			detailContent += '</div>';
			detailContent += '<div class="tr">';
			detailContent += '<div class="td col-title">Staff:</div>';
			detailContent += '<div class="td col-info">Candlelight vinyasa</div>';
			detailContent += '</div>';
			detailContent += '<div class="tr">';
			detailContent += '<div class="td col-title">Repeat:</div>';
			detailContent += '<div class="td col-info">Custom (M, W, F)</div>';
			detailContent += '</div>';
			detailContent += '<div class="tr">';
			detailContent += '<div class="td col-title">Caterory:</div>';
			detailContent += '<div class="td col-info">Yoga</div>';
			detailContent += '</div>';
			detailContent += '<div class="tr">';
			detailContent += '<div class="td col-title">Service:</div>';
			detailContent += '<div class="td col-info">Restoration yoga</div>';
			detailContent += '</div>';
			detailContent += '<div class="tr">';
			detailContent += '<div class="td col-title">Internal notes:</div>';
			detailContent += '<div class="td col-info"></div>';
			detailContent += '</div>';
			detailContent += '</div>';
			detailContent += '<div class="notes-section">';
			detailContent += '<div id="iscrollAppointmentNotes">';
			detailContent += "<div>With Bootstrap 2, we added optional mobile friendly styles for key aspects of the framework. With Bootstrap 3, we've rewritten the project to be mobile friendly from the start. Instead of adding on optional mobile styles, they're baked right into the core. In fact, Bootstrap is mobile first. Mobile first styles can be found throughout the entire library instead of in separate files.</div>";
			detailContent += '</div>';
			detailContent += '</div>';
			detailContent += '</div>';
			detailContent += '<div class="modal-footer">';
			detailContent += '<div class="table-css">';
			detailContent += '<div class="tr">';
			detailContent += '<div class="td col-title"></div>';
			detailContent += '<div class="td col-info">';
			detailContent += '<a title="" href="">Modify appointment</a><br />';
			detailContent += '<a title="" href="">Cancel appointment</a>';
			detailContent += '</div>';
			detailContent += '</div>';
			detailContent += '</div>';
			detailContent += '</div>';			
			detailContent += '</div>';		
		$('.calendar-block').tooltipster({
			content: $(detailContent),
			trigger: 'click',
			position: 'right',
			offsetX: -5,
			interactive: true,
			positionTracker: true,
			functionReady: function(){
				$('.block-details .close').click(function(){
					$('.calendar-block').tooltipster('hide');
				});	
			}
		});	

		$('.calendar-block').click(function(e){
			$('.calendar-block').tooltipster('hide');
			if($(e.target).hasClass('calendar-attendee') || $(e.target).parents().hasClass('calendar-select-status')){				
				return;
			}
			$(this).tooltipster('show', function(){
				maxCol('#appointmentDetails');
				iscrollContent('#iscrollAppointmentNotes');
			});
		});	
		
		var attendeeContent = '';
			attendeeContent += '<div id="classAttendee" class="block-attendee">';
			attendeeContent += '<div class="modal-header">';
			attendeeContent += '<button type="button" class="close">x</button>';
			attendeeContent += '<h4>Attendee</h4>';
			attendeeContent += '</div>';
			attendeeContent += '<div class="modal-body">';
			attendeeContent += '<div id="iscrollAttendeeList" class="attendee-list">';
			attendeeContent += '<ul>';
			attendeeContent += '<li>Jane Lois</li>';
			attendeeContent += '<li>Valentina Lucas</li>';
			attendeeContent += '<li>Kourosh Gohar</li>';
			attendeeContent += '<li>Sven Larson</li>';
			attendeeContent += '<li>John Smith</li>';
			attendeeContent += '<li>Nick Brown</li>';				
			attendeeContent += '<li>Jane Lois</li>';
			attendeeContent += '<li>Valentina Lucas</li>';
			attendeeContent += '<li>Kourosh Gohar</li>';
			attendeeContent += '<li>Sven Larson</li>';
			attendeeContent += '<li>Jane Lois</li>';
			attendeeContent += '<li>Valentina Lucas</li>';
			attendeeContent += '<li>Kourosh Gohar</li>';
			attendeeContent += '<li>Sven Larson</li>';
			attendeeContent += '<li>John Smith</li>';
			attendeeContent += '<li>Nick Brown</li>';					
			attendeeContent += '<li>Jane Lois</li>';
			attendeeContent += '<li>Valentina Lucas</li>';
			attendeeContent += '<li>Kourosh Gohar</li>';
			attendeeContent += '<li>Sven Larson</li>';							
			attendeeContent += '</ul>';
			attendeeContent += '</div>';						
			attendeeContent += '</div>';		
			attendeeContent += '</div>';
		$('.calendar-attendee').tooltipster({
			content: $(attendeeContent),
			trigger: 'click',
			position: 'right',
			offsetX: -5,
			interactive: true,
			positionTracker: true,
			functionReady: function(){
				$('.block-attendee .close').click(function(){
					console.log('hello');
					$('.calendar-attendee').tooltipster('hide');
				});	
			}
		});	
	}
});

$(window).on('resize', function(){		
	if(wScreen < 1024){
		$('.tooltipster-default').remove();
	}
});