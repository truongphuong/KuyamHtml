var map;
function initialize(){
    var myLatlng = new google.maps.LatLng(34.0906351, -118.374025);
    var myOptions ={
        zoom: 16,
        disableDefaultUI: true,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      map = new google.maps.Map(document.getElementById("google-map-1"), myOptions);
      var myLatLng = new google.maps.LatLng(34.0906351, -118.374025);
      var beachMarker = new google.maps.Marker({
          position: myLatLng,
          map: map
      });
}
google.maps.event.addDomListener(window, 'load', initialize);


function loadmap(lat, lon, googleIcon){
    var myLatlng = new google.maps.LatLng(lat, lon);
    var myOptions ={
    zoom: 16,
    disableDefaultUI: true,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("google-map-1"), myOptions);
    var myLatLng = new google.maps.LatLng(lat, lon);
    var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: googleIcon
    });
}

function infoContent(){
    if(!isView.mobile()){
        $('.book-aside').appendTo($('#infoSidebar'));
    }else{
        $('.book-aside').appendTo($('#info'));
    }
}

$(document).ready(function(){
    $(document).on('click', '.icon-unlike', function(e){
        e.preventDefault();
        var $this = $(this);
        var isFavorited = $this.hasClass('icon-like');
        if(isFavorited){
            $this.closest('.site-banner').find('.icon-unlike').removeClass('icon-like');
        }else{
            $this.closest('.site-banner').find('.icon-unlike').addClass('icon-like');
        }
    });

    $('.tooltipster-category').tooltipster({
        contentAsHTML: true,
        content: $('#categoryList'),
        trigger: 'click',
        position: 'bottom',
        theme: 'tooltipster-default category-tooltip',
        offsetY: 9,
        interactive: true,
        positionTracker: true,
        autoClose: false,
        debug: false,
        functionReady: function (origin, tooltip) {
            setTimeout(function(){
                var isScroll = $('.category-tooltip #categoryList').find('.wrap-dropdown-menu-inner').length;
                if(isScroll){
                    refreshNiceScroll('#categoryList');
                }else{
                    iscrollContent('#categoryList');
                }
            }, 300);

            monitorResize(function(){
                if(isView.mobile()){
                    $('.tooltipster-category').tooltipster('hide');
                }
            });
        }
    });

    $(document).on('click', '.option-select .option-header', function(e){
        e.stopPropagation()
    });

    $(document).on('click', '.option-select .option-item', function(e){
        var $this = $(this);
        var selectedVal = $this.find('.text').text();
        $this.closest('.option-select').find('a .text').html(selectedVal);
        $this.closest('.option-select').find('li').removeClass('selected');
        $this.addClass('selected');

        var isWhat = $this.closest('#whatSelect').hasClass('what-select');
        if(isWhat){
            $('#whoSelect').removeClass('disabled');
        }else{
            $(document).find('.site-calendar .bg-white-50').addClass('hide');
        }
    });

    $('.session-item').hover(function(){
        $(this).addClass("active");
    }, function(){
        $(this).removeClass("active");
    });

    if(!isMobile.Windows()){
        var isActive = $(document).find('#bookTabs li.active a').attr('href');
        var activeListID = isActive + 'List';
        if(isActive === '#appointment'){
            isActive = $(document).find('#appointmentTabs li.active a').attr('href');
            activeListID = isActive + 'List';
        }

        iscrollContent(activeListID);

        monitorResize(function(){
            refreshNiceScroll(activeListID);
        });
    }

    $('#bookTabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var $this = $(e.target);
        var hrefVal = $this.attr('href');
        var listID = hrefVal + 'List';

        if(!isMobile.Windows()){
            iscrollContent(listID);

            monitorResize(function(){
                refreshNiceScroll(listID);

                if(!isView.mobile() && hrefVal === '#info'){
                    $('#bookTabs a[href="#appointment"]').click();
                }
            });
        }
    });

    $('#appointmentTabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var $this = $(e.target);
        var hrefVal = $this.attr('href');
        var listID = hrefVal + 'List';

        if(!isMobile.Windows()){
            iscrollContent(listID);

            monitorResize(function(){
                refreshNiceScroll(listID);
            });
        }
    });

    //Begin reposition info content when resize screen
    infoContent();

    monitorResize(function(){
        infoContent();
    });
    //End reposition info content when resize screen

    $('#reviewModal').on('show.bs.modal', function (e) {
        $('#reviewRating').rating();
    });

    $('.book-caption .votes .total-review').on('click', function(){
        $('#bookTabs a[href="#views"]').click();
    });

    $('.btn-book').on('click', function(){
        $('#bookTabs a[href="#appointment"]').click();
    });

    $(document).on('click', '#checkoutModal .link-delete', function(e){
        e.preventDefault();
        var $this = $(this);
        var deleteVal = $this.closest('.tr').data('tr');
        $('[data-tr="' + deleteVal + '"]').remove();
    });

    $(document).on('click', '.contact .link-edit', function(e){
        e.preventDefault();
        var $this = $(this);
        $this.addClass('hide');
        $this.closest('.contact-radio').find('strong').addClass('hide');
        $this.closest('.contact-radio').find('.group').removeClass('hide');
    });

    $(document).on('click', '.contact .btn', function(){
        var $this = $(this);
        var inputVal = $this.closest('.group').find('.form-control').val();
        $this.closest('.contact-radio').find('strong').html(inputVal);
        $this.closest('.contact-radio').find('strong').removeClass('hide');
        $this.closest('.contact-radio').find('.link-edit').removeClass('hide');
        $this.closest('.group').addClass('hide');
    });

    $('.option-select .dropdown').on('shown.bs.dropdown', function (e) {
        var contentID = '#' + $(e.target).find('.dropdown-menu').attr('id');
        setTimeout(function(){
            var isScroll = $(contentID).find('.wrap-dropdown-menu-inner').length;
            if(isScroll){
                refreshNiceScroll(contentID);
            }else{
                iscrollContent(contentID);
            }
        }, 300);
    });
});