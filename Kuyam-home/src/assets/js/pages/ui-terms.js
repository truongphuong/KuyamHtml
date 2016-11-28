$(document).ready(function(){
    if(!isMobile.Windows()){
        var activeListID = $(document).find('#termsTabs li.active a').attr('href');
        iscrollContent(activeListID);
    }

    $('.terms-tabs').on('shown.bs.tab', function (e) {
        refreshNiceScroll('#tabTerms');
        refreshNiceScroll('#tabPrivacy');
        refreshNiceScroll('#tabServices');
    });
});