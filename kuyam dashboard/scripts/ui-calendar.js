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

$(document).ready(function(){
	
	iscrollSelectModal('divStaffCalendar', 'iscrollStaffCalendar', 'addStaffModal');	
	
	existSelect('calendar-select-status');
	
	$('.calendar-select-status select').change(function(){
		
		var thisVal = $(this).val();
		if(thisVal === "0"){
			$('#cancelCalendarModal').modal('show');
		}
	});
		
	$('.txt-date').datetimepicker({
		format: 'ddd, MMM Do'
	});
	
	$('#addCalendarModal').on('shown.bs.modal', function(e){
	
		existSelect('form-select-repeat');
		
		weekRepeat();
		
		$('.form-select-repeat select').change(function(){
			if($(this).val() === "0"){
				$(this).parents('.repeat-section').find('.week-list').addClass('hide');
			}else{
				$(this).parents('.repeat-section').find('.week-list').removeClass('hide');
			}
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
	
});

$(window).on('resize', function(){	

});