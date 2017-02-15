$(document).ready(function(){
    $(".receipt-dropdown").on("click", function(){
        var $this = $(this);
        $this.parents("div.receipt-item").find(".receipt-details").toggle();
        if($this.hasClass("receipt-dropdown-up"))
        {
            $this.removeClass("receipt-dropdown-up");
        } else {
            $this.addClass("receipt-dropdown-up");
            //This is mobile case
            if($(document).width() <= 600)
            {
                $this.css({"bottom": -($this.parents(".item").height() - 50) + "px"});
            }
        }
    });

    $('.date-from').datepicker({
        format: 'mm/dd/yy',
    }).on('changeDate', function(e){
        var $this = $(this);
        $this.datepicker('hide');
    });

    $('.date-to').datepicker({
        format: 'mm/dd/yy',
    }).on('changeDate', function(e){
        var $this = $(this);
        $this.datepicker('hide');
    });
});
