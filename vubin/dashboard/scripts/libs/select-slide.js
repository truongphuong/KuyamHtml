(function($){
    var methods = {
        init: function(options) {
            var defaults = {
                indicators: true,
                height: 400,
                transition: 700,
                interval: 2300
            };
            options = $.extend(defaults, options);

            return this.each(function(){
                var $this = $(this);
                //bind html
                var html = bindHtml($this);
                    $this.hide();
                    $this.after(html);

                var $slider = $this.siblings();
                var $options = $slider.find('li');
                var $active_index = $options.filter('.active').index();
                var $active,
                    $btnBack = $slider.find('a.btnBack'),
                    $btnNext = $slider.find('a.btnNext');

                if($active_index != -1) { $active = $options.eq($active_index)}

                function bindHtml(ele) {
                    var html = '';
                    var options = ele.find('option');
                    html += '<div class="select-content-slide"><ul>';
                    $.each(options, function(idx, option){
                        if($(option).attr('selected')) {
                            html += '<li style="display: block" class="active">' + $(option).html() +'</li>';
                        } else {
                            html += '<li>' + $(option).html() +'</li>';
                        }
                    });
                    html += '</ul>';
                    html += '<a class="btnLink btnBack" href="#" title="back">back</a>';
                    html += '<a class="btnLink btnNext" href="#" title="next">next</a>';
                    html += '</div>';

                    return html;
                }

                // This function will transition the slide to any index of the next slide
                function moveSlide(index) {
                    if(index >= $options.length) index = 0;
                    else if(index < 0) index = $options.length - 1;

                    $active_index = $options.filter('.active').index();
                    // Only do if index changes
                    if($active_index != index) {
                        $active = $options.eq($active_index);
                        $active.removeClass('active');
                        $active.hide();

                        $options.eq(index).show();
                        $options.eq(index).addClass('active');
                    }

                };

                $btnNext.on('click', function(e) {
                    e.preventDefault();
                    $active_index = $options.filter('.active').index();
                    moveSlide($active_index + 1);
                });

                $btnBack.on('click', function(e) {
                    e.preventDefault();
                    $active_index = $options.filter('.active').index();
                    moveSlide($active_index - 1);
                });

                if(!$active) {
                    $options.first().addClass('active').show();
                    $active_index = 0;
                    $active = $options.eq($active_index);
                }
            });
        }
    };

    $.fn.sliderSelect = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist' );
        }
    }; // Plugin end
}(jQuery));