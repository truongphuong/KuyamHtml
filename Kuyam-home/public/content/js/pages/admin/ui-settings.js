'use strict';

$(document).ready(function () {
    $('.chosen-select').chosen();
    nicescrollSelect('tdTags');

    $('#tdTags li a').on('click', function (e) {
        e.stopPropagation();
        var $this = $(this);
        var $parent = $('#tdTags');
        var $li = $this.closest('li');
        var originalIndex = $li.data('original-index');
        if ($(e.target).attr('class') === 'close') {
            $li.remove();
            $parent.find('select option[value="' + originalIndex + '"]').remove();
            if ($parent.find('li').length === 1) {
                $parent.addClass('hide');
                return;
            }
            refreshNiceScroll('#tdTags');
            return;
        }
        $parent.find('li').removeClass('selected');
        $li.addClass('selected');
        $parent.find('select').val(originalIndex);
        var optionText = '';
        if (parseInt(originalIndex) === 0) {
            optionText = $parent.find('select option:first-child').text();
            $parent.find('.bootstrap-select').removeClass('active');
        } else {
            optionText = $parent.find('select option[value="' + originalIndex + '"]').text();
            $parent.find('.bootstrap-select').addClass('active');
        }
        $parent.find('.filter-option').text(optionText);
        $parent.find('.bootstrap-select').removeClass('open');
        $parent.find('.dropdown-toggle').attr('aria-expanded', false);
    });
});