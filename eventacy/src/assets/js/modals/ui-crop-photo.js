'use strict';

$(document).ready(function(){
    var $sectionPhoto = $('#companyPhoto');
    var $filePhoto = $('#filePhoto');
    var $modalPhoto = $('#cropPhotoModal');
    var $croppiePhoto = $('#croppiePhoto');

    $(document).on('click', '.section-photo .upload', function(e){
        $filePhoto.click();
    });

    $('.section-photo .edit').on('click', function(e){
        $modalPhoto.modal('show');
    });

    crop($sectionPhoto, $filePhoto, $modalPhoto, $croppiePhoto, 2);
});
