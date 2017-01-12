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

function autoWidthOption(whatSelect, whoSelect){
    $(whatSelect).css({'width': ''});
    $(whoSelect).css({'width': ''});
    var whatWidth = $(whatSelect).innerWidth();
    var aWidth = $(whatSelect).find('a[data-toggle="dropdown"]').innerWidth() + $(whatSelect).find('.icon-down').outerWidth();
    if(aWidth < whatWidth){
        var whoWidth = $(whoSelect).innerWidth();
        var whoWidthNew = whoWidth + whatWidth - aWidth;
        $(whatSelect).css({'width': aWidth});
        $(whoSelect).css({'width': whoWidthNew});
    }
}
function removeAffix($affix){
    $(window).off('.affix');
    $affix.removeClass("affix affix-top affix-bottom").removeData("bs.affix");
}

function activeAffix(){
    var $mainAffix = $('.main-affix');
    var $navAffix = $('.nav-affix');

    $mainAffix.width($mainAffix.parent().width());
    $navAffix.width($navAffix.parent().width());

    removeAffix($mainAffix);
    removeAffix($navAffix);

    if(isView.mobile()){
        return;
    }

    var $activeAffix;

    var mainHeight = $mainAffix.load().height();
    var navHeight = $navAffix.load().height();

    if(mainHeight === navHeight){
        return;
    }else if(mainHeight > navHeight){
        $activeAffix = $navAffix;
    }else{
        $activeAffix = $mainAffix;
    }

    $activeAffix.affix({
        offset: {
            top: $('.main-content').offset().top,
            bottom: function () {
                return (this.bottom = $('#contact').outerHeight(true) + $('.site-footer').outerHeight(true))
            }
        }
    });
}

$(document).ready(function(){
    activeAffix();

    monitorResize(function(){
        setTimeout(function(){
            activeAffix();
        }, 1000);

    });

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

    var categoryListContent = $('#categoryListContent').html();
    $('#categoryListContent').remove();
    $('.tooltipster-category').tooltipster({
        contentAsHTML: true,
        content: categoryListContent,
        trigger: 'click',
        position: 'bottom',
        theme: 'tooltipster-default category-tooltip',
        offsetY: 9,
        interactive: true,
        positionTracker: true,
        autoClose: true,
        debug: false,
        functionReady: function (origin, tooltip) {
            iscrollContent('#categoryList');

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
        var optionSelect = '.option-select';
        var categoriesSelect = '#categoriesSelect';
        var whatSelect = '#whatSelect';
        var whoSelect = '#whoSelect';
        var lightbox = '.site-calendar .bg-white-50';
        var selectedVal = $this.find('.text').text();
        $this.closest(optionSelect).find('a .text').html(selectedVal);
        $this.closest(optionSelect).find('li').removeClass('selected');
        $this.addClass('selected');
        var isCategories = $this.closest(categoriesSelect).hasClass('categories-select');
        var isWhat = $this.closest(whatSelect).hasClass('what-select');
        var isWho = $this.closest(whoSelect).hasClass('who-select');
        if(isCategories){
            $(whatSelect).find('a .text').html('What would you like done?');
            $(whoSelect).addClass('disabled');
            $(whoSelect).find('a .text').html('Any staff');
            $(document).find(lightbox).removeClass('hide');
            if(isView.desktop()){
                $(whatSelect).css({'width': ''});
                $(whoSelect).css({'width': ''});
            }
        }
        if(isWhat){
            $(whoSelect).removeClass('disabled');
            $(whoSelect).find('a .text').html('Any staff');
            $(document).find(lightbox).removeClass('hide');
            if(isView.desktop()){
                autoWidthOption(whatSelect, whoSelect);
            }
        }
        if(isWho){
            $(document).find(lightbox).addClass('hide');
        }
    });

    monitorResize(function(){
        if(isView.desktop()){
            autoWidthOption('#whatSelect', '#whoSelect');
        }else{
            $('#whatSelect').css({'width': ''});
            $('#whoSelect').css({'width': ''});
        }
    });

    $('.session-item').hover(function(){
        $(this).addClass("active");
    }, function(){
        $(this).removeClass("active");
    });

    $('#bookTabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        activeAffix();
    });

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

    if(isView.mobile()){
        var $bookNav = $('.book-nav');
        var navheight = parseInt($bookNav.height());
        console.log(navheight);
        var navPosition = parseInt($bookNav.offset().top - navheight);
        console.log(navPosition);
        $(window).scroll(function(e) {
            var scroll = parseInt($(window).scrollTop());
            var $wrapper = $('.wrapper');
            if(scroll > navPosition){
                $wrapper.addClass('nav-fixed');
            }else{
                $wrapper.removeClass('nav-fixed');
            }
        });
    }
});
