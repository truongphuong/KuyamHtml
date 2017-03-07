'use strict';

document.getElementById('settingsNav').className = "active";

function deleteTag($this) {	  
    var liTag = $this.parentElement.parentElement;
	var liIndex = parseInt(liTag.attributes.getNamedItem('data-original-index').value) + 1;
    liTag.remove();   

	$('#tagesSelect option:nth-child(' + liIndex + ')').remove();
	
	$('#tagesSelect').selectpicker('refresh');     
}

$(document).ready(function(){
	
	iscrollSelect('divCategorySelect', 'iscrollCategorySelect');
	iscrollSelect('divStateSelect', 'iscrollStateSelect');
	iscrollSelect('divCategorySelect', 'iscrollCategorySelect');
	iscrollSelect('divTagesSelect', 'iscrollTagesSelect');   
    $('#sectionSelect').selectpicker();   
	
	// Begin active item sidebar/select and show form follow step by step
	$('.company-settings-page .content footer .btn').on('click', function(){
		var $this = $(this);
		var section = $this.data('section');
		var $section = $('#' + section);
		if(section === ''){
			$('.company-settings-page .sidebar').addClass('active');
			return;
		}
		
		$('.company-settings-page .sidebar li').removeClass('active');  
		$('.company-settings-page .sidebar li[data-section="' + section + '"]').addClass('active');
		
		$('.company-settings-page .content').addClass('hide');
		$section.removeClass('hide');
		$('#sectionSelect').val(section).trigger('change');
	});
	   
	$(document).on('click', '.company-settings-page .sidebar.active li a', function(e){  
		e.preventDefault();
		var $this = $(this);
		var $li = $this.closest('li');
		var section = $li.data('section');
		var $section = $('#' + section); 
		
		$('.company-settings-page .sidebar li').removeClass('active');
		$li.addClass('active');  
		
		$('.company-settings-page .content').addClass('hide');
		$section.removeClass('hide');  
		$('#sectionSelect').val(section).trigger('change'); 
	});
	
	$('#sectionSelect').on('change', function(){  
		var $this = $(this);
		var section = $this.val();
		var $section = $('#' + section);
		
		$('.company-settings-page .content').addClass('hide');
		$section.removeClass('hide'); 
		
		$('.company-settings-page .sidebar li').removeClass('active');  
		$('.company-settings-page .sidebar li[data-section="' + section + '"]').addClass('active');
	});
	// End active item sidebar and show form follow step by step
	
	// Begin show sub section of checkbox when it checked
	$('.company-connect .cb-mark').on('change', function(){
		var $this = $(this);
		var $section = $this.closest('.share').find('.section');
		if($this.prop('checked')) {
			$section.removeClass('hide');  
		} else {
			$section.addClass('hide');			
		}
	});	
	// End show sub section of checkbox when it checked
	
	// Begin eneble sub section of radio when it checked and disable sub section of radio when it uncheck
	$('.payment-method .radio-mark').on('change', function(){
		var $this = $(this);
		var $section = $this.closest('.method').find('.section');
		$('.payment-method .section').addClass('disabled');
		$section.removeClass('disabled'); 
	});
	// End eneble sub section of radio when it checked and disable sub section of radio when it uncheck
	
	// Begin stripe section
	$('.btn-stripe-connect').on('click', function(){
		var $this =  $(this);
		$this.addClass('hide');
		$('.btn-stripe-connected').removeClass('hide');
	});
	
	$('.btn-stripe-connected').on('click', function(){
		var $this =  $(this);
		$this.addClass('hide');
		$('.reconnect-section').removeClass('hide');
	});
	
	$('.btn-reconnect').on('click', function(){
		var $this = $(this);  
		var $section =  $this.closest('.reconnect-section');
		$section.addClass('hide');
		$('.btn-stripe-connected').removeClass('hide');  
	});
	// End stripe section
	
	// Begin upload logo
	var $sectionLogo = $('.logo-section .frame');
	var $fileLogo = $('#fileLogo');
	$('.logo-section .upload, .logo-section .change').on('click', function(){
		$fileLogo.click();
	});
	
	$fileLogo.on('change', function(){		
		$sectionLogo.removeClass('default');
	});
	
	$('.logo-section .delete').on('click', function(){
		$sectionLogo.addClass('default');
	});
	// Begin upload logo                 
});
