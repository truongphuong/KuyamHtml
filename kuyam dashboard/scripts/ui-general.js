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

document.addEventListener('touchmove', function (e){e.preventDefault();}, false);

function iscrollSelectModal(sectionID, scrollName, modalName){
	var $sectionID = $('#' + sectionID),
		$modalID = $('#' + modalName),
		scrollID = '#' + scrollName;
		
	if($sectionID.length !== 0){
		$sectionID.find('select').selectpicker({liveSearch: true});
		$sectionID.find('.form-control').attr('readonly', 'true');		
		
		$sectionID.find('.popover-title').click(function(){
			$modalID.modal('show');
		});
		
		var positionInsert = '#' +  sectionID + ' .dropdown-menu.inner',
			$sectionAppend = $(positionInsert);			
		
		$('<div id="' + scrollName + '" class="bootstrap-scroll"></div>').insertBefore(positionInsert);						
		$sectionAppend.appendTo(scrollID);
		
		var selectScroll = new IScroll(scrollID, { 
				keyBindings: true, 
				mouseWheel: true, 
				click: true,
				scrollbars: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'scale',
				fadeScrollbars: true
			});
	}
}

function iscrollSelectSearchModal(sectionID, scrollName, modalName){
	var $sectionID = $('#' + sectionID),
		$modalID = $('#' + modalName),
		scrollID = '#' + scrollName;
		
	if($sectionID.length !== 0){
		$sectionID.find('select').selectpicker({liveSearch: true});	
		
		$sectionID.find('.popover-title').click(function(){
			$modalID.modal('show');
		});
		
		var positionInsert = '#' +  sectionID + ' .dropdown-menu.inner',
			$sectionAppend = $(positionInsert);			
		
		$('<div id="' + scrollName + '" class="bootstrap-scroll"></div>').insertBefore(positionInsert);						
		$sectionAppend.appendTo(scrollID);
		
		var selectScroll = new IScroll(scrollID, { 
				keyBindings: true, 
				mouseWheel: true, 
				click: true,
				scrollbars: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'scale',
				fadeScrollbars: true
			});
	}
}

function iscrollSelect(sectionID, scrollName){
	var $sectionID = $('#' + sectionID),
		scrollID = '#' + scrollName;
	if($sectionID.length !== 0){
		$sectionID.find('select').selectpicker();
		
		var positionInsert = '#' +  sectionID + ' .dropdown-menu.inner',
			$sectionAppend = $(positionInsert);
		
		$('<div id="' + scrollName + '" class="bootstrap-scroll"></div>').insertBefore(positionInsert);						
		$sectionAppend.appendTo(scrollID);
		
		var selectScroll = new IScroll(scrollID, { 
				keyBindings: true, 
				mouseWheel: true, 
				click: true,
				scrollbars: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'scale',
				fadeScrollbars: true
			});
	}
}

function iscrollContent(sectionID){
	var $sectionID = $(sectionID);
	if($sectionID.length !== 0){
		var contentScroll = new IScroll(sectionID, { 
				keyBindings: true, 
				mouseWheel: true, 
				click: true,
				scrollbars: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'scale',
				fadeScrollbars: true
			});
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
	var hScreen = window.innerHeight,
		hSite = $('.kuyam-wrapper').height(),
		hHeader = $('.kuyam-header').height(),
		hFooter = $('.kuyam-footer').height();
	if(hSite < hScreen){
		$('.kuyam-section').css({'min-height': hScreen - hHeader - hFooter});
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

function showPesonalInfo($this){
	var liTag = $this.parentElement.parentElement;
	var liData = liTag.attributes.getNamedItem('data-original-index').value;
	var liClass = liTag.className;
	
	if(wScreen < 1024){
		$('#personalModal').modal('show');
	}else{
		var personalContent = $('#dataPersonal').html();			
		$('.single-left .btn-personal').tooltipster({
			contentAsHTML: true,
			content: personalContent,
			trigger: 'custom',
			position: 'left',
			theme: 'tooltipster-default tooltipster-personal',
			offsetX: -5,
			interactive: true,
			positionTracker: true
		});	
		
		$('.single-right .btn-personal').tooltipster({
			contentAsHTML: true,
			content: personalContent,
			trigger: 'custom',
			position: 'right',
			theme: 'tooltipster-default tooltipster-personal',
			offsetX: -5,
			interactive: true,
			positionTracker: true
		});
		
		$('.multi-right .btn-personal').tooltipster({
			contentAsHTML: true,
			content: personalContent,
			trigger: 'custom',
			position: 'right',
			theme: 'tooltipster-default tooltipster-personal',
			offsetX: -5,
			interactive: true,
			positionTracker: true
		});
		
		if($('.tooltipster-default').length !== 0){
			$('.tooltipster-default').remove();
		}
		
		$($this).tooltipster('show');
	}
}

$(document).ready(function(){
	minHeightBody();
	
	centerModals($('.modal'));
});

$(window).on('resize', function(){
	wScreen = window.innerWidth;
	
	minHeightBody();
	
	centerModals($('.modal'));
});