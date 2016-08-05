$(document).ready(function () {
    $('#txtFrom').datetimepicker({
        sideBySide: true,
        format: 'ddd, MMM Do',
        defaultDate: moment(),
        minDate: '03/10/2016'
    });

    $('#txtTo').datetimepicker({
        sideBySide: true,
        format: 'ddd, MMM Do',
        defaultDate: moment(),
        minDate: '03/10/2016'
    });

    iscrollSelect('divPayment', 'iscrollPayment');

    $('#invoicesTable').bootstrapTable({
        search: true,
        searchAlign: 'left',
        pagination: true,
        paginationPreText: "Previous",
        paginationNextText: "Next",
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Showing ' + pageFrom + ' to ' + pageTo + ' of ' + totalRows + ' entries';
        },
        detailFormatter: function (index, row, element) {
            var htmlVal = '';
            htmlVal += '<table>';
            htmlVal += '<tr>';
            htmlVal += '<th valign="top">receipt #:</th>';
            htmlVal += '<td valign="top"><span>09976457</span></td>';
            htmlVal += '<td rowspan="4" class="cols-print" valign="bottom" align="right"><button onClick="invoicesPrint()" class="btn btn-print"><span class="icon icon-print-white"></span> Print Invoice</button></td>';
            htmlVal += '</tr>';
            htmlVal += '<tr>';
            htmlVal += '<th valign="top">purchased on:</th>';
            htmlVal += '<td valign="top"><span>11/19/2015</span></td>';
            htmlVal += '<tr>';
            htmlVal += '<th valign="top">status:</th>';
            htmlVal += '<td valign="top"><span>confirmed</span></td>';
            htmlVal += '</tr>';
            htmlVal += '<tr>';
            htmlVal += '<th valign="top">payment:</th>';
            htmlVal += '<td valign="top"><span>paypal, gift card Victoria Rodriguez</span></td>';
            htmlVal += '</tr>';
            htmlVal += '</table>';
            return htmlVal;
        },
        onExpandRow: function (index, row, $detail) {
            console.log('open');
        },
        onCollapseRow: function (index, row) {
            console.log('close');
        }
    });

    if ($('.invoices-table').length !== 0) {
        $('.invoices-table').css({
            'width': $('.kuyam-content').width()
        });
        $('.invoices-table').show();
    }

    $('ul.pagination').prepend($('<li class="page-first disabled"><a href="javascript:void(0)">First</a></li>'));
    $('<li class="page-last"><a href="javascript:void(0)">Last</a></li>').appendTo($('ul.pagination'));
});

function invoicesPrint(){
	window.print();
}