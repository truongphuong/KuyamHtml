$(document).ready(function(){
    $('#notesModal').on('shown.bs.modal', function () {
        iscrollContent('#notesList');

        $(window).resize(function(){
            refreshNiceScroll('#notesList');
        });
    });
});