$(document).ready(function(){	
	if(wScreen > 767){	
		$('.kuyam-sidebar').css({'max-width': wScreen / 7});
		$('.kuyam-subnav').css({'max-width': wScreen / 7});
	}else{
		$('.kuyam-sidebar').css({'max-width': wScreen});
		$('.kuyam-subnav').css({'max-width': wScreen});
	}
	
	if($('#subnavList').length !== 0){
		iscrollContent('#subnavList');
	}
});

$(window).on('resize', function(){
	if(wScreen > 767){	
		$('.kuyam-sidebar').css({'max-width': wScreen / 7});
		$('.kuyam-subnav').css({'max-width': wScreen / 7});
	}else{
		$('.kuyam-sidebar').css({'max-width': wScreen});
		$('.kuyam-subnav').css({'max-width': wScreen});
	}
});