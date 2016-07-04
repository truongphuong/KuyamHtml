/*
	Plugin: Jquery Multi selection UI plugin
	Author: Vubin
	Email:  vubin1311@gmail.com
	Date:   21/3/2016
	Ver:    0.1
		
*/

(function ($) {

    function SelectKustom(item, options) {
        this.options = $.extend({}, options);
        this.item = $(item);
        this.init();
    };

    SelectKustom.prototype = {

        init: function () {

            var selectKustom = this;

            if (selectKustom.item.find(".item-list ul li").size() == 0)
                selectKustom.item.addClass('disabled');

            //add more UI to HTML code
            selectKustom.item.find(".item-holder").append("<span class='item-counter'>0</span>");
            selectKustom.item.find(".item-holder").append("<ul></ul>");
            //selectKustom.item.find(".item-holder ul").append("<li class='show-less'>show less</li>");
            selectKustom.item.find(".show-less").hide();
            selectKustom.item.find(".item-counter").hide();
            selectKustom.item.find(".item-holder").append("<label></label>");
            selectKustom.item.find(".item-holder label").text(selectKustom.item.data("title"));

            $(".item-list").css({
                "visibility": "hidden",
                "border-width": 0
            });

            selectKustom.showMoreLess();

            selectKustom.item.find(".item-list ul li").each(function (e) {

                if ($(this).hasClass("active")) {

                    selectKustom.item.find(".item-holder label").hide();

                    selectKustom.addItemToHolder(this);

                    selectKustom.countHiddenItems();
                }
            });

            selectKustom.item.find(".item-list li").on("click", function (e) {

                selectKustom.item.trigger('sk.modified');

                if (!$(e.target).hasClass("active")) {

                    selectKustom.addItemToHolder(e.target);
                    $(e.target).addClass("active");
                    selectKustom.countHiddenItems();

                } else {

                    selectKustom.removeItemFromHolder($(e.target));
                    $(e.target).removeClass("active");
                    selectKustom.countHiddenItems();
                }

                if (selectKustom.item.find('.item-list').find('li').not(".active").length === 0) {

                    selectKustom.item.find('.item-list').css({
                        "border-width": 0
                    });

                } else {

                    selectKustom.item.find('.item-list').css({
                        "border-width": 1
                    });
                }

                setTimeout(function () {
                    selectKustom.item.data('IScroll').refresh();
                }, 100);
            });

            var heightItemHolder = selectKustom.item.find(".item-holder").outerHeight();
            var firstToggle = 0;

            selectKustom.item.find(".item-holder").on("click", function (e) {

                e.stopPropagation();

                if (heightItemHolder == selectKustom.item.find(".item-holder").outerHeight()) {

                    if (!$(e.target).closest('.item-list').length && !$(e.target).is('.item-list')) {


                        if (selectKustom.item.find('.item-list').is(":visible") && firstToggle == 0) {

                            selectKustom.item.find(".item-list").hide();
                            selectKustom.item.find(".item-list").show();
                            selectKustom.item.find(".item-list").css({
                                "visibility": "visible"
                            });

                        } else {

                            if (selectKustom.item.find('.item-list').is(":visible")) {

                                selectKustom.item.find(".item-list").hide();

                            } else {

                                //selectKustom.item.find(".item-list").hide();
                                selectKustom.item.find(".item-list").show();
                                selectKustom.item.find(".item-list").css({
                                    "visibility": "visible"
                                });

                            }
                        }

                        if (selectKustom.item.find('.item-list').find('li').not(".active").length === 0) {
                            selectKustom.item.find('.item-list').css({
                                "border-width": 0
                            });
                        } else {
                            selectKustom.item.find('.item-list').css({
                                "border-width": 1
                            });
                        }

                        firstToggle = 1;
                    }

                    if (selectKustom.item.data('IScroll')) {
                        setTimeout(function () {
                            selectKustom.item.data('IScroll').refresh();
                        }, 200);
                    }
                }


            });

            $(document).click(function (e) {
                if (!$(e.target).closest('.item-list').length && !$(e.target).is('.item-list')) {
                    if ($('.item-list').is(":visible")) {
                        $(".item-list ").hide();
                    }
                }

            });
        },
        addItemToHolder: function (item) {

            var selectKustom = this;

            selectKustom.item.find(".item-holder ul").append(item.outerHTML);

            //selectKustom.item.find(".item-holder ul li:last-child").append("<span class='btn-close'>x</span>");

            selectKustom.item.find(".item-holder ul li:last-child").append(function () {

                return $("<span class='btn-close'>x</span>").click(function (e) {

                    selectKustom.item.trigger('sk.modified');

                    e.stopPropagation();

                    var _currentItem = $(this).parents("li");

                    $(this).remove();

                    selectKustom.item.find(".item-list ul li").each(function () {

                        if ($(this).data('value') == _currentItem.data('value')) {

                            $(this).removeClass('active');

                            return;
                        }
                    });

                    $(_currentItem).remove();

                    //selectKustom.countHiddenItems();

                    if (selectKustom.item.find(".item-counter").text() === '') {

                        selectKustom.item.find(".show-less").trigger('click');
                    }

                    if (selectKustom.item.find('.item-list').find('li').not(".active").length === 0) {

                        selectKustom.item.find('.item-list').css({
                            "border-width": 0
                        });
                        selectKustom.item.find(".item-list").hide();

                    } else {

                        selectKustom.item.find('.item-list').css({
                            "border-width": 1,
                            "visibility": "visible"
                        });

                    }

                    selectKustom.countHiddenItems();

                    setTimeout(function () {
                        selectKustom.item.data('IScroll').refresh();
                    }, 200);
                });

            });
            
        },
        countHiddenItems: function () {

            var selectKustom = this;

            var totalRestItem = 0;
            var currentElementTop = 0;
            var totalItem = selectKustom.item.find(".item-holder li").size();
           
            if (totalItem > 0) {
                selectKustom.item.find(".item-holder label").hide();
            } else {
                selectKustom.item.find(".item-holder label").show();
            }

            selectKustom.item.find(".item-holder ul li").removeClass("active");

            //get holder position top to compare to each other items		
            var holderPositionTop = selectKustom.item.find(".item-holder ul").offset().top;            

            for (var i = 0; i < totalItem; i++) {

                var _element = selectKustom.item.find(".item-holder li").eq(i);

                currentElementTop = $(_element).offset().top;                

                if (holderPositionTop < currentElementTop && $(_element).attr('class') != "show-less") {

                    totalRestItem = totalItem - i;

                    selectKustom.item.find(".item-counter").text("+" + totalRestItem); //show total hidden items

                    //selectKustom.item.find(".item-holder ul").css({
                    //    'padding-right': selectKustom.item.find(".item-counter").innerWidth()
                    //});

                    selectKustom.item.find(".item-counter").show();

                    break;

                } else {

                    selectKustom.item.find(".item-counter").text('');
                    selectKustom.item.find(".item-counter").hide();
                    //selectKustom.item.find(".item-holder").css({ 'padding-right': '' });

                } // end else
            } // end for

            //selectKustom.item.find(".item-holder ul li").removeClass("active");
        },
        showMoreLess: function () {
            var selectKustom = this;
            //show more all hidden items when click on total hidden label

            var heightItemHolder = selectKustom.item.find(".item-holder").outerHeight();

            selectKustom.item.find(".item-counter").on("click", function () {
                selectKustom.item.find(".item-holder").addClass('open');
                //selectKustom.item.find(".item-holder").css({
                //    "height": "auto"
                //});

                //selectKustom.item.find(".item-counter").css({
                //    "visibility": "hidden"
                //});

                //append and show this tag to last 
                selectKustom.item.find(".item-list").hide();
                selectKustom.countHiddenItems();

                selectKustom.item.find(".item-holder ul").append(function () {

                    return $("<li class='show-less'>show less</li>").click(function (e) {

                        e.stopPropagation();

                        //selectKustom.item.find(".item-holder").css({
                        //    "height": heightItemHolder
                        //});

                        $(e.target).remove();

                        selectKustom.item.find(".item-list").hide();
                        //selectKustom.item.find(".item-counter").css({
                        //    "visibility": "visible"
                        //});

                        selectKustom.countHiddenItems();

                        selectKustom.item.find(".item-holder").removeClass('open');

                    });
                });

            });
        },
        removeItemFromHolder: function ($selectedItem) {
            var selectKustom = this;
            selectKustom.item.find(".item-holder ul li").each(function () {
                $(this).remove();
                //if ($(this).data('value') == $selectedItem.data('value')) {
                //    $(this).remove();
                //    return;
                //}
            });

        },
        setValue: function (items) {

            var selectKustom = this;
            selectKustom.item.find(".item-holder").removeClass('open');

            selectKustom.item.find(".item-list ul li").each(function () {
                $(this).removeClass("active");
                selectKustom.removeItemFromHolder($(this));
            });


            if (items == undefined || items.length == 0) {

                //var heightItemHolder = selectKustom.item.find(".item-holder").outerHeight();
                //selectKustom.item.find(".item-holder").css({
                //    "height": heightItemHolder
                //});

                selectKustom.item.find(".item-holder label").show();
                selectKustom.item.find(".item-counter").hide();
                selectKustom.item.find(".show-less").remove();
                selectKustom.item.find(".item-list").hide();

                //selectKustom.item.find(".item-counter").css({
                //    "visibility": "visible"
                //});
                return;
            }

            selectKustom.item.find(".item-list ul li").each(function (e) {
                var liItem = this;
                items.forEach(function (value) {
                    if ($(liItem).data("value") == value) {
                        $(liItem).addClass("active");
                        selectKustom.item.find(".item-holder label").hide();
                        selectKustom.addItemToHolder(liItem);
                        selectKustom.countHiddenItems();
                    }
                })
            });

           

        },
        getValue: function () {
            var selectKustom = this;
            var selecteds = [];
            selectKustom.item.find(".item-list ul li").each(function (e) {
                if ($(this).hasClass("active")) {
                    selecteds.push($(this).data("value"));
                }
            });

            return selecteds;
        }
    }

    $.fn.selectKustom = function (opt) {

        var args = Array.prototype.slice.call(arguments, 1);

        var item = $(this);
        var instance = item.data('SelectKustom');

        if (!instance) {
            item.data('SelectKustom', new SelectKustom(this, opt));
        } else {
            if (typeof opt === 'string') {
                return instance[opt].apply(instance, args);
            }
        }

        return this;

    };

}(jQuery));