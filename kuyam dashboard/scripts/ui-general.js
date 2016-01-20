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
nowTemp = new Date(),
now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

function checkCustomizeSelect(sectionClass, selectClass, headerTitle, scrollName, modalName){
	var $sectionClass = $('.' + sectionClass),
		$selectClass = $('.' + selectClass);
	if($sectionClass.length !== 0){
		$selectClass.selectpicker();
		
		var positionInsert = '.' +  sectionClass + ' .dropdown-menu.inner',
			$sectionAppend = $(positionInsert),
			modalID = '#' + modalName,
			scrollID = '#' + scrollName;
			
		$('<header><a data-toggle="modal" data-target="' + modalID + '" title="" href="javascript:void(0);">' + headerTitle + '</a></header>').insertBefore(positionInsert);	
		$('<div id="' + scrollName + '" class="bootstrap-scroll"></div>').insertBefore(positionInsert);						
		$sectionAppend.appendTo(scrollID);
		
		if(!isMobile.any()){			
			$(scrollID).jScrollPane({
				autoReinitialise: true
			});
		}
	}
}

function checkExistSelect(sectionClass, selectClass){
	var $sectionClass = $('.' + sectionClass),
		$selectClass = $('.' + selectClass);
	if($sectionClass.length !== 0){
		$selectClass.selectpicker();
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
		$(this).parent().find('li').removeClass('active');
		$(this).addClass('active');
	});
}

function subfixDate($txtInput){
	var thisVal = $txtInput.val(),
		thisArr = thisVal.split(', '),
		numDate = "",
		subfixDate = "",
		customDate = "";
	if(thisArr.length !== 0){
		var splitArr = thisArr[1].split(" ");
		if(splitArr.length !== 0){
			if(splitArr[1].length > 1){
				if(splitArr[1] == 11 || splitArr[1] == 12){
					subfixDate = "th";
				}else{
					numDate = splitArr[1].substring(1,2);
					if(numDate==1){
						subfixDate = "st";
					}else if(numDate == 2){
						subfixDate = "nd";
					}else if(numDate == 3){
						subfixDate = "rd";
					}else{
						subfixDate = "th";
					}
				}
			}else{
				if(splitTwoArr[1] == 1){
					subfixDate = "st";
				}else if(splitTwoArr[1] == 2){
					subfixDate = "nd";
				}else if(splitTwoArr[1] == 3){
					subfixDate = "rd";
				}else{
					subfixDate = "th";
				}
			}
		}
	}
	customDate = thisVal + subfixDate;
	$txtInput.val(customDate);
}

$(document).ready(function(){
	minHeightBody();
	
	centerModals($('.modal'));
});

$(window).on('resize', function(){	 
	minHeightBody();
	
	centerModals($('.modal'));
});