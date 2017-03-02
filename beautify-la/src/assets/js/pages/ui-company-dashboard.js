'use strict';

document.getElementById('dashboardNav').className = "active";

$(document).ready(function(){
	$('.select-settings').selectpicker();
	$('.selectpicker-settings').selectpicker();
	$('.btn-settings').click(function(e){
		var slideNext = "#" + $(this).attr("slideNext"),
			slideCurrent = "#" + $(this).attr("slideCurrent"),
			navClass = "." + $(this).attr("slideNext");
		$(slideCurrent).addClass("hide");
		$(slideNext).removeClass("hide");
		$('#settings-steps li').removeClass("active");
		$('#settings-steps').find(navClass).addClass("active");
	})

	$('#select-payment').change(function(e){
		var optValue = $(this).val(),
		paymentID = '#payment-' + optValue;

		console.log(paymentID);
		$('.payment-section').addClass("hide");
		$(paymentID).removeClass("hide");
	})

	$('.popover-delete').click(function(e){
		$(this).siblings('.popover-confirm').show();
	})

	$('.popover-confirm .icon-no').click(function(e){
		$(this).parents('.popover-confirm').hide();
	})

	$('.popover-confirm .icon-yes').click(function(e){
		$(this).parents('.popover-confirm').hide();
	});
	
	function placeholderCustom($obj){
		var inputVal = $obj.val();
		if(inputVal !== ''){
			$obj.addClass('has-value');
		}else{
			$obj.removeClass('has-value');
		}
	}
	
	$( document ).ready(function() {
		$('.placeholder-custom .form-control').each(function(){
			var $this = $(this);
			placeholderCustom($this);
		}).on('keyup', function(){
			var $this = $(this);
			placeholderCustom($this);
		});
		
		$('input[name="whereEvent"]').on('change', function(){
			var $radioChecked = $('input[name="whereEvent"]:checked');
			var inputVal = parseInt($radioChecked.val());
			var $section = $('#alternativeSection');
			if(inputVal === 1){
				$section.removeClass('disable');
			}else{
				$section.addClass('disable');
			}
		});
	});	
});