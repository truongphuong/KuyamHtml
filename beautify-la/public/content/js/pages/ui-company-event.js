'use strict';

$(document).ready(function () {
  $('#typeSelect, #fromSectlect, #toSelect').selectpicker();

  iscrollSelect('divClassSelect');
  iscrollSelect('divDonationSelect');
  iscrollSelect('divRSVPSelect');
  iscrollSelect('divTicketSelect');

  iscrollSelect('divMailchimpSelect');
  iscrollSelect('divConstantContactSelect');
  iscrollSelect('divStateSelect');

  $('#chosenTags').chosen();
  $('#chosenTags1').chosen({
    isShowDropDown: true
  });

  var $txtDateStart = $('#txtDateStart');
  var $sectionDateStart = $('#sectionDateStart');
  var $btnDateStart = $('#btnDateStart');
  datetimepickerDate($txtDateStart, $sectionDateStart);

  var $txtDateEnd = $('#txtDateEnd');
  var $sectionDateEnd = $('#sectionDateEnd');
  var $btnDateEnd = $('#btnDateEnd');
  datetimepickerDate($txtDateEnd, $sectionDateEnd);

  // Begin active item sidebar/select and show form follow step by step
  $('.company-event-page .content footer .btn').on('click', function () {
    var $this = $(this);
    var section = $this.data('section');
    var $section = $('#' + section);
    if (section === '') {
      $('.company-event-page .sidebar').addClass('active');
      return;
    }

    $('.company-event-page .sidebar li').removeClass('active');
    $('.company-event-page .sidebar li[data-section="' + section + '"]').addClass('active');

    $('.company-event-page .content').addClass('hide');
    $section.removeClass('hide');
    $('#sectionSelect').val(section).trigger('change');
  });
  // End active item sidebar and show form follow step by step

  // Begin show form follow type
  $('#typeSelect').on('change', function () {
    var $this = $(this);
    var section = $this.val();
    var $section = $('#' + section);
    $('.company-event-page .content.type-event .type-section').addClass('hide');
    $section.removeClass('hide');
  });
  // End show form follow type

  // Begin show sub section of options tab when it checked
  $('.options-event .incentive .cb-mark').on('change', function () {
    var $this = $(this);
    var $section = $this.closest('.incentive').find('.form');
    if ($this.prop('checked')) {
      $section.removeClass('hide');
    } else {
      $section.addClass('hide');
    }
  });
  // End show sub section of options tab when it checked

  // Begin show sub section of checkbox when it checked
  $('.company-event-page .share .cb-mark').on('change', function () {
    var $this = $(this);
    var $section = $this.closest('.share').find('.section');
    if ($section.length === 0) {
      return;
    }
    if ($this.prop('checked')) {
      $section.removeClass('hide');
    } else {
      $section.addClass('hide');
    }
  });
  // End show sub section of checkbox when it checked

  // Begin show week list when it checked
  $('.details-event .time-section .cb-mark').on('change', function () {
    var $this = $(this);
    var $section = $this.closest('.time-section').find('#weekList');
    if ($this.prop('checked')) {
      $section.removeClass('hide');
    } else {
      $section.addClass('hide');
    }
  });
  // End show week list when it checked

  // Begin week-list
  $('.week-list li').on('click', function () {
    var $this = $(this);
    if ($this.hasClass('active')) {
      $this.removeClass('active');
    } else {
      $this.addClass('active');
    }
  });
  // End week-list

  // Begin owl
  var owl = $("#serchPhotoOwl");

  owl.owlCarousel({
    pagination: false,
    items: 3,
    itemsDesktop: [1199, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [991, 3], // betweem 900px and 601px
    itemsTablet: [767, 2], //2 items between 600 and 0
    itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
  });

  // Custom Navigation Events
  $("#searchSection .next").click(function () {
    owl.trigger('owl.next');
  });

  $("#searchSection .prev").click(function () {
    owl.trigger('owl.prev');
  });
  // End owl

  // Begin show/hide .address-section
  $('.address-section input[name="address"]').on('change', function () {
    var $radioChecked = $('input[name="address"]:checked');
    var inputVal = parseInt($radioChecked.val());
    var $section = $('#alternativeSection');
    if (inputVal === 1) {
      $section.removeClass('hide');
    } else {
      $section.addClass('hide');
    }
  });
  // End show/hide .address-section

  // Begin all tooltip
  var $sectionCopyTooltip = $('.input-url .copy');
  var contentCopyTooltip = '<span class="copied">Link copied</span>';
  var classCopyTooltip = 'tooltipster-default tooltipster-copied';

  tooltipResize($sectionCopyTooltip, contentCopyTooltip, classCopyTooltip);

  var $sectionHelpClassTooltip = $('.type-class .section-num .icon-help');
  var contentHelpClassTooltip = '<span class="help">Global price for all classes</span>';
  var classHelpClassTooltip = 'tooltipster-default tooltipster-help';

  tooltipResize($sectionHelpClassTooltip, contentHelpClassTooltip, classHelpClassTooltip);

  var $sectionHelpDonationTooltip = $('.type-donation .section-num .icon-help');
  var contentHelpDonationTooltip = '<span class="help">Global price for all dominations</span>';
  var classHelpDonationTooltip = 'tooltipster-default tooltipster-help';

  tooltipResize($sectionHelpDonationTooltip, contentHelpDonationTooltip, classHelpDonationTooltip);

  monitorResize(function () {
    $sectionCopyTooltip.tooltipster('destroy');
    tooltipResize($sectionCopyTooltip, contentCopyTooltip, classCopyTooltip);

    $sectionHelpClassTooltip.tooltipster('destroy');
    tooltipResize($sectionHelpClassTooltip, contentHelpClassTooltip, classHelpClassTooltip);

    $sectionHelpDonationTooltip.tooltipster('destroy');
    tooltipResize($sectionHelpDonationTooltip, contentHelpDonationTooltip, classHelpDonationTooltip);
  });
  // End all tooltip

  // Begin remove spot of ticket
  $(document).on('click', '.type-tickets .item .close', function () {
    var $this = $(this);
    $this.closest('.item').remove();
  });
  // End remove spot of ticket

  // Begin show/hide new organizer
  $('.organizer-section input[name="organizer"]').on('change', function () {
    var $radioChecked = $('input[name="organizer"]:checked');
    var inputVal = parseInt($radioChecked.val());
    var $section = $('#labelOrganizer');
    if (inputVal === 1) {
      $section.removeClass('hide');
    } else {
      $section.addClass('hide');
    }
  });
  // End show/hide new organizer
});