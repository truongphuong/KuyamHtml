function iscrollSelect(sectionID, scrollName) {
    var $sectionID = $('#' + sectionID),
		scrollID = '#' + scrollName;
    if ($sectionID.length === 0) {
        return;
    }
    if ($sectionID.find('.bootstrap-select').length === 0) {
        if (!isMobile.any()) {
            $sectionID.find('select').selectpicker({ liveSearch: true });
            $sectionID.find('.form-control').attr('readonly', 'true');
        } else {
            $sectionID.find('select').selectpicker();
        }

        $sectionID.find('select').on('hide.bs.select', function () {
            $sectionID.find('.form-control').trigger('blur');
        });
		
		if (!isMobile.Windows()) {
			$sectionID.find('.dropdown-menu.inner').wrap("<div class='wrap-dropdown-menu-inner'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
			$('#' + sectionID + ' select').on('shown.bs.select', function (e) {
				var heightOfUL = $('#' + sectionID + ' ul.inner').height();
				$('#' + sectionID + ' .wrap-dropdown-menu-inner-content').height(heightOfUL);
				$('#' + sectionID + ' .wrap-dropdown-menu-inner').niceScroll('#' + sectionID + ' .wrap-dropdown-menu-inner-content', 
					{
						bouncescroll: false
					});
			});
		}
    }
}

function existSelect(sectionClass) {
    var $sectionClass = $('.' + sectionClass);
    if ($sectionClass.length !== 0) {
        $sectionClass.find('select').selectpicker();
    }
}

function adjustboardingHeight(modalID){
	$(modalID).find('.modal-body').css({'min-height' : ''});
	if ($(modalID).length && $(window).width() < 768) {
		var sectionHeight = $(modalID).find('.modal-dialog').height();
		if(sectionHeight < $(window).height()){
			var windowHeight = $(window).height();				
			var headerHeight = 0;
			if($(modalID).find('.modal-header').length){
				headerHeight =$(modalID).find('.modal-header').outerHeight();
			}
			var introHeight = $(modalID).find('.modal-intro').outerHeight();
			var footerHeight = $(modalID).find('.modal-footer').innerHeight();
			var footerSiteHeight = $(modalID).find('.site-footer').outerHeight();
			var adjustHeight = windowHeight - headerHeight - introHeight - footerHeight - footerSiteHeight;
			$(modalID).find('.modal-body').css({'min-height' : adjustHeight});
		}
	}
}

$(document).ready(function () {
	if (!isMobile.Windows()) {
        $('html').addClass('on-nicescroll');
    }
	
	$('.modal-boarding').on('show.bs.modal', function () {
		adjustboardingHeight($(this));
	});
		
	$(window).resize(function(){
		adjustboardingHeight('#boardingInfoModal');	
		adjustboardingHeight('#boardingTimeModal');	
		adjustboardingHeight('#boardingProfileModal');	
		adjustboardingHeight('#boardingCompleteModal');		
	});
	
	$('#boardingInfoModal').on('show.bs.modal', function () {
		if ($('#divState').length !== 0) {
			iscrollSelect('divState', 'iscrollState');
		}
	});
	
	$('#boardingTimeModal').on('show.bs.modal', function () {
		existSelect('form-select-time');
		
		adjustboardingHeight('#boardingTimeModal');
	});
	
	$('.working-section .cb-mark').each(function () {
        var isChecked = $(this).is(':checked');
        if (isChecked === true) {
            $(this).closest('.tr').addClass('active');
        } else {
            $(this).closest('.tr').removeClass('active');
        }
    }).on('click', function () {
        var isChecked = $(this).is(':checked');
        if (isChecked === true) {
            $(this).closest('.tr').addClass('active');
        } else {
            $(this).closest('.tr').removeClass('active');
        }
    });	
});