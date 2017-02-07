'use strict';

$(document).ready(function () {
    $('#tblServices').bootstrapTable();

    $('.chosen-select').chosen();
    $('.chosen-single-select').chosen({ disable_search_threshold: 10 });
    $(document).on('click', '#linkAdd', function (e) {
        e.preventDefault();
        $('#ownedList').addClass('hide');
        $('#ownedAdd').find('h2').text('add owned company');
        $('#ownedAdd').removeClass('hide');
    });
    $(document).on('click', '#ownedList .link-edit', function (e) {
        e.preventDefault();
        $('#ownedList').addClass('hide');
        $('#ownedAdd').find('h2').text('edit owned company');
        $('#ownedAdd').removeClass('hide');
    });
    $(document).on('click', '#linkBack', function (e) {
        e.preventDefault();
        $('#ownedList').removeClass('hide');
        $('#ownedAdd').addClass('hide');
    });
    $(document).on('click', '#headerImgList .close', function () {
        var $this = $(this);
        $this.parent().remove();

        var $list = $('#headerImgList');
        if ($list.find('li').length === 0) {
            $list.closest('tr').hide();
        }
    });
});