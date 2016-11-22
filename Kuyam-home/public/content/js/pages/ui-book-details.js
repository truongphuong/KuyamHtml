"use strict";

var map;
function initialize() {
    var myLatlng = new google.maps.LatLng(34.0906351, -118.374025);
    var myOptions = {
        zoom: 16,
        disableDefaultUI: true,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("google-map-1"), myOptions);
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
    map = new google.maps.Map(document.getElementById("google-map-1"), myOptions);
    var myLatLng = new google.maps.LatLng(lat, lon);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: googleIcon

    });
}
$(document).ready(function () {
    $('.select-options').click(function (e) {
        $(".options-icon").removeClass("z-index-12");
        $(this).find(".options-icon").addClass("z-index-12");
    });

    $('.options-text li.options-item').click(function (e) {
        var a = $(e.target).attr('class');
        if (a != "link-service" || a != "link-class") {
            $(".bg-white-50").fadeOut();
            $('.options-text li.options-item').removeClass("active");
            $(this).addClass("active");
            $('#select-who').fadeIn();
            $('#select-who').find(".select-text").html("");
            var getValue = $(this).find(".options-value").html();
            $(this).parent().parent().parent().find(".select-text").html(getValue);
        }
    });

    $('#staffSelect').selectpicker();

    $('.session-item').hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    });
});