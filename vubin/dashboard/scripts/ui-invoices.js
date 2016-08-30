$(document).ready(function () {
    $('#txtFrom').datetimepicker({
        sideBySide: true,
        format: 'MM/DD/YYYY',
        defaultDate: moment()
    });

    $('#txtTo').datetimepicker({
        sideBySide: true,
        format: 'MM/DD/YYYY',
        defaultDate: moment()
    });

    iscrollSelect('divPayment', 'iscrollPayment');

    $('#invoicesTable').bootstrapTable({
        search: true,
        searchAlign: 'left',
        pagination: true,
        paginationPreText: "",
        paginationNextText: "",
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
        }
    });

    if ($('.invoices-table').length !== 0) {
        $('.invoices-table').css({
            'width': $('.kuyam-content').width()
        });
        $('.invoices-table').show();
    }

    $('.invoices-table ul.pagination').prepend($('<li class="page-first disabled"><a href="javascript:void(0)">First</a></li>'));
    $('<li class="page-last"><a href="javascript:void(0)">Last</a></li>').appendTo($('.invoices-table ul.pagination'));
    $('<li class="page-number"><span>.&nbsp;.&nbsp;.</span></li>').insertAfter($('.invoices-table .page-pre'));
    $('<li class="page-number"><a href="javascript:void(0)">6</a></li><li class="page-number"><a href="javascript:void(0)">5</a></li><li class="page-number"><a href="javascript:void(0)">6</a></li><li class="page-number"><span>.&nbsp;.&nbsp;.</span></li>').insertBefore($('.invoices-table .page-next'));
    $('.invoices-table .page-pre').addClass('disabled');
    existSelect('form-select-sort');

    $('#invoiceAccordion').on('shown.bs.collapse', function () {
        $(this).find('.panel').removeClass('open');
        $(this).find('a[aria-expanded="true"]').closest('.panel').addClass('open');
    });

    $('#invoiceAccordion').on('hide.bs.collapse', function () {
        $(this).find('.panel').removeClass('open');
    });
});

function invoicesPrint(){
	window.print();
}