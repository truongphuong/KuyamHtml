"use strict";

$(document).ready(function () {
    $(".btn-rely").click(function () {
        var $this = $(this);
        $this.parents(".comment-item").find(".comment-rely").removeClass("hide");
    });
});