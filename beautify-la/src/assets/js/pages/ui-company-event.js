'use strict';

$(document).ready(function(){
    $('#typeSelect, #classSelect, #mailchimpSelect, #constantContactSelect, #stateSelect, #fromSectlect, #toSelect, #tagsSelect').selectpicker();

	var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    $('#txtDateStart').datetimepicker({
        format: 'dddd, MMM Do',
        sideBySide: true,
        minDate: now,
        useCurrent: false,
        focusOnShow: false,
        ignoreReadonly: true
    }).on('dp.change', function() {
        /*var inputVal = $(this).val();

        $btnDate.val(inputVal);

        if($btnDate.val() !== ''){
            $btnDate.css({'background': '#fff'});
        }else{
            $btnDate.css({'background': 'transparent'});
        }*/
    }).on('dp.show', function() {
        //$section.addClass('open');
		//$('.select-time.open select').click();
        $('.bootstrap-datetimepicker-widget').clone().appendTo('.time-section');
    }).on('dp.hide', function() {
        //$section.removeClass('open');
    });

	$('#txtDateEnd').datetimepicker({
        format: 'dddd, MMM Do',
        sideBySide: true,
        minDate: now,
        useCurrent: false,
        focusOnShow: false,
        ignoreReadonly: true
    }).on('dp.change', function() {
        /*var inputVal = $(this).val();

        $btnDate.val(inputVal);

        if($btnDate.val() !== ''){
            $btnDate.css({'background': '#fff'});
        }else{
            $btnDate.css({'background': 'transparent'});
        }*/
    }).on('dp.show', function() {
        //$section.addClass('open');
		//$('.select-time.open select').click();
        $('.bootstrap-datetimepicker-widget').clone().appendTo('.time-section');
    }).on('dp.hide', function() {
        //$section.removeClass('open');
    });

	// Begin active item sidebar/select and show form follow step by step
	$('.company-event-page .content footer .btn').on('click', function(){
		var $this = $(this);
		var section = $this.data('section');
		var $section = $('#' + section);
		if(section === ''){
			$('.company-event-page .sidebar').addClass('active');
			return;
		}

		$('.company-event-page .sidebar li').removeClass('active');
		$('.company-event-page .sidebar li[data-section="' + section + '"]').addClass('active');

		$('.company-event-page .content').addClass('hide');
		$section.removeClass('hide');
		$('#sectionSelect').val(section).trigger('change');
	});
	// End active item sidebar and show form follow step by step

	// Begin show form follow type
	$('#typeSelect').on('change', function(){
		var $this = $(this);
		var section = $this.val();
		var $section = $('#' + section);
		$('.company-event-page .content.type-event .type-section').addClass('hide');
		$section.removeClass('hide');
	});
	// End show form follow type

	// Begin show sub section of options tab when it checked
	$('.options-event .incentive .cb-mark').on('change', function(){
		var $this = $(this);
		var $section = $this.closest('.incentive').find('.form');
		if($this.prop('checked')) {
			$section.removeClass('hide');
		} else {
			$section.addClass('hide');
		}
	});
	// End show sub section of options tab when it checked

	// Begin show sub section of checkbox when it checked
	$('.company-event-page .share .cb-mark').on('change', function(){
		var $this = $(this);
		var $section = $this.closest('.share').find('.section');
		if($section.length === 0){
			return;
		}
		if($this.prop('checked')) {
			$section.removeClass('hide');
		} else {
			$section.addClass('hide');
		}
	});
	// End show sub section of checkbox when it checked

	// Begin show week list when it checked
	$('.details-event .time-section .cb-mark').on('change', function(){
		var $this = $(this);
		var $section = $this.closest('.time-section').find('#weekList');
		if($this.prop('checked')) {
			$section.removeClass('hide');
		} else {
			$section.addClass('hide');
		}
	});
	// End show week list when it checked

	// Begin week-list
	$('.week-list li').on('click', function(){
		var $this = $(this);
		if($this.hasClass('active')){
			$this.removeClass('active');
		}else{
			$this.addClass('active');
		}
	});
	// End week-list

    // Begin owl
    var owl = $("#serchPhotoOwl");

    owl.owlCarousel({
        pagination : false,
        items : 3,
        itemsDesktop : [1199, 3], //5 items between 1000px and 901px
        itemsDesktopSmall : [991, 3], // betweem 900px and 601px
        itemsTablet: [767, 2], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });

      // Custom Navigation Events
    $("#searchSection .next").click(function(){
        owl.trigger('owl.next');
    });

    $("#searchSection .prev").click(function(){
        owl.trigger('owl.prev');
    });
    // End owl
});
