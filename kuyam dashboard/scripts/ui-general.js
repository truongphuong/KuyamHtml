var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
},
wScreen = window.innerWidth;

if(!isMobile.any()){
	document.addEventListener('touchmove', function (e){e.preventDefault();}, false);
}	

function listFilter(inputSearch, list) {
	var $object = $(inputSearch); 
	var filter = $object.val();
	$object.change( function (e) {
		e.preventDefault();
		filter = $(this).val();
		if(filter != null) {
			//highlighted letters in the list when it match key
			var match = RegExp(this.value, 'gi');
			$(list).find(".text").html(function(){
				if (!filter) return $(this).text();
				return $(this).text().replace(match, '<u>$&</u>');
			});
		} 
		return false;
	}).keyup( function () {
		// fire the above change event after every letter									
		$(this).change();
	});
}

function iscrollSelectModal(sectionID, scrollName, modalName){
	var $sectionID = $('#' + sectionID),
		$modalID = $('#' + modalName),
		scrollID = '#' + scrollName;
		
	if($sectionID.find('.bootstrap-select').length === 0){
		$sectionID.find('select').selectpicker({liveSearch: true});
		$sectionID.find('.form-control').attr('readonly', 'true');	
		
		$sectionID.find('select').on('hide.bs.select', function(){
			$sectionID.find('.form-control').trigger('blur');
		});
		
		$sectionID.find('.popover-title').click(function(){
			$modalID.modal('show');
		});
		
		if(!isMobile.any()){
			var positionInsert = '#' +  sectionID + ' .dropdown-menu.inner',
				$sectionAppend = $(positionInsert);			
			
			$('<div id="' + scrollName + '" class="bootstrap-scroll"></div>').insertBefore(positionInsert);						
			$sectionAppend.appendTo(scrollID);
			
			$sectionID.find('.form-control').on('keydown', function(e){
				var liActive = $sectionID.find('.dropdown-menu.inner li.active');
				var indexActive = $sectionID.find('.dropdown-menu.inner li').filter('.active').index();
				var indexFirstActive = $sectionID.find('.dropdown-menu.inner li').filter(':not(.disabled):visible').first().data('original-index');				
				var indexLastActive = $sectionID.find('.dropdown-menu.inner li').filter(':not(.disabled):visible').last().data('original-index');
				
				$(scrollID).data('IScroll').scrollTo(0, 0, 0);
				if (e.keyCode === 38) { // up			
					if(liActive.prev().length === 0) {
						$(scrollID).data('IScroll').scrollTo(0, $(scrollID).data('IScroll').maxScrollY - 5, 0);
					}else{
						$(scrollID).data('IScroll').scrollTo(0, - (indexActive - 1) * 5, 0);
					}
				}
				
				if (e.keyCode === 40) { // down	
					if(liActive.next().length === 0) {
						$(scrollID).data('IScroll').scrollTo(0, 5, 0);
					}else{
						$(scrollID).data('IScroll').scrollTo(0, - indexActive * 5, 0);
					}
				}
			});
			
			if($(scrollID).data('IScroll')){
				return;
			}
		
			var selectScroll = new IScroll(scrollID, { 
				keyBindings: true, 
				mouseWheel: true, 
				scrollbars: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'clip',
				fadeScrollbars: true
			});
			
			$(scrollID).data('IScroll', selectScroll);
		}
	}
}	

function iscrollSelectSearchModal(sectionID, scrollName, modalName){
	var $sectionID = $('#' + sectionID),
		$modalID = $('#' + modalName),
		scrollID = '#' + scrollName;	
	if($sectionID.find('.bootstrap-select').length === 0){
		$sectionID.find('select').selectpicker({liveSearch: true});	
		$sectionID.find('select').on('loaded.bs.select', function (e) {
			listFilter('#' + sectionID + ' .bs-searchbox input', $('#' + sectionID + ' ul.dropdown-menu'));
		});		
		
		$sectionID.find('select').on('hide.bs.select', function(){
			$sectionID.find('.form-control').trigger('blur');
		});
		
		$sectionID.find('.popover-title').click(function(){
			if($('.tooltipster-personal').length !== 0){
				$('.tooltipster-personal').remove();
			}
			$('#addCalendarModal').modal('hide');			
			
			$('#addCalendarModal').on('hidden.bs.modal', function(e){				
				$modalID.modal('show');
			});
			
			$modalID.on('hidden.bs.modal', function(e){				
				$('#addCalendarModal').modal('show');
			});
		});
		
		$sectionID.find('.btn-personal').attr('onClick', 'showPesonalInfo(this)');
		
		if(!isMobile.any()){
			var positionInsert = '#' +  sectionID + ' .dropdown-menu.inner',
				$sectionAppend = $(positionInsert);			
			
			$('<div id="' + scrollName + '" class="bootstrap-scroll"></div>').insertBefore(positionInsert);						
			$sectionAppend.appendTo(scrollID);	

			$sectionID.find('.form-control').on('keydown', function(e){
				var liActive = $sectionID.find('.dropdown-menu.inner li.active');
				var indexActive = $sectionID.find('.dropdown-menu.inner li').filter('.active').index();
				var indexFirstActive = $sectionID.find('.dropdown-menu.inner li').filter(':not(.disabled):visible').first().data('original-index');				
				var indexLastActive = $sectionID.find('.dropdown-menu.inner li').filter(':not(.disabled):visible').last().data('original-index');
				
				$(scrollID).data('IScroll').scrollTo(0, 0, 0);
				if (e.keyCode === 38) { // up			
					if(liActive.prev().length === 0) {
						$(scrollID).data('IScroll').scrollTo(0, $(scrollID).data('IScroll').maxScrollY - 5, 0);
					}else{
						$(scrollID).data('IScroll').scrollTo(0, - (indexActive - 1) * 5, 0);
					}
				}
				
				if (e.keyCode === 40) { // down	
					if(liActive.next().length === 0) {
						$(scrollID).data('IScroll').scrollTo(0, 5, 0);
					}else{
						$(scrollID).data('IScroll').scrollTo(0, - indexActive * 5, 0);
					}
				}
			});
		
			if($(scrollID).data('IScroll')){
				return;
			}
		
			var selectScroll = new IScroll(scrollID, { 
				keyBindings: true, 
				mouseWheel: true, 
				scrollbars: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'clip',
				fadeScrollbars: true
			});
			
			$(scrollID).data('IScroll', selectScroll);
		}
	}
}

function iscrollSelect(sectionID, scrollName){
	var $sectionID = $('#' + sectionID),
		scrollID = '#' + scrollName;
	if($sectionID.find('.bootstrap-select').length === 0){
		$sectionID.find('select').selectpicker({liveSearch: true});
		$sectionID.find('.form-control').attr('readonly', 'true');				
		
		$sectionID.find('select').on('hide.bs.select', function(){
			$sectionID.find('.form-control').trigger('blur');
		});
		
		if(!isMobile.any()){
			var positionInsert = '#' +  sectionID + ' .dropdown-menu.inner',
				$sectionAppend = $(positionInsert);
			
			$('<div id="' + scrollName + '" class="bootstrap-scroll"></div>').insertBefore(positionInsert);						
			$sectionAppend.appendTo(scrollID);
			
			$sectionID.find('.form-control').on('keydown', function(e){
				var liActive = $sectionID.find('.dropdown-menu.inner li.active');
				var indexActive = $sectionID.find('.dropdown-menu.inner li').filter('.active').index();
				var indexFirstActive = $sectionID.find('.dropdown-menu.inner li').filter(':not(.disabled):visible').first().data('original-index');				
				var indexLastActive = $sectionID.find('.dropdown-menu.inner li').filter(':not(.disabled):visible').last().data('original-index');
				
				$(scrollID).data('IScroll').scrollTo(0, 0, 0);
				if (e.keyCode === 38) { // up			
					if(liActive.prev().length === 0) {
						$(scrollID).data('IScroll').scrollTo(0, $(scrollID).data('IScroll').maxScrollY - 5, 0);
					}else{
						$(scrollID).data('IScroll').scrollTo(0, - (indexActive - 1) * 5, 0);
					}
				}
				
				if (e.keyCode === 40) { // down	
					if(liActive.next().length === 0) {
						$(scrollID).data('IScroll').scrollTo(0, 5, 0);
					}else{
						$(scrollID).data('IScroll').scrollTo(0, - indexActive * 5, 0);
					}
				}
			});
			
			if($(scrollID).data('IScroll')){
				return;
			}
			
			var selectScroll = new IScroll(scrollID, { 
				keyBindings: true, 
				mouseWheel: true, 
				click: true,
				scrollbars: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'clip',
				fadeScrollbars: true
			});
			
			$(scrollID).data('IScroll', selectScroll);
		}
	}
}

function iscrollContent(sectionID){
	if(!isMobile.any()){		
		var $sectionID = $(sectionID);
		
		if($(sectionID).data('IScroll')){
			return;
		}
		
		var contentScroll = new IScroll(sectionID, { 
			keyBindings: true, 
			mouseWheel: true, 
			click: true,
			scrollbars: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'clip',
			fadeScrollbars: true
		});
		
		$(sectionID).data('IScroll', contentScroll);
	}
}

function existSelect(sectionClass){
	var $sectionClass = $('.' + sectionClass);
	if($sectionClass.length !== 0){
		$sectionClass.find('select').selectpicker();
	}
}

function centerModals($element){
	var $modals;
	if($element.length){
		$modals = $element;
	} else {
    $modals = $('.modal-vcenter:visible');
	}
	$modals.each(function(i){
		var $clone = $(this).clone().css('display', 'block').appendTo('body');
		var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
		top = top > 0 ? top : 0;
		$clone.remove();
		$(this).find('.modal-dialog').css("margin-top", top);
	});
}

function minHeightBody(){
	$('.kuyam-section, #calendarDaysWrap').css({'min-height': ''});
	var hScreen = $(window).height(),
		hHeader = $('.kuyam-header').height(),
		hFooter = $('.kuyam-footer').height();
	$('.kuyam-section').css({'min-height': hScreen - hHeader - hFooter});
	if($('.calendar-page').length !== 0){
		$('.calendar-page').css({'width': $(window).width()});
	}
	if($('#calendarDaysWrap').length !== 0 && $(window).width() > 1023){
		$('#calendarDaysWrap').css({'min-height': hScreen - hHeader - hFooter - 110});
	}
}

function weekRepeat(){
	$('.week-list li').on('click', function(){
		var isActive = $(this).hasClass('active');
		if(isActive){
			$(this).removeClass('active');			
		}else{
			$(this).addClass('active');
		}
	});
}

function customPickTime($id, date, increment){
    var fromdate = moment(date);
    var todate = moment(date).add(increment, "m");

    $id.find('.txt-hour').val(fromdate.format("h:mm A") + ' - ' + todate.format("h:mm A"))
    return $id.find('tfoot .timepicker-hour').text(todate.format("h")),
    $id.find('tfoot .timepicker-minute').text(todate.format("mm")),
    $id.find('tfoot .timepicker-period').text(todate.format("A"));
}

function maxCol(section){
    if ($(section).length === 0) {
        return;
    }
    var maxColW = 0;
    $(section).find('.col-title').css({ 'width': '' });
    $(section).find('.col-title').each(function ()
    {
        if ($(this).width() > maxColW) {
            maxColW = $(this).innerWidth();
        }
    });
    $(section).find('.col-title').css({ 'width': maxColW });
	$(section).find('.col-info').css({ 'width': $(section).find('.table-css').width() - maxColW });
}

function showPesonalInfo($this){
	var liTag = $this.parentElement.parentElement;
	var liData = liTag.attributes.getNamedItem('data-original-index').value;
	var liClass = liTag.className;
	
	if(wScreen < 1024){
		$('#personalModal').modal('show');
	}else{
		var personalContent = $('#dataPersonal').html();
		
		$('.single-right .btn-personal').tooltipster({
			contentAsHTML: true,
			content: personalContent,
			trigger: 'custom',
			position: 'right',
			theme: 'tooltipster-default tooltipster-personal',
			offsetX: -5,
			interactive: true,
			debug: false,
			onlyOne: true
		});
		
		$('.single-left .btn-personal').tooltipster({
			contentAsHTML: true,
			content: personalContent,
			trigger: 'custom',
			position: 'left',
			theme: 'tooltipster-default tooltipster-personal',
			offsetX: -5,
			interactive: true,
			debug: false,
			onlyOne: true
		});
		
		$('.multi-right .btn-personal').tooltipster({
			contentAsHTML: true,
			content: personalContent,
			trigger: 'custom',
			position: 'right',
			theme: 'tooltipster-default tooltipster-personal',
			offsetX: -5,
			interactive: true,
			debug: false,
			onlyOne: true
		});
		
		if($('.tooltipster-personal').length !== 0){
			$('.tooltipster-personal').remove();
		}
		
		$($this).tooltipster('show');
	}
}

function siteHeader(){
	if(wScreen > 1023){	
		$('.kuyam-header .navbar-header, .kuyam-header .navbar-nav > li').css({'width': wScreen / 7});
	}else{
		$('.kuyam-header .navbar-header, .kuyam-header .navbar-nav > li').css({'width': ''});
	}
}

$(document).ready(function(){
	$(document).on('hidden.bs.modal', '.modal', function () {
		$('.modal:visible').length && $(document.body).addClass('modal-open');
	});
	
	if(isMobile.any()){
		$('html').addClass('on-device');
	}else{
		$('html').addClass('on-desktop');
	}
	
	minHeightBody();
	
	siteHeader();
	
	$(document).on('show.bs.modal', '.modal', function(){
		centerModals($(this));
	});
	
	if($('#tabTerms').length !== 0){
		var iscrollTabTerms = new IScroll('#tabTerms', { 
			keyBindings: true, 
			mouseWheel: true, 
			click: true,
			scrollbars: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'clip',
			fadeScrollbars: true
		});
	}
	
	if($('#tabPrivacy').length !== 0){	
		var iscrollTabPrivacy = new IScroll('#tabPrivacy', { 
			keyBindings: true, 
			mouseWheel: true, 
			click: true,
			scrollbars: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'clip',
			fadeScrollbars: true
		});
	}
	
	if($('#tabServices').length !== 0){		
		var iscrollTabServices = new IScroll('#tabServices', { 
			keyBindings: true, 
			mouseWheel: true, 
			click: true,
			scrollbars: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'clip',
			fadeScrollbars: true
		});
	}
	
	var termActive;
	$('.link-terms').click(function(e){
		e.preventDefault();
		termActive = $(this).attr('href');		
		$('#termsModal').modal('show');
	});	
	
	$('#termsModal').on('show.bs.modal', function (e) {
		$('.terms-tabs').tab('show');
		$('.terms-tabs a[href="' + termActive +'"]').tab('show');
	});
	
	$('#termsModal').on('shown.bs.modal', function (e) {
		iscrollTabTerms.refresh();
		iscrollTabPrivacy.refresh();
		iscrollTabServices.refresh();
	});
	
	$('.terms-tabs').on('shown.bs.tab', function (e) {
		iscrollTabTerms.refresh();
		iscrollTabPrivacy.refresh();
		iscrollTabServices.refresh();
	});
});

$(window).on('resize', function(){
	wScreen = window.innerWidth;
	
	minHeightBody();
	
	siteHeader();
	
	centerModals($(this));
	
	 // prevent screen flashing when multiple modals shown
    $(document).on('hidden.bs.modal', '.modal', function (){
		if(isMobile.any()){
			if($('.modal:visible').length){ 
				$(document.body).addClass('modal-open');
			}
		}else{
			if($('.modal:not("#addCalendarModal"):visible').length){ 
				$(document.body).addClass('modal-open');
			}
		}
    });

    // get padding right of body when a modal shown, only once. Reason: prevent screen flashing
    $(document).one('shown.bs.modal', '.modal', function (){
        if (typeof window.verifyScrollbarWidth == "undefined") {
            window.verifyScrollbarWidth = $('body').css("padding-right");
            window.verifyScrollbarWidth = '<style type="text/css">.modal-open{padding-right:' + window.verifyScrollbarWidth + ' !important;}</style>';
            $(window.verifyScrollbarWidth).appendTo($('head'));
        }
    });
});