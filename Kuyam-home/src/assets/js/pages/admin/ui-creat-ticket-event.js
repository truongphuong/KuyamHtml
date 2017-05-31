'use strict';

$(document).ready(function () {
    $('.chosen-select').chosen();
    $('.chosen-single-select').chosen({ disable_search_threshold: 10 });
});