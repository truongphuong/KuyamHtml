$(document).ready(function () {
    maxCol('#appointmentDetails');
    iscrollContent('#iscrollAppointmentNotes');

    maxCol('#classDetails');
    iscrollContent('#iscrollClassNotes');

    maxCol('#blockerDetails');
    iscrollContent('#iscrollBlockerNotes');

    iscrollContent('#iscrollAttendeeList');
});

$(window).on('resize', function () {

});