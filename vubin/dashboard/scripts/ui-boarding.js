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
$(document).ready(function () {
	$('#boardingInfoModal').on('show.bs.modal', function () {
		if ($('#divState').length !== 0) {
			iscrollSelect('divState', 'iscrollState');
		}
	});
});