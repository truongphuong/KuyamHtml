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
		iscrollSelectSearchModal('divClientBlocker', 'iscrollClientBlocker', 'addClientModal');		
		iscrollSelectSearchModal('divStaffBlocker', 'iscrollStaffBlocker', 'addStaffModal');
		iscrollSelect('divServiceBlocker', 'iscrollServiceBlocker');
	}
}

function hello(sectionID, $button){
	var liTag = $button.parentElement.parentElement;
	var liData = liTag.attributes.getNamedItem('data-original-index').value;
	var liClass = liTag.className;
	debugger
	if(liClass === 'selected'){
		$('#' + sectionID).find('li[data-original-index=' + liData +']').addClass('selected');
		$('#' + sectionID).find('option[value=' + liData +']').prop('selected', true);
	}else{
		$('#' + sectionID).find('li[data-original-index=' + liData +']').removeClass('selected');
		$('#' + sectionID).find('option[value=' + liData +']').prop('selected', false);
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
	$(document).on('click', '.btn-details', function(e){
		e.stoppropagation();
	});
	$('.btn-details').tooltipster({
			content: 'hello'
	});
	
	var detailContent = '';
		detailContent += '<div id="appointmentDetails" class="block-details">';
		detailContent += '<div class="modal-header">';
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
			content: $(detailContent)
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
	
});

$(window).on('resize', function(){	
	maxCol('#blockDetails');
	iscrollContent('#iscrollBlockNotes');
});