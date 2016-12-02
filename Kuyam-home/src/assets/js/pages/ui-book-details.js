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

function optionWidth(){
    if(isView.mobile()){
        $('.book-option .dropdown-menu').css({'width': $(window).width()});
    }else{
        $('.book-option .dropdown-menu').css({'width': ''});
    }
}

$(document).ready(function(){
    $(document).on('click', '.icon-unlike', function(e){
        e.preventDefault();
        var $this = $(this);
        var isFavorited = $this.find('.vote-icon').hasClass('icon-like');
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

    $(document).on('click', '.option-select li', function(e){
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

    //Begin set width for option dropdow
    optionWidth();
    monitorResize(function(){
        optionWidth();
    });
    //End set width for option dropdow

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
});