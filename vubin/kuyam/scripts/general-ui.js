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
	
	$('.btn_sub_item').click(function() {
		//$('.dropmenu-item-content').slideUp();
		$(this).parent().find('.dropmenu-item-content').slideToggle();
	});
	 
	
	
	$('.menu__level2, .menu__level3').hide();
	
	$('.menu__level2').show();
	
	$('.btn_menu_dashboard').click(function(){
		
		$('.menu__level2').hide();
		$('.menu__level3').show();
	});
	
	$('.btn_menu_back').click(function(){
		
		$('.menu__level3').hide();
		$('.menu__level2').show();
	});
	
});