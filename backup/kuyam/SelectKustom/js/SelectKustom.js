/*
	Plugin: Jquery Multi selection UI plugin
	Author: Vubin
	Email:  vubin1311@gmail.com
	Date:   21/3/2016
	Ver:    0.1
		
*/

(function ($) {

	$.fn.selectKustom = function () {

		this.each(function () {

			//init Object values
			var selectKustom = $(this);

			//add more UI to HTML code
			selectKustom.find(".item-holder").append("<span class='item-counter'>0</span>");
			selectKustom.find(".item-holder").append("<ul></ul>");
			//selectKustom.find(".item-holder ul").append("<li class='show-less'>show less</li>");
			selectKustom.find(".show-less").hide();
			selectKustom.find(".item-counter").hide();
			selectKustom.find(".item-holder").append("<label></label>");
			selectKustom.find(".item-holder label").text(selectKustom.data("title"));

			var currentElementTop = 0;


			//get actual height of item holder
			var heightItemHolder = selectKustom.find(".item-holder").outerHeight();
			//count total hidden items
			var totalRestItem = 0;
			var totalItem = 0;


			//after loading data to list, scroll must be invisible to iscroll calculate the scroll height
			$(".item-list").css({
				"visibility": "hidden"
			});

			//detect all hidden item and count up
			function countHiddenItems() {

				totalRestItem = 0;
				currentElementTop = 0;


				totalItem = selectKustom.find(".item-holder li").size();


				if (totalItem > 0) {
					selectKustom.find(".item-holder label").hide();
				} else {
					selectKustom.find(".item-holder label").show();

				}

				//get holder position top to compare to each other items		
				var holderPositionTop = selectKustom.find(".item-holder ul").offset().top;

				for (var i = 0; i < totalItem; i++) {

					var _element = selectKustom.find(".item-holder li").eq(i);

					currentElementTop = $(_element).offset().top;

					if (holderPositionTop < currentElementTop && $(_element).attr('class') != "show-less") {

						totalRestItem = totalItem - i;

						selectKustom.find(".item-counter").text("+" + totalRestItem); //show total hidden items
						selectKustom.find(".item-holder ul").css({
							'padding-right': selectKustom.find(".item-counter").innerWidth()
						});
						selectKustom.find(".item-counter").show();

						break;

					} else {
						selectKustom.find(".item-counter").text('');
						selectKustom.find(".item-counter").hide();
						selectKustom.find(".item-holder").css({
							'padding-right': ''
						});

					} // end else
				} // end for

				selectKustom.find(".item-holder ul li").removeClass("active");

			} // end countHiddenItems func

			//event click to show more or less items in holder
			showMoreLess();

			function showMoreLess() {

				//show more all hidden items when click on total hidden label

				selectKustom.find(".item-counter").on("click", function () {
					selectKustom.find(".item-holder").css({
						"height": "auto"
					});

					selectKustom.find(".item-counter").css({
						"visibility": "hidden"
					});


					//append and show this tag to last 
					selectKustom.find(".item-holder ul").append("<li class='show-less'>show less</li>");
					selectKustom.find(".item-list").hide();

					//show less all hidden items as click on last item with text "show less"
					selectKustom.find(".show-less").on("click", function (e) {

						e.stopPropagation();
						selectKustom.find(".item-holder").css({
							"height": heightItemHolder
						});


						selectKustom.find(".show-less").remove();
						selectKustom.find(".item-list").hide();
						selectKustom.find(".item-counter").css({
							"visibility": "visible"
						});
						countHiddenItems();

					});

					countHiddenItems();

				});
			}

			//responsive event
			window.addEventListener('resize', function (e) {
				countHiddenItems();

			});

			//count init items list
			initSelectedItemsFromList();

			function initSelectedItemsFromList() {

				selectKustom.find(".item-list ul li").each(function () {
					if ($(this).hasClass("active")) {
						selectKustom.find(".item-holder label").hide();
						addItemToHolder(this);
						countHiddenItems();
					}

				});

			}

			var firstToggle = 0;

			selectKustom.find(".item-holder").on("click", function (e) {


				if (heightItemHolder == selectKustom.find(".item-holder").outerHeight()) {

					if (!$(e.target).closest('.item-list').length && !$(e.target).is('.item-list')) {

						if ($('.item-list').is(":visible") && firstToggle == 0) {
							$(".item-list").hide();
							selectKustom.find(".item-list").show();
							$(".item-list").css({
								"visibility": "visible"
							});
						} else {
							if ($('.item-list').is(":visible")) {
								$(".item-list ").hide();

							} else {
								$(".item-list").hide();
								selectKustom.find(".item-list").show();
								$(".item-list").css({
									"visibility": "visible"
								});

							}
						}
						firstToggle = 1;

					}

				}

				e.stopPropagation();


			});

			$(document).click(function (e) {
				if (!$(e.target).closest('.item-list').length && !$(e.target).is('.item-list')) {
					if ($('.item-list').is(":visible")) {
						$(".item-list ").hide();
					}
				}


			});

			//list item will be closed as click on each item and then it will bee added to holder
			selectKustom.find(".item-list li").on("click", function () {

				if (!$(this).hasClass("active")) {

					addItemToHolder(this);
					$(this).addClass("active");
					countHiddenItems();
				} else {
					removeItemFromHolder($(this));
					$(this).removeClass("active");
					countHiddenItems();
				}

			});

			function removeItemFromHolder($selectedItem) {
				selectKustom.find(".item-holder ul li").each(function () {
					if ($(this).data('value') == $selectedItem.data('value')) {
						$(this).remove();
						return;
					}
				});
			}

			//add and remove a item
			function addItemToHolder(selectedItem) {
				selectKustom.find(".item-holder ul").append(selectedItem.outerHTML);
				selectKustom.find(".item-holder ul li:last-child").append("<span class='btn-close'>x</span>");

				selectKustom.find(".item-holder li .btn-close").on("click", function (e) {

					e.stopPropagation();
					var _currentItem = $(this).parents("li");
					$(this).remove();

					selectKustom.find(".item-list ul li").each(function () {
						if ($(this).data('value') == _currentItem.data('value')) {
							$(this).removeClass('active');
							return;
						}
					});

					$(_currentItem).remove();

					countHiddenItems();

					if (selectKustom.find(".item-counter").text() === '') {
						selectKustom.find(".show-less").trigger('click');
					}
				});

			} // end addItemToHolder

		});

		return this;

	};

}(jQuery));