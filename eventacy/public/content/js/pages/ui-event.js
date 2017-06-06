'use strict';

$(document).ready(function () {
    var map;
    function initialize() {
        var myLatlng = new google.maps.LatLng(34.0906351, -118.374025);
        var myOptions = {
            zoom: 16,
            disableDefaultUI: true,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("google-map"), myOptions);
        var myLatLng = new google.maps.LatLng(34.0906351, -118.374025);
        var beachMarker = new google.maps.Marker({
            position: myLatLng,
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    function loadmap(lat, lon, googleIcon) {
        var myLatlng = new google.maps.LatLng(lat, lon);
        var myOptions = {
            zoom: 16,
            disableDefaultUI: true,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("google-map"), myOptions);
        var myLatLng = new google.maps.LatLng(lat, lon);
        var beachMarker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: googleIcon
        });
    }

    $(document).on('click', '.video.default', function () {
        var $this = $(this);
        $this.removeClass('default');
        $this.closest('.video').find('iframe')[0].src += "?autoplay=1";
    });

    $(document).find('.grab .progress, .rewards .progress').each(function () {
        var $this = $(this);
        var progressBarW = $this.find('.progress-bar').width();
        var textW = $this.find('.text').width();
        if (progressBarW < textW) {
            $this.addClass('default');
        }
    });
});