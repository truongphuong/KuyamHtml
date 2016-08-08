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
};	
$(function() {
	if( isMobile.any() ) {
		$('#detech-devices').addClass("detech-devices");
	}
	
	//mobile side menu
	

	
	$('div.navbar-toggle').click(function() {
	  $('.menu__wrap').addClass('menu-slide-right');
	  $('.bg-fading').addClass('show-bg-fading');
	  $('.icon_mobile_close_menu').show();
	 //$(this).hide();
		
	});
	
	$('.bg-fading, .icon_mobile_close_menu').click(function() {
	  $('.menu__wrap').removeClass('menu-slide-right');
	  $('.bg-fading').removeClass('show-bg-fading');
	  $('.icon_mobile_close_menu').hide();
		//$('.navbar-toggle').show();
	});
	
	
	var _defaultWidthSelect = 14;	
	var _selectBox = $('.select-custom-box .book-me-session-select');
	
	_selectBox.change(function(){
		
		 resizeSelectBox();
		
	});
	
	$(window).resize(function(){
		
		 resizeSelectBox();
	});
	
	
	function resizeSelectBox(){
		
		
		var _widthSelect = _selectBox.val().length * _defaultWidthSelect;
		if($('body').width()< 480){
			if(_widthSelect > 145){_widthSelect = 145;}		
			if(_widthSelect < 70){_widthSelect = 70;}
		}else{
			if(_widthSelect > 180){_widthSelect = 180;}		
			if(_widthSelect < 120){_widthSelect = 120;}
		}
		_selectBox.css("width",_widthSelect);
		
	}
	
	
	
	$('.btn_sub_item').addClass('sub_menu_icon_down');
	
	$('.btn_sub_item').click(function() {
		//$('.dropmenu-item-content').slideUp();
		$(this).parent().find('.dropmenu-item-content').slideToggle();
		$(this).toggleClass( 'sub_menu_icon_up', 'sub_menu_icon_down' );
	});
	 
	
	
	$('.menu__level2, .menu__level3').hide();
	
	$('.menu__level2').show();
	
	$('.btn_menu_dashboard').click(function(){
		
		$('.menu__level2, .menu__level3 li').hide();
		$('.menu__level3').show();
		
		
		 $($('.menu__level3 li').get()).each(function(i) {
			var $li = $(this);
			setTimeout(function() {
				
			  $li.addClass('fadeInRight').show();
			}, i*50); // delay 100 ms
		  });
		
		
	});
	
	$('.btn_menu_back').click(function(){
		
		$('.menu__level3, .menu__level2 li').hide();
		$('.menu__level2').show();
		
		
		  $($('.menu__level2 li').get()).each(function(i) {
			var $li = $(this);
			setTimeout(function() {
			  $li.addClass('fadeInLeft').show();
			}, i*50); // delay 100 ms
		  });
		

	});
	
});