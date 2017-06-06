'use strict';

$(document).ready(function () {
	$("#business-content li").click(function (e) {
		var className = $(e.target).attr('id');
		if (className == "arrow3") {
			$("#business-content .tab1").animate({ width: "64px" }, 300).removeClass("active");
			$("#business-content .tab2").animate({ width: "780px" }, 300).addClass("active");
			return false;
		} else if (className == "arrow4") {
			$("#business-content .tab2").animate({ width: "64px" }, 300).removeClass("active");
			$("#business-content .tab3").animate({ width: "780px" }, 300).addClass("active");
			return false;
		}

		if (!$(this).hasClass("active")) {
			$(this).animate({ width: "780px" }, 300);
			for (i = 0; i < 3; i++) {
				if ($("#business-content li").eq(i).hasClass("active")) {
					$("#business-content li").eq(i).animate({ width: "64px" }, 300).removeClass("active");
				}
			}
			$(this).addClass("active");
		}
	});

	$("#tabs-how-it-works").tabs();
	$("#accordion-user").accordion({ heightStyle: "content" });
	$('#accordion-user .icon-down').click(function () {
		var slideAccordion = $(this).attr("id");
		if (slideAccordion == "accordion-user-2") {
			$("#accordion-user").accordion("option", "active", 1);
		} else if (slideAccordion == "accordion-user-3") {
			$("#accordion-user").accordion("option", "active", 2);
		}
	});

	$("#accordion-business").accordion({ heightStyle: "content" });
	$('#accordion-business .icon-down').click(function () {
		var slideAccordion = $(this).attr("id");
		if (slideAccordion == "accordion-business-2") {
			$("#accordion-business").accordion("option", "active", 1);
		} else if (slideAccordion == "accordion-business-3") {
			$("#accordion-business").accordion("option", "active", 2);
		}
	});
});